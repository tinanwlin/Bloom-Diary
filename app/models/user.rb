class User < ActiveRecord::Base
    has_many :journals

    has_secure_password

    validates :nickname, :email, :password, presence: true
    validates :email, uniqueness: { case_sensitive: false }
    validates :password, length: { minimum: 4 }
    
    # session - Login
    def self.authenticate_with_credentials email, password
      puts '1-----------------'
      puts email
      puts password

        if user = User.find_by(email: email).try(:authenticate, password)
          user
          puts '2-----------------'
          puts user
          puts
        else
          nil
          puts '3-----------------'
          puts email
          puts password
        end
    end
end


