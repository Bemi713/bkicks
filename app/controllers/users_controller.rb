class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: User.all
    end


    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    def show
       user = User.find_by_id(params[:id])
       if user
            render json: user
       else
            render json: { error: "Nothing here!"}, status: :not_found
       end
    end

    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end