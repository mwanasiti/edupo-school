# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding Admin..."
admin = Admin.create(username: "admin", email: "angelastephen14@gmail.com", role: "admin", password: "admin")
puts "Done Seeding Admin"


puts "Seeding Students..."
student = Student.create(role: "student",  gender: "female", image: "https://i.pinimg.com/564x/34/aa/f3/34aaf33fd9272867c7045f5b8eb495cb.jpg", parent_id: 1, phone_no: "12345", admission_no: "1", subject_id: 1, full_name: "Angela Kanyi", email: "kanyi@gmail.com", password: "ali", classroom_id: 1, username: "ali")
#student1 = Student.create(username: "ali", email: "ali@gmail.com", role: "student", password: "ali", subject_id: 2, classroom_id: 3)
#student2 = Student.create(username: "mariam", email: "mariam@gmail.com", role: "student", password: "mariam")
#student3 = Student.create(username: "siti", email: "siti@gmail.com", role: "student", password: "student")
puts "Done Seeding Students"

puts "Seeding Teachers..."
teacher1 = Teacher.create(username: "deno", email: "deno@gmail.com", role: "teacher", password: "deno")
teacher2 = Teacher.create(username: "mburu", email: "awambuikanyi@gmail.com", role: "teacher", password: "mburu")
teacher3 = Teacher.create(username: "bob", email: "bob@gmail.com", role: "teacher", password: "bob")
puts "Done Seeding Teachers"


puts "Seeding Parents..."
parent1 =Parent.create(role: "parent", address:"23 west", phone_no: "12345", full_name:"Monica Lewinski",email:"monica@gmail.com",password:"jon", username: "jon")
parent2 = Parent.create(username: "okech", email: "okech@gmail.com", role: "parent", password: "okech")
parent3 = Parent.create(username: "tim", email: "tim@gmail.com", role: "parent", password: "parent")

puts "Done Seeding Parents"

puts "Completed All Seeding"

puts "Seeding Subjects..."
subject1 = Subject.create(name: "Marine Biology")
subject2 = Subject.create(name: "Sociology")
subject3 = Subject.create(name: "Development Studies")
subject4 = Subject.create(name: "Communications")
puts "Done Seeding Subjects"

puts "Seeding Classrooms"
classroom1 = Classroom.create(name: 'Pegion', teacher_id: 1)
classroom2 = Classroom.create(name: 'Dove', teacher_id: 1)
classroom3 = Classroom.create(name: 'Sparrow', teacher_id: 1)
puts "Done Seeding Classrooms"

puts "Seeding SubjectTeachers"
subjectteacher1 = SubjectTeacher.create(subject_id: 2, teacher_id: 2)
puts "Done Seeding SubjectTeachers"

puts "Seeding Assignments"
assignment1 = Assignment.create(name: "intro to sociology", subject_teacher_id: 1, due_date: ("09/01/2009"))
puts "Done Seeding Assigments"
