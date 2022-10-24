class Teacher < ApplicationRecord
    has_secure_password

    has_many :students
   
    #validates :username, presence: true, uniqueness: true
    #validates :username, length: { minimum: 3 }
    
    #validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid' }

end
