Rails.application.routes.draw do
  
  resources :orders, only: [:index, :show, :create]
  resources :category_items, only: [:index, :show]
  resources :categories, only: [:index, :show]
  resources :items, only: [:index, :show, :create, :destroy, :update]
  resources :users, only: [:index, :show, :destroy]
  post "/items/sold", to: "items#sold"
  post "/signup", to: "users#create"
  get "/me", to: "sessions#me"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end