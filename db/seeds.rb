# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# puts "Seeding Admin"
# admin = Admin.create(username: "admin", email: "angelastephen14@gmail.com", role: "admin", password: "admin")
# puts "Done Seeding Admin"

# puts "Seeding Teachers..."
# teacher1 = Teacher.create(username: "james", email: "james@gmail.com", role: "teacher", password: "james", gender: "Male", full_name: "James Bond", address:"33 westlands", phone_no: "0788223355", image: "https://images.unsplash.com/photo-1631131431211-4f768d89087d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBtYW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
# teacher3 = Teacher.create(username: "grace", email: "grace@gmail.com", role: "teacher", password: "grace", gender: "Female",  full_name: "Grace Knight", address:"32 Eastlands", phone_no: "0744992233", image: "https://images.unsplash.com/photo-1601611900876-391151003440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
# teacher2 = Teacher.create(username: "jose", email: "jose@gmail.com", role: "teacher", password: "jose", full_name: "Joseph Otwoma", address:"31 South-B", phone_no: "0755627892", gender: "Male", image: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBtYW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
# puts "Done Seeding Teachers"

# puts "Seeding Parents..."
# parent1 = Parent.create(role: "parent", address:"23 west", phone_no: "0755663344", full_name:"John Awiti",email:"jon@gmail.com",password:"jon", username: "jon")
# parent2 = Parent.create(username: "okech", address:"22 North", phone_no: "0733443322", email: "okech@gmail.com", role: "parent", password: "okech", full_name: "Okech Johnson")
# parent3 = Parent.create(username: "tim", address:"21 South", phone_no: "0744553344", email: "tim@gmail.com", role: "parent", password: "tim", full_name: "Tim Kut")
# puts "Done Seeding Parents"


# puts "Seeding Subjects..."
# subject1 = Subject.create(name: "Web Development")
# subject2 = Subject.create(name: "Cyber Security")
# subject3 = Subject.create(name: "Data Science")
# subject4 = Subject.create(name: "Networking")
# puts "Done Seeding Subjects"

# puts "Seeding Classrooms"
# classroom1 = Classroom.create(name: 'Pegion', teacher_id: 1)
# classroom2 = Classroom.create(name: 'Dove', teacher_id: 2)
# classroom3 = Classroom.create(name: 'Sparrow', teacher_id: 3)
# puts "Done Seeding Classrooms"


# puts "Seeding Students..."
# # student = Student.create(role: "student",  gender: "Female", image: "https://thumbs.dreamstime.com/b/young-woman-student-avatar-icon-vector-isolated-female-user-silhouette-girl-wearing-eyeglasses-portrait-flat-faceless-person-head-223352495.jpg", parent_id: 1, phone_no: "0707777772", admission_no: "12543", subject_id: 1, full_name: "Angela Kanyi", email: "kanyi@gmail.com", password: "angela", classroom_id: 1, username: "angela")
# # student2 = Student.create(role: "student",  gender: "Male", image: "https://cdn1.vectorstock.com/i/1000x1000/10/95/cute-young-man-avatar-character-cartoon-style-vector-36081095.jpg", parent_id: 1, phone_no: "12345678", admission_no: "12544", subject_id: 2, full_name: "Harry Potter", email: "harry@gmail.com", password: "harry", classroom_id: 2, username: "harry")
# # student3 = Student.create(role: "student",  gender: "Male", image: "https://cdn1.vectorstock.com/i/1000x1000/10/95/cute-young-man-avatar-character-cartoon-style-vector-36081095.jpg", parent_id: 2, phone_no: "0788643233", admission_no: "12545", subject_id: 3, full_name: "James Bond", email: "james@gmail.com", password: "james", classroom_id: 3, username: "james")

