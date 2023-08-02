import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Swal from 'sweetalert2'
import SocialLogin from "../../Shered/SocialLogin/SocialLogin";


const Login = () => {

       
    const {signIn} = useContext(AuthContext)
     const navigate = useNavigate();
     const location = useLocation();

     const from = location.state?.from?.pathname || "/";


   
     const [disabled, setDisabled] = useState(true);


     useEffect(() =>{
      loadCaptchaEnginge(6);

     }
     ,[])


    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);

            Swal.fire({
                title: 'User Login success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
              navigate(from, {replace : true});
        })

    }


    const handleValidCaptcha = (e) =>{
      const user_captcha_value = e.target.value;
      if(validateCaptcha(user_captcha_value)){
         setDisabled(false);
      }
      else{
           setDisabled(true);
      }
    }

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
         </div>
        <div className="form-control">
          <label className="label">
            <LoadCanvasTemplate />
          </label>
          <input onBlur={handleValidCaptcha} type="text" name="captcha" placeholder="type captcha" className="input input-bordered" />
         
         </div>
        <div className="form-control mt-6">
          <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p className="text-center py-2"><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
      <SocialLogin></SocialLogin>
    </div>
   
  </div>
  </div>
        </div>
    );
};

export default Login;