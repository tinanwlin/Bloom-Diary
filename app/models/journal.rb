class Journal < ActiveRecord::Base
    belongs_to :user

    # validates :content, :location, presence: true 


    # currently a class method:
    def self.check_journal email, date

        user = User.find_by(email: email)
        if user 
           user.journals.where(date: date).first
        end
    end

end