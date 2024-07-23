import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../services/api";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [ctc, setCtc] = useState('');

  const onFormSubmit = (event) => {


    event.preventDefault();
    var data = {
      name, email, ctc, designation
    }


    try {
      const response = axiosInstance.post('/admin/employees', data);
      console.log(response);
      alert("Created successfully !!!!");
      navigate("/employees");
    } catch (error) {
      console.error("Error Creating Employees:", error);
    }
  }
  return (
    <div className="container">
      <h1>Add Employee</h1>
      <form onSubmit={onFormSubmit}>
        <label for="fname">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Your name.."
          onChange={(event) => setName(event.target.value)}
        />

        <label for="lname">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email.."
        />

        <label for="designation">Designation</label>
        <input
          type="text"
          id="designation"
          value={designation}
          name="designation"
          onChange={(event) => setDesignation(event.target.value)}
          placeholder="Your designation.."
        />

        <label for="ctc">CTC</label>
        <input
          type="text"
          id="ctc"
          name="ctc"
          value={ctc}
          onChange={(event) => setCtc(event.target.value)}
          placeholder="Your ctc.."
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default CreateEmployee;
