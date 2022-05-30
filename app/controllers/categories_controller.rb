class CategoriesController < ApplicationController
    
    def index
        render json: Category.all
    end
    
    
    def show
        user = Category.find_by_id(params[:id])
        if user
             render json: user
        else
             render json: { error: "Nothing here!"}, status: :not_found
        end
     end
    
end
