class StudentSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :image, :email, :admission_no, :phone_no, :teacher, :classroom

  def classroom
    self.object.classroom.name
  end

  def teacher
    self.object.classroom.teacher.full_name
  end

end
