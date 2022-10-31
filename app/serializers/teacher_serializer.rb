class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :role, :gender, :image, :phone_no, :address, :full_name, :email, :password_digest, :username
end
