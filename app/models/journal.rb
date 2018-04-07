class Journal < ActiveRecord::Base
    belongs_to :user

    validates :content, :location, presence: true 

end
