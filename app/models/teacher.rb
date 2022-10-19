class Teacher < ApplicationRecord
    belongs_to :parent
    has_many :students, through: :allocations
    has_many :subjects , through: :allocations
    has_many :classes
    has_many :assignments
    has_many :assessments
    
end
