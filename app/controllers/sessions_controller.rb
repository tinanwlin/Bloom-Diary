class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token 
  
    # session - Login
    def create
      user = User.find_by_email(params[:email])
      puts 'A-----------------'
      puts user
    
      if user = User.authenticate_with_credentials(params[:email], params[:password])
        
        puts 'B-----------------'
        puts user
        session[:user_id] = user.id
        puts 'C-----------------'
        puts user.id
        redirect_to '/'
      else
        puts 'D-----------------'
        redirect_to '/error'
      end
    end
    
    # session - Logout
    def destroy
      session[:user_id] = nil
      redirect_to '/'
    end
  
  end