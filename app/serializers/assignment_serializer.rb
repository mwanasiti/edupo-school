class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject

  def subject
    self.object.subject.name
  end
end
