class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :due_date, :subject_teacher_id
end
