Rails.application.routes.draw do
  
  #  resources :orders [:index, :show]
  # resources :category_items [:index, :show]
  # resources :categories [:index, :show]
  resources :items, only: [:index, :show]
  resources :users, only: [:index, :create, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