# # Angela Kanyi
# #   3:01 PM
# # puts "Seeding Students..."
# student1 = Student.create(role: "student",  gender: "female", image: "https://thumbs.dreamstime.com/b/young-woman-student-avatar-icon-vector-isolated-female-user-silhouette-girl-wearing-eyeglasses-portrait-flat-faceless-person-head-223352495.jpg", parent_id: 1, phone_no: "0707777772", admission_no: "12543", subject_id: 1, full_name: "Angela Kanyi", email: "kanyi@gmail.com", password: "angela", classroom_id: 1, username: "angela")
# student2 = Student.create(role: "student",  gender: "female", image: "https://thumbs.dreamstime.com/b/female-user-profile-avatar-woman-character-screen-saver-happy-emotions-female-user-profile-avatar-199601144.jpg", parent_id: 1, phone_no: "072210902", admission_no: "7081", subject_id: 3, full_name: "Nina Simone", email: "nina@gmail.com", password: "nina", classroom_id: 1, username: "nina")
# student3 = Student.create(role: "student",  gender: "female", image: "https://static.vecteezy.com/system/resources/previews/004/773/704/original/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg", parent_id: 2, phone_no: "0721090806", admission_no: "7082", subject_id: 2, full_name: "Louise Belcher", email: "Louise@gmail.com", password: "louise", classroom_id: 1, username: "louise")
# student4 = Student.create(role: "student",  gender: "male", image: "https://cdn1.vectorstock.com/i/1000x1000/10/95/cute-young-man-avatar-character-cartoon-style-vector-36081095.jpg", parent_id: 1, phone_no: "0707777772", admission_no: "7086", subject_id: 1, full_name: "Dennis Mburu", email: "deno@gmail.com", password: "deno", classroom_id: 1, username: "deno")
# student5 = Student.create(role: "student",  gender: "female", image: "https://img.freepik.com/premium-vector/beautiful-girl-with-blue-hair-avatar-woman-social-network_499739-618.jpg", parent_id: 1, phone_no: "070799999", admission_no: "7073", subject_id: 1, full_name: "Elee Silver ", email: "elee@gmail.com", password: "elee", classroom_id: 1, username: "elee")
# student6 = Student.create(role: "student",  gender: "female", image:"https://img.freepik.com/premium-vector/portrait-caucasian-woman-avatar-female-person-vector-icon-adult-flat-style-headshot_605517-25.jpg?w=360", parent_id: 1, phone_no: "070788888", admission_no: "7090", subject_id: 1, full_name: "Tina Turner ", email: "Tina@gmail.com", password: "tina", classroom_id: 1, username: "tina")
# student7 = Student.create(role: "student",  gender: "female", image: "https://img.freepik.com/premium-vector/portrait-redhead-woman-avatar-female-person-vector-icon-adult-flat-style_605517-158.jpg", parent_id: 1, phone_no: "0707666662", admission_no: "7900", subject_id: 1, full_name: "Valentine Rose", email: "valentine@gmail.com", password: "valentine", classroom_id: 1, username: "valentine")
# student8 = Student.create(role: "student",  gender: "femal", image: "https://img.freepik.com/premium-vector/portrait-caucasian-woman-avatar-female-person-vector-icon-adult-flat-style-headshot_605517-18.jpg", parent_id: 3, phone_no: "0700000072", admission_no: "6666", subject_id: 1, full_name: "Berry Brown", email: "berry@gmail.com", password: "Berry", classroom_id: 1, username: "Berry")
# student9 = Student.create(role: "student",  gender: "female", image: "https://previews.123rf.com/images/elisaart/elisaart2110/elisaart211000008/176389543-girl-avatar-face-of-a-student-schoolgirl-isolated-on-a-white-background-cartoon-style-vector-illustr.jpg", parent_id: 1, phone_no: "12345678", admission_no: "12544", subject_id: 2, full_name: "Harry Potter", email: "harry@gmail.com", password: "harry", classroom_id: 2, username: "harry")
# student10 = Student.create(role: "student",  gender: "male", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Hy7fOrAjiEtgHwrpb969lel309cEpasXpg&usqp=CAU", parent_id: 2, phone_no: "0790801673", admission_no: "7083", subject_id: 3, full_name: "lucas brown", email: "lucas@gmail.com", password: "lucas", classroom_id: 1, username: "lucas")
# student11 = Student.create(role: "student",  gender: "male", image: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg", parent_id: 1, phone_no: "12345678", admission_no: "12544", subject_id: 2, full_name: "Harry Potter", email: "harry@gmail.com", password: "harry", classroom_id: 2, username: "harry")
# # student = Student.create(role: "student",  gender: "female", image: "", parent_id: 1, phone_no: "12345", admission_no: "1", subject_id: 1, full_name: "Angela Kanyi", email: "kanyi@gmail.com", password: "ali", classroom_id: 1, username: "ali")
# # puts "Done Seeding Students"


# # student = Student.create(role: "student",  gender: "female", image: "", parent_id: 1, phone_no: "12345", admission_no: "1", subject_id: 1, full_name: "Angela Kanyi", email: "kanyi@gmail.com", password: "ali", classroom_id: 1, username: "ali")
# puts "Done Seeding Students"


# puts "Seeding Subject_Teachers"
# subject_teacher1 = SubjectTeacher.create(teacher_id: 1, subject_id: 1)
# subject_teacher2 = SubjectTeacher.create(teacher_id: 1, subject_id: 2)
# subject_teacher1 = SubjectTeacher.create(teacher_id: 2, subject_id: 3)
# subject_teacher1 = SubjectTeacher.create(teacher_id: 2, subject_id: 4)
# puts "Done Seeding Subject teachers"



