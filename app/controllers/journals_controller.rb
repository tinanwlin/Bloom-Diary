class JournalsController < ApplicationController
  skip_before_action :verify_authenticity_token  
  

  def index
    @all_journals = Journal.where(user_id: @current_user.id)
    render :json => @all_journals
  end
  
end
