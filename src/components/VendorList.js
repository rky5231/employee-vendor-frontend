import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../services/api';
 
const VendorList = () => {
    const [vendors, setVendors] = useState([]);
 
    useEffect(() => {
        axiosInstance.get('/admin/vendors')
            .then(response => setVendors(response.data))
            .catch(error => console.error(error));
    }, []);
 
    return (
        <div>
            <h1>Vendor List</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/admin/create-vendors">Create Vendor</Link></li>
            </ul>
            
            <table border={1}>
                <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>UPI</th>
                </tr>
                {vendors.map(v => (
                <tr>
                    <td>{v.email}</td>
                    <td>{v.name}</td>
                    <td>{v.upi}</td>
                </tr>
                    ))}

            </table>
            
        </div>
    );
};
 
export default VendorList;