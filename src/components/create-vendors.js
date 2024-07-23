import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../services/api";
import { useNavigate } from "react-router-dom";

const CreateVendors = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [upi, setUpi] = useState('');
  const navigate = useNavigate();
  const onFormSubmit = (event) => {

    event.preventDefault();
    var data = {
      email, name, upi
    }

    try {
      const response = axiosInstance.post('/admin/vendors', data);
      console.log(response);
      alert("vendors Created successfully !!!!");
      navigate("/vendors");
    } catch (error) {
      console.error("Error Creating vendors:", error);
    }
  }
  return (
    <div className="container">
      <h1>Add Vendor</h1>
      <form onSubmit={onFormSubmit}>

        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email.."
        />

        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Your name.."
          onChange={(event) => setName(event.target.value)}
        />


        <label for="upi">UPI</label>
        <input
          type="text"
          id="upi"
          name="upi"
          value={upi}
          onChange={(event) => setUpi(event.target.value)}
          placeholder="Your upi.."
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default CreateVendors;
