class User < ActiveRecord::Base
    has_many :journals

    # has_secure_password

    validates :nickname, :email, :password, presence: true
    validates :email, uniqueness: { case_sensitive: false }
    validates :password, length: { minimum: 4 }
    
end
