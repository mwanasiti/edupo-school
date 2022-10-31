class ParentSerializer < ActiveModel::Serializer
  attributes :id, :role, :address, :phone_no, :full_name, :email, :password_digest, :username
end
