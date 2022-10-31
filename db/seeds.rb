# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# puts "Seeding Admin.."
# admin = Admin.create(username: "admin", email: "admin@gmail.com", role: "admin", password: "admin")
# puts "Done Seeding Admin"

# puts "Seeding Teachers.."
# teacher1 = Teacher.create(username: "deno", email: "deno@gmail.com", role: "teacher", password: "deno")
# teacher2 = Teacher.create(username: "mburu", email: "mburu@gmail.com", role: "teacher", password: "mburu")
# teacher3 = Teacher.create(username: "bob", email: "bob@gmail.com", role: "teacher", password: "bob")
# puts "Done Seeding Teachers"

# puts "Seeding Students.."

# student1 = Student.create(username: "ali", email: "ali@gmail.com", role: "student", password: "ali")
# student2 = Student.create(username: "mariam", email: "mariam@gmail.com", role: "student", password: "mariam")
# student3 = Student.create(username: "siti", email: "siti@gmail.com", role: "student", password: "student")
# puts "Done Seeding Students"
# puts "Seeding Parents.."
# parent1 = Parent.create(username: "jon", email: "jon@gmail.com", role: "parent", password: "jon")
# parent2 = Parent.create(username: "okech", email: "okech@gmail.com", role: "parent", password: "okech")
# parent3 = Parent.create(username: "tim", email: "tim@gmail.com", role: "parent", password: "parent")
# puts "Done Seeding Parents.."
# puts "Completed All Seeding"


puts "Seeding Students..."
Student.create(role: "student",  gender: "female", image: "https://images.unsplash.com/photo-1523825036634-aab3cce05919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", parent_id: 1, phone_no: "0707777772", admission_no: "098765", subject_id: 1, full_name: "Jane Mogasi", email: "jane@gmail.com", password: "jane", classroom_id: 1, username: "jane")
Student.create(role: "student",  gender: "female", image: "https://images.unsplash.com/photo-1523825036634-aab3cce05919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", parent_id: 1, phone_no: "0707777772", admission_no: "14786", subject_id: 1, full_name: "Olivia Adongo", email: "olly@gmail.com", password: "olly", classroom_id: 1, username: "olly")
# Student.create(role: "student",  gender: "male", image: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", parent_id: 1, phone_no: "12345678", admission_no: "12544", subject_id: 2, full_name: "Harry Potter", email: "harry@gmail.com", password: "harry", classroom_id: 2, username: "harry")
# student = Student.create(role: "student",  gender: "female", image: "", parent_id: 1, phone_no: "12345", admission_no: "1", subject_id: 1, full_name: "Angela Kanyi", email: "kanyi@gmail.com", password: "ali", classroom_id: 1, username: "ali")
puts "Done Seeding Students"


# Subject.create(name: "Marine Biology")
# Subject.create(name: "Sociology")
# Subject.create(name: "Development Studies")
# Subject.create(name: "Communications")

# Parent.create(role: "parent", address:"23 west", phone_no: "12345", full_name:"Monica Lewinski",email:"monica@gmail.com",password:"jon", username: "jon")
# Parent.create(role: "parent", address:"24 west", phone_no: "1235", full_name:"Monica Tim",email:"monicatim@gmail.com",password:"parent", username: "tim")

# Classroom.create(name: "Pegion", teacher_id: 1)
# Classroom.create(name: "Dove", teacher_id: 1)
# Classroom.create(name: "Sparrow", teacher_id: 1)

# Teacher.create(role: "teacher", gender: "female", image:"https://i.pinimg.com/564x/8f/fe/23/8ffe23f25c98188f6ac63aaca13ccd37.jpg", phone_no:"4567", address: "44ruby", full_name: "Salma Salim", email: "salma@gmail.com", password:"bob", username:"bob")