# puts "Seeding Assignments"
# assignment1 = Assignment.create(name: "tribute page", subject_id: 1, due_date: "2022-11-04" )
# assignment2 = Assignment.create(name: "Login Authentication", subject_id: 1, due_date: "2022-11-04" )
# assignment3 = Assignment.create(name: "OWASP top 10 summary", subject_id: 2, due_date: "2022-11-04" )
# assignment4 = Assignment.create(name: "Attack Types Essay", subject_id: 2, due_date: "2022-11-04" )
# puts "Done Seeding Assignments"


# puts "Seeding Assessments"
# assessment1 = Assessment.create(name: "Project - E-Commerce Site", subject_id: 1, total: 100)
# assessment2 = Assessment.create(name: "Project - Blog Website", subject_id: 1, total: 100)
# assessment3 = Assessment.create(name: "Build Simple key-Logger", subject_id: 2, total: 100)
# assessment4 = Assessment.create(name: "Malware Reverse Engineering", subject_id: 2, total: 100)
# puts "Done Seeding Assessments"


# puts "Seeding Student Assignment"
# student_assignment1 = StudentAssignment.create(student_id:1, assignment_id:1)
# student_assignment2 = StudentAssignment.create(student_id:1, assignment_id:2)
# student_assignment3 = StudentAssignment.create(student_id:2, assignment_id:1)
# student_assignment4 = StudentAssignment.create(student_id:2, assignment_id:2)
# student_assignment5 = StudentAssignment.create(student_id:3, assignment_id:3)
# student_assignment6 = StudentAssignment.create(student_id:3, assignment_id:4)
# student_assignment7 = StudentAssignment.create(student_id:4, assignment_id:3)
# student_assignment8 = StudentAssignment.create(student_id:4, assignment_id:4)
# puts "Done Seeding Student Assignments"


# puts "Seeding Student Assessments"
# student_assessment1 = StudentAssesment.create(student_id: 1, assessment_id: 1)
# student_assessment2 = StudentAssesment.create(student_id: 2, assessment_id: 2)
# student_assessment3 = StudentAssesment.create(student_id: 3, assessment_id: 3)
# student_assessment4 = StudentAssesment.create(student_id: 4, assessment_id: 4)
# puts "Done Seeding Student Assessments"


# puts "Completed All Seeding"


