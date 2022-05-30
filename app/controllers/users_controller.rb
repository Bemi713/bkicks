class UsersController < ApplicationController
    
    def index
        render json: User.all
    end


    def create
        byebug
        user = User.create!(user_params)
        render json: user
    end

    
    def show
       user = User.find_by_id(params[:id])
       if user
            render json: user
       else
            render json: { error: "Nothing here!"}, status: :not_found
       end
    end
end
