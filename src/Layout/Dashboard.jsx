import { Link, Outlet } from "react-router-dom";
import { FaBook, FaBookOpen, FaHome, FaPhoneAlt, FaWallet  } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div>
       
     <div className="drawer lg:drawer-open">
     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
  
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    
    <ul className="menu p-4 w-80 h-full bg-gray-900 text-white ">
      {/* Sidebar content here */}
      <div>
      <h2 className="text-center font-semibold text-3xl">Come to Learn</h2>
      </div>
      
      <li><Link to='/'><FaHome></FaHome>Home</Link></li>
      <li><Link to='/myclass'><FaBook></FaBook>Add Class</Link></li>
      <li><Link><FaWallet></FaWallet>Price</Link></li>
      <div className="divider"></div>
     
      <li><Link to='/class'><FaBookOpen></FaBookOpen>Class</Link></li>
      <li><Link><FaPhoneAlt></FaPhoneAlt> Contact us</Link></li>
     
     
    </ul>
  
  </div>
  </div>
        </div>
    );
};

export default Dashboard;
