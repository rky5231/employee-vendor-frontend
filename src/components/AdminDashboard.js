import React from 'react';
import { Link } from 'react-router-dom';
 
const AdminDashboard = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/employees">View Employees</Link></li>
                    <li><Link to="/vendors">View Vendors</Link></li>
                    <li><Link to="/email-logs">View Email Logs</Link></li>
                    <li><Link to="/send-email">Send Email to Vendors</Link></li>
                </ul>
            </nav>
        </div>
    );
};
 
export default AdminDashboard;