class ItemsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: Item.all, include: [:categories, :seller]
    end

    def create
        item = Item.create!(item_params)
        item.category_items.create({ category_id: params[:category_id], item_id: item.id })
        if item.valid?
            render json: item, status: :created
        else
            render json: { errors: item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
       item = Item.find_by_id(params[:id])
       if item
            render json: item, include: [:categories, :seller]
       else
        render json: { errors: item.errors.full_messages }, status: :not_found
       end
    end

    def update
        item = Item.find(params[:id])
        if item.seller_id != session[:user_id]
            render json: { errors: ["Not authorized"] }, status: :unauthorized
            return
        end
        item.update(item_params) if item.seller_id == session[:user_id]
        if item.valid?
            render json: item, include: [:categories, :seller], status: :created
        else
            render json: { errors: item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def sold
        @item_ids = params[:items_ids]
        @items = Item.find(@item_ids)
        @items.each {|item| item.update({sold: true})}
        
        render status: :ok
    end

    def destroy
        item = Item.find(params[:id])
        if item.seller_id != session[:user_id]
            render json: { errors: ["Not authorized"] }, status: :unauthorized
            return
        end
        item.destroy if item.seller_id == session[:user_id]
        head :no_content
    end

    private

    def item_params
        params.permit(:name, :img, :desc, :price).merge({seller_id: session[:user_id]})
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
