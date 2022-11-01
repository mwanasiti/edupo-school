class AssessmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :total, 

  def subject
    self.object.subject.name
  end
<<<<<<< HEAD
end
=======
end
>>>>>>> 7478511941374ff2f8bdb94a1abd0aaa8481d3d6
