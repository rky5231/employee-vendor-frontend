import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axiosInstance from '../services/api';
 
const EmailLogList = () => {
    const [emailLogs, setEmailLogs] = useState([]);
 
    useEffect(() => {
        axiosInstance
            .get('/admin/email-logs')
            .then(response => setEmailLogs(response.data))
            .catch(error => console.error(error));
    }, []);
 
    return (

    <div>
      <h1>Email log List</h1>
      <ul><li><Link to="/">Home</Link></li></ul><br></br>
      <table border={1}>
        <thead>
        <tr>
          <th>Id</th>
          <th>RecipientEmail</th>
          <th>Message</th>
        </tr>
        </thead>
        <tbody>
        {emailLogs.map((l) => (
          <tr key={l.id}>
            <td>{l.id}</td>
            <td>{l.recipientEmail}</td>
            <td>{l.message}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    );
};
 
export default EmailLogList;