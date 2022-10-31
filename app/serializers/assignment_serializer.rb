class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :due_date

  def subject
    self.object.subject.name
  end
end
