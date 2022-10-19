class Student < ApplicationRecord
    belongs_to :parent
    has_many :allocations
    has_many :assignments
    has_many :assessments
    has_many :teachers , through: :allocations
    has_many :subjects , through: :allocations

end
