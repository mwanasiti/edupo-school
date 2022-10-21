class Student < ApplicationRecord
    has_secure_password


    belongs_to :parent
    belongs_to :subject
    belongs_to :classroom
    has_many :student_assignments
    has_many :assignments, through: :student_assignments
    has_many :student_assessments
    has_many :assessments, through: :student_assessments
   
end
