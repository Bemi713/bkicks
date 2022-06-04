class OrdersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: Order.all.where(user_id: session[:user_id])
    end

    def create
        if !session[:user_id]
            render json: { errors: ["Please login first"] }, status: :unauthorized
            return
        end
        @order = Order.create!(order_params)
        if @order.valid?
            render json: @order, status: :created
        else
            render json: { errors: @order.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        @order = Order.find_by_id(params[:id])
       if order
            render json: @order
       else
            render json: { error: ["Nothing here!"]}, status: :not_found
       end
    end

    private

    def order_params
        params.permit(:streetnumber, :streetname, :city, :state, :country, :total_price, :zip_code).merge({user_id: session[:user_id]})
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end

