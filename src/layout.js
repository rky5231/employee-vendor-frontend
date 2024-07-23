import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <h1>Employee Vendor Application</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/employees">Employees List</Link>
          </li>
      
          <li>
            <Link to="/vendors">Vender List</Link>
          </li>
         
          <li>
            <Link to="/admin">Admin Dashboard</Link>
          </li>
      
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;