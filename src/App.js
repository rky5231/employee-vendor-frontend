import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import VendorList from './components/VendorList';
import EmailLogList from './components/EmailLogList';
import AdminDashboard from './components/AdminDashboard';
import EmailForm from './components/EmailForm';
import Layout from './layout';
import CreateEmployee from './components/create-employees';
import CreateVendors from './components/create-vendors';
 
function App() {
    return (
        <>
        <Router>

            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/admin/create-employees" element={<CreateEmployee />} />
                <Route path="/admin/create-vendors" element={<CreateVendors />} />
                <Route path="/vendors" element={<VendorList />} />
                <Route path="/email-logs" element={<EmailLogList />} />
                <Route path="/send-email" element={<EmailForm />} />
            </Routes>
        </Router>

        </>
        
    );
}
 
export default App;