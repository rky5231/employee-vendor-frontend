import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../services/api";


const EmailForm = () => {
    const navigate = useNavigate();
  const [vendors, setVendors] = useState([]);
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch vendors from the backend
    const fetchVendors = async () => {
      try {
        const response = await axiosInstance.get("/admin/vendors");
        setVendors(response.data);
        
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
    };

    fetchVendors();
  }, []);

  const handleCheckboxChange = (vendorId) => {
    setSelectedVendors((prevSelected) =>
      prevSelected.includes(vendorId)
        ? prevSelected.filter((id) => id !== vendorId)
        : [...prevSelected, vendorId]
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const vendorsToSend = vendors.filter((vendor) =>
      selectedVendors.includes(vendor.id)
    );

    try {
      const response = await axiosInstance.post("/admin/send-email", vendorsToSend);
      setMessage(response.data);
      alert("Email Send successfully !!!!");
      navigate('/email-logs');
    } catch (error) {
      setMessage("Error sending emails");
      console.error("Error sending emails:", error);
    }
    
  };

  return (
    <div>
      <h2 class="emailh2">Send Email to Vendors</h2>
      <form class="email-form" onSubmit={handleSubmit}>
        {vendors.map((vendor) => (
          <div key={vendor.id}>
            <input
              type="checkbox"
              id={`vendor-${vendor.id}`}
              checked={selectedVendors.includes(vendor.id)}
              onChange={() => handleCheckboxChange(vendor.id)}
            />
            <label htmlFor={`vendor-${vendor.id}`}>
              {vendor.name} - {vendor.upi} - {vendor.email}
            </label>
          </div>
        ))}
        <button type="submit">Send Emails</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EmailForm;

