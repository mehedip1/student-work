
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";



const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
 


   const handleLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch(error => console.log(error));
  }


  const navOption = <>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/blog">Blog</Link></li>
  <li><Link to="/class">Class</Link></li>
  <li><Link to="/myclass">My Class</Link></li>
  <li><Link to="/dashboard/myboard">Dashboard</Link></li>
  
 

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

        
            <div className="navbar bg-blue-100">
      <div className="navbar-start">
        <div className="dropdown">
         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
         </ul>
       
      
    </div>
    <a className="btn btn-ghost normal-case text-xl font-bold text-indigo-700">Come to Learn</a>
  </div>
  <div className="navbar-center lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOption}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get Start</a>
 
  </div>
   </div>
        </div>
    );
};

export default Navbar;