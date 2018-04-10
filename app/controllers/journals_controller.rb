class JournalsController < ApplicationController
  skip_before_action :verify_authenticity_token  

  def index
  end
  
  def create
    puts "create method"
    @journal = Journal.new(journal_params)
    render :json => @journal
    puts @journal.content
  end
  
  def show
  end


  private

  def journal_params
    params.permit(
      :content
    )
  end
  
end
