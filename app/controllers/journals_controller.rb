class JournalsController < ApplicationController
  # skip_before_action :verify_authenticity_token  
  

  def index
    @all_journals = Journal.where(user_id: @current_user.id).order(date: :desc)
    render :json => @all_journals
  end
  
end
