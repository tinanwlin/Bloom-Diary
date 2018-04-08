Rails.application.routes.draw do
  
  root to: 'homes#index'

  resource :users, only: [:create]
  resource :sessions, only: [:create, :destroy]


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
  post '/watson' => 'watson#make_post_req'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
