class ApplicationController < ActionController::Base

  before_action :current_user
  protect_from_forgery prepend: true, with: :exception

  skip_before_action :verify_authenticity_token  

  private
  
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  # helper_method :current_user

  # def authorize
  #   redirect_to [:root] unless current_user
  # end

end
