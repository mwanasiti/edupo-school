class AssessmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject_teacher_id, :total
end
