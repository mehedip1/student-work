import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'


const SignUp = () => {



  const {register , handleSubmit, reset, formState: { errors }} = useForm();
  const {createUser, updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(() =>{
        console.log('user profile upload')
      })
      .catch(err => console.log(err))
      reset()

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Sing up success',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/");

    })
  }


  
  
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign up</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
          {errors.name && <span className="text-red-600">Name field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" {...register("photoURL", { required: true })}  placeholder="photo URL" className="input input-bordered" />
          {errors.name && <span className="text-red-600">Photo URL field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" {...register("email", { required: true })}  name="email" placeholder="email" className="input input-bordered" />
          {errors.email && <span className="text-red-600">Email field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" {...register("password", {required: true, minLength: 6, maxLength : 15})} placeholder="password" className="input input-bordered" />
          {errors.password ?.type === 'required' && <span className="text-red-600">must be 6 letter</span>}
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      <p className="text-center py-2"><small><Link to="/login">Already account? Login now</Link> </small></p>
    </div>
  </div>
   </div>
    </div>
  );
};

export default SignUp;