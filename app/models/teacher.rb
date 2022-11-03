class Teacher < ApplicationRecord
    has_secure_password

    
    has_one :classroom

    has_many :subject_teachers
    has_many :subjects, through: :subject_teachers
    has_many :students, through: :subjects
    has_many :assignments,  through: :subjects
    has_many :assessments,  through: :subjects
   
    validates :username, presence: true, uniqueness: true
    validates :username, length: { minimum: 2}
    
    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid' }

end
