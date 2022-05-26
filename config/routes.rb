Rails.application.routes.draw do
  
  # resources :orders
  # resources :category_items
  # resources :categories
  resources :items, only: [:index, :show]
  resources :users, only: [:index, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
