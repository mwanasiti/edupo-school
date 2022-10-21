class Student < ApplicationRecord
    has_secure_password


    belongs_to :parent
    belongs_to :subject
    belongs_to :classroom
    has_many :student_assignments t
    has_many :assessments
   
end
