class OrdersController < ApplicationController
    def index
        render json: Order.all
    end

    def show
       item = Order.find_by_id(params[:id])
       if order
            render json: item
       else
            render json: { error: "Nothing here!"}, status: :not_found
       end
    end
end

