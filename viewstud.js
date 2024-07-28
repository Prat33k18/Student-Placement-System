import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "./api";
import Student from "./Studform";
import './ViewAllStudents.css';

function ViewAllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    document.title = "View Students";
    getAllStudents();
  }, []);

  const getAllStudents = () => {
    axios
      .get(`${base_url}`)
      .then((result) => {
        console.log(result.data);
        setStudents(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="text-center">All Students</h1>
      {students.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>College</th>
              <th>Date</th>
              <th>Qualification</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stud) => <Student st={stud} key={stud.id} />)}
          </tbody>
        </table>
      ) : (
        "No Students"
      )}
    </div>
  );
}

export default ViewAllStudents;

//"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:\chrome_dev"
