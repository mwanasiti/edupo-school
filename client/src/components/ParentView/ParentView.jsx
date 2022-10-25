import React from 'react'
import { useState, useEffect } from 'react';

function ParentView() {

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch("/student_parent")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        console.log(data)
      });
  }, []);


if (students.length === 0)
  return(
    <h1 className="text-center p-3 text-black text-xl font-bold"> You have not enrolled any of your children to Edupo School</h1>
  );

  return (
    <>     <h1 className="text-center p-3 text-black text-xl font-bold">
    These are your students
  </h1>

  <div className="overflow-x-auto relative dark">
    <table className="w-full text-lg text-left text-gray-500 dark:text-gray-400">
      <thead className="text-gray-700 uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            Student Image
          </th>
          <th scope="col" className="py-3 px-6">
            Full Name
          </th>
          <th scope="col" className="py-3 px-6">
            Email
          </th>
          <th scope="col" className="py-3 px-6">
            Admission Number
          </th>
          <th scope="col" className="py-3 px-6">
            Classroom 
          </th>
          <th scope="col" className="py-3 px-6">
            Class Teacher
          </th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr className="bg-white text-black border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-neutral-900 whitespace-nowrap dark:text-white"
            >
              <img
                className="w-[100px] h-20 rounded-md object-cover ml-5"
                src={student.image}
                alt="product"
              ></img>
            </th>
            <td className="py-4 px-6 ">{student.full_name}</td>
            <td className="py-4 px-6">{student.email}</td>
            <td className="py-4 px-6">{student.admission_no}</td>
            <td className="py-4 px-6">{student.classroom}</td>
            <td className="py-4 px-6">{student.teacher}</td>

          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </>
  )
}

export default ParentView