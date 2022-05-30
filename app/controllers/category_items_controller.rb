class CategoryItemsController < ApplicationController
    def index
        render json: CategoryItem.all
    end

    def show
       item = CategoryItem.find_by_id(params[:id])
       if item
            render json: item
       else
            render json: { error: "Nothing here!"}, status: :not_found
       end
    end
end