puts "Seeding Admin"
admin = Admin.create(username: "admin", email: "angelastephen14@gmail.com", role: "admin", password: "admin")
puts "Done Seeding Admin"
puts "Seeding Teachers..."
teacher1 = Teacher.create(username: "james", email: "james@gmail.com", role: "teacher", password: "james", gender: "Male", full_name: "James Bond", address:"33 westlands", phone_no: "0788223355", image: "https://images.unsplash.com/photo-1631131431211-4f768d89087d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBtYW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
teacher3 = Teacher.create(username: "grace", email: "grace@gmail.com", role: "teacher", password: "grace", gender: "Female",  full_name: "Grace Knight", address:"32 Eastlands", phone_no: "0744992233", image: "https://images.unsplash.com/photo-1601611900876-391151003440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
teacher2 = Teacher.create(username: "jose", email: "jose@gmail.com", role: "teacher", password: "jose", full_name: "Joseph Otwoma", address:"31 South-B", phone_no: "0755627892", gender: "Male", image: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBtYW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
puts "Done Seeding Teachers"
puts "Seeding Parents..."
parent1 = Parent.create(role: "parent", address:"23 west", phone_no: "0755663344", full_name:"John Awiti",email:"jon@gmail.com",password:"jon", username: "jon")
parent2 = Parent.create(username: "okech", address:"22 North", phone_no: "0733443322", email: "okech@gmail.com", role: "parent", password: "okech", full_name: "Okech Johnson")
parent3 = Parent.create(username: "tim", address:"21 South", phone_no: "0744553344", email: "tim@gmail.com", role: "parent", password: "tim", full_name: "Tim Kut")
puts "Done Seeding Parents"
puts "Seeding Subjects..."
subject1 = Subject.create(name: "Web Development")
subject2 = Subject.create(name: "Cyber Security")
subject3 = Subject.create(name: "Data Science")
subject4 = Subject.create(name: "Networking")
puts "Done Seeding Subjects"
puts "Seeding Classrooms"
classroom1 = Classroom.create(name: 'Pegion', teacher_id: 1)
classroom2 = Classroom.create(name: 'Dove', teacher_id: 2)
classroom3 = Classroom.create(name: 'Sparrow', teacher_id: 3)
puts "Done Seeding Classrooms"
puts "Seeding Students..."
student = Student.create(role: "student",  gender: "Female", image: "https://thumbs.dreamstime.com/b/young-woman-student-avatar-icon-vector-isolated-female-user-silhouette-girl-wearing-eyeglasses-portrait-flat-faceless-person-head-223352495.jpg", parent_id: 1, phone_no: "0707777772", admission_no: "12543", subject_id: 1, full_name: "Angela Kanyi", email: "kanyi@gmail.com", password: "angela", classroom_id: 1, username: "angela")
student2 = Student.create(role: "student",  gender: "Female", image: "https://thumbs.dreamstime.com/b/young-woman-student-avatar-icon-vector-isolated-female-user-silhouette-girl-wearing-eyeglasses-portrait-flat-faceless-person-head-223352495.jpg", parent_id: 2, phone_no: "0723454543", admission_no: "12549", subject_id: 1, full_name: "Mariam Ali", email: "ali@gmail.com", password: "ali", classroom_id: 1, username: "ali")
student3 = Student.create(role: "student",  gender: "Female", image: "https://thumbs.dreamstime.com/b/young-woman-student-avatar-icon-vector-isolated-female-user-silhouette-girl-wearing-eyeglasses-portrait-flat-faceless-person-head-223352495.jpg", parent_id: 1, phone_no: "12345678", admission_no: "12544", subject_id: 2, full_name: "Olivia Akinyi", email: "olivia@gmail.com", password: "olivia", classroom_id: 2, username: "olivia")
student4 = Student.create(role: "student",  gender: "Male", image: "https://cdn1.vectorstock.com/i/1000x1000/10/95/cute-young-man-avatar-character-cartoon-style-vector-36081095.jpg", parent_id: 2, phone_no: "0788643233", admission_no: "12545", subject_id: 2, full_name: "Dennis Mburu", email: "dennis@gmail.com", password: "dennis", classroom_id: 2, username: "dennis")
puts "Done Seeding Students"
puts "Seeding Subject_Teachers"
subject_teacher1 = SubjectTeacher.create(teacher_id: 1, subject_id: 1)
subject_teacher2 = SubjectTeacher.create(teacher_id: 1, subject_id: 2)
subject_teacher1 = SubjectTeacher.create(teacher_id: 2, subject_id: 3)
subject_teacher1 = SubjectTeacher.create(teacher_id: 2, subject_id: 4)
puts "Done Seeding Subject teachers"
puts "Seeding Assignments"
assignment1 = Assignment.create(name: "tribute page", subject_id: 1, due_date: "2022-11-04" )
assignment2 = Assignment.create(name: "Login Authentication", subject_id: 1, due_date: "2022-11-04" )
assignment3 = Assignment.create(name: "OWASP top 10 summary", subject_id: 2, due_date: "2022-11-04" )
assignment4 = Assignment.create(name: "Attack Types Essay", subject_id: 2, due_date: "2022-11-04" )
puts "Done Seeding Assignments"
puts "Seeding Assessments"
assessment1 = Assessment.create(name: "Project - E-Commerce Site", subject_id: 1, total: 100)
assessment2 = Assessment.create(name: "Project - Blog Website", subject_id: 1, total: 100)
assessment3 = Assessment.create(name: "Build Simple key-Logger", subject_id: 2, total: 100)
assessment4 = Assessment.create(name: "Malware Reverse Engineering", subject_id: 2, total: 100)
puts "Done Seeding Assessments"
puts "Seeding Student Assignment"
student_assignment1 = StudentAssignment.create(student_id:1, assignment_id:1)
student_assignment2 = StudentAssignment.create(student_id:1, assignment_id:2)
student_assignment3 = StudentAssignment.create(student_id:2, assignment_id:1)
student_assignment4 = StudentAssignment.create(student_id:2, assignment_id:2)
student_assignment5 = StudentAssignment.create(student_id:3, assignment_id:3)
student_assignment6 = StudentAssignment.create(student_id:3, assignment_id:4)
student_assignment7 = StudentAssignment.create(student_id:4, assignment_id:3)
student_assignment8 = StudentAssignment.create(student_id:4, assignment_id:4)
puts "Done Seeding Student Assignments"
puts "Seeding Student Assessments"
student_assessment1 = StudentAssesment.create(student_id: 1, assessment_id: 1)
student_assessment2 = StudentAssesment.create(student_id: 2, assessment_id: 2)
student_assessment3 = StudentAssesment.create(student_id: 3, assessment_id: 3)
student_assessment4 = StudentAssesment.create(student_id: 4, assessment_id: 4)
puts "Done Seeding Student Assessments"

puts "seeding Staffs"
staff1 = Staff.create(full_name: "WednesdayAddams", department: "finance", image: "https://cdn1.vectorstock.com/i/1000x1000/10/95/cute-young-man-avatar-character-cartoon-style-vector-36081095.jpg", phone_no: "0788888888", post: "Clerk")
puts "Done seeding staff"
puts "Completed All Seeding"


