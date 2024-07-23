import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../services/api";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/admin/employees")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin/create-employees">Create Employee</Link></li>
      </ul>


      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>CTC</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.designation}</td>
              <td>{e.ctc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
