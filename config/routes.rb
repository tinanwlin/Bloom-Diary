Rails.application.routes.draw do
  
  root to: 'homes#index'


  #namespace :api do
  resources :users, only: [:create, :update] do
    resources :journals, only: [:index, :create, :show]
  end
  
  resource :sessions, only: [:create, :destroy]  
  get 'me', to: 'users#me'
  #end
  
  # get 'users/show'

  # get 'home/index'

  # get 'profile/index'

  # Add Routes for Profile page
 
  # resources :users do
  #   root "users#show"
  #   resource :profile
  # end 

  # resources :journals

  # resources :profiles do
  #   root "profiles#index"
  # end
  
   #Route to test API
   post '/watson' => 'watson#natural_language_understanding'
   match "*stuff",to: "homes#index",via: :all
  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
