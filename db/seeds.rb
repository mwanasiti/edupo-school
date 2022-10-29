# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
admin = Admin.create(username: "admin", email: "angelastephen14@gmail.com", role: "admin", password: "admin")
puts "Done Seeding Admin"

puts "Seeding Teachers..."
teacher1 = Teacher.create(username: "deno", email: "deno@gmail.com", role: "teacher", password: "deno", gender: "Male", image: "https://i.pinimg.com/564x/34/aa/f3/34aaf33fd9272867c7045f5b8eb495cb.jpg", full_name: "Dennis Mburu")
teacher2 = Teacher.create(username: "jose", email: "jose@gmail.com", role: "teacher", password: "jose", full_name: "Joseph Otwoma", gender: "true")
teacher3 = Teacher.create(username: "bob", email: "bob@gmail.com", role: "teacher", password: "bob", full_name: "Bob Ross")
puts "Done Seeding Teachers"
puts "Seeding Parents..."
parent1 = Parent.create(role: "parent", address:"23 west", phone_no: "12345", full_name:"Monica Lewinski",email:"monica@gmail.com",password:"jon", username: "jon")
parent2 = Parent.create(username: "okech", email: "okech@gmail.com", role: "parent", password: "okech", full_name: "Mana jonte")
parent3 = Parent.create(username: "tim", email: "tim@gmail.com", role: "parent", password: "tim", full_name: "Tim Kut")
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
classroom2 = Classroom.create(name: 'Dove', teacher_id: 2)
classroom3 = Classroom.create(name: 'Sparrow', teacher_id: 3)
puts "Done Seeding Classrooms"


puts "Seeding Students..."
student = Student.create(role: "student",  gender: "Female", image: "https://thumbs.dreamstime.com/b/young-woman-student-avatar-icon-vector-isolated-female-user-silhouette-girl-wearing-eyeglasses-portrait-flat-faceless-person-head-223352495.jpg", parent_id: 1, phone_no: "0707777772", admission_no: "12543", subject_id: 1, full_name: "Angela Kanyi", email: "kanyi@gmail.com", password: "angela", classroom_id: 1, username: "angela")
student2 = Student.create(role: "student",  gender: "Male", image: "https://cdn1.vectorstock.com/i/1000x1000/10/95/cute-young-man-avatar-character-cartoon-style-vector-36081095.jpg", parent_id: 1, phone_no: "12345678", admission_no: "12544", subject_id: 2, full_name: "Harry Potter", email: "harry@gmail.com", password: "harry", classroom_id: 2, username: "harry")
student3 = Student.create(role: "student",  gender: "Male", image: "https://cdn1.vectorstock.com/i/1000x1000/10/95/cute-young-man-avatar-character-cartoon-style-vector-36081095.jpg", parent_id: 2, phone_no: "0788643233", admission_no: "12545", subject_id: 3, full_name: "James Bond", email: "james@gmail.com", password: "james", classroom_id: 3, username: "james")

# student = Student.create(role: "student",  gender: "female", image: "", parent_id: 1, phone_no: "12345", admission_no: "1", subject_id: 1, full_name: "Angela Kanyi", email: "kanyi@gmail.com", password: "ali", classroom_id: 1, username: "ali")
puts "Done Seeding Students"

puts "Seeding Subject_Teachers"
subject_teacher1 = SubjectTeacher.create(teacher_id: 1, subject_id: 1)
subject_teacher2 = SubjectTeacher.create(teacher_id: 2, subject_id: 2)
subject_teacher1 = SubjectTeacher.create(teacher_id: 3, subject_id: 3)
subject_teacher1 = SubjectTeacher.create(teacher_id: 1, subject_id: 4)
puts "Done Seeding Subject teachers"

puts "Seeding Assignments"

assignment1 = Assignment.create(name: "bones", subject_teacher_id: 1, due_date: "2022-11-04" )
assignment2 = Assignment.create(name: "social communication", subject_teacher_id: 2, due_date: "2022-11-04" )
assignment3 = Assignment.create(name: "business development", subject_teacher_id: 3, due_date: "2022-11-04" )
assignment4 = Assignment.create(name: "Oral skills", subject_teacher_id: 4, due_date: "2022-11-04" )

puts "Done Seeding Assignments"

puts "Seeding Assessments"

assessment1 = Assessment.create(name: "Final Project", subject_teacher_id: 1, total: 100)
assessment2 = Assessment.create(name: "Main Exam", subject_teacher_id: 2, total: 100)
assessment3 = Assessment.create(name: "Capstone Project", subject_teacher_id: 3, total: 100)
assessment4 = Assessment.create(name: "Main Exam", subject_teacher_id: 4, total: 100)

puts "Done Seeding Assessments"


puts "Seeding Student Assignment"

student_assignment1 = StudentAssignment.create(student_id:1, assignment_id:1)
student_assignment2 = StudentAssignment.create(student_id:1, assignment_id:2)
student_assignment3 = StudentAssignment.create(student_id:2, assignment_id:3)
student_assignment4 = StudentAssignment.create(student_id:2, assignment_id:4)
student_assignment5 = StudentAssignment.create(student_id:3, assignment_id:2, score: 15)
student_assignment6 = StudentAssignment.create(student_id:3, assignment_id:3, score: 0)

puts "Done Seeding Student Assignments"

puts "Seeding Student Assessments"
student_assessment1 = StudentAssesment.create(student_id: 1, assessment_id: 1)
student_assessment2 = StudentAssesment.create(student_id: 1, assessment_id: 2)
student_assessment3 = StudentAssesment.create(student_id: 2, assessment_id: 3)
student_assessment4 = StudentAssesment.create(student_id: 2, assessment_id: 4)
student_assessment5 = StudentAssesment.create(student_id: 3, assessment_id: 2, score: 98)
student_assessment6 = StudentAssesment.create(student_id: 3, assessment_id: 3, score: 33)


puts "Done Seeding Student Assessments"



