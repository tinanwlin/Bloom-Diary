Rails.application.routes.draw do
  get 'users/show'

  get 'home/index'
  root 'homes#index'

  # get 'profile/index'

  # Add Routes for Profile page
 
  resources :users do
    root "users#show"
    resource :profile
  end 

  resources :journals

  resources :profiles do
    root "profiles#index"
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
