import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navigation = () => {


    // new add nav bar 
    const {user, logOut} = useContext(AuthContext);
 


    const handleLogOut = () =>{
     logOut()
     .then(() =>{})
     .catch(error => console.log(error));
   }
 
 
   const navOption = <>
  
 
 
  
 
   {
     user ? <>
     <span>{user?.displayName}</span>
     <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
     
      </> : <> 
 
         <li><Link to="/login">Login</Link></li>
      </>
   }
   
 </>


    return (
        <div>

<div className="navbar bg-base-100">
  <div className="flex-1 items-center space-x-5 ">
    <a className="btn btn-ghost normal-case text-xl">Come to Learn</a>
    <div className="flex-2 justify-between mx-5 p-5">
    <Link className="p-5 mx-5" to="/">Home</Link>
    <Link className="p-5 mx-5" to="/blog">Blog</Link>
    <Link className="p-5 mx-5" to="/class">Class</Link>
    </div>
     </div>
  
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
       
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><Link to="/login">Login</Link></li>
        {navOption}
        
      </ul>
    </div>
  </div>
   </div>



        </div>
    );
};

export default Navigation;