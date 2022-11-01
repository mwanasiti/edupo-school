class AssignmentSerializer < ActiveModel::Serializer
<<<<<<< HEAD
  attributes :id, :name, :subject, :due_date
=======
  attributes :id, :name, :subject, :due_date, :subject_id
>>>>>>> 7478511941374ff2f8bdb94a1abd0aaa8481d3d6

  def subject
    self.object.subject.name
  end
<<<<<<< HEAD
end
=======
end
>>>>>>> 7478511941374ff2f8bdb94a1abd0aaa8481d3d6
