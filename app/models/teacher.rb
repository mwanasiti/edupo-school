class Teacher < ApplicationRecord
    has_secure_password

    has_many :students
   
    validates :full_name, presence: true, uniqueness: true
    validates :full_name, length: { minimum: 3 }
    
    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid' }

end
