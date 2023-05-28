import { Link, useNavigate } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import bgImg from "../assets/others/authentication.png";
import logImg from "../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(() => {
        reset();
        Swal.fire({
          icon: "success",
          title: "Signing Up Successfully",
          footer: '<a href="/">Back to Home</a>',
        });
        logOut()
        .then(()=>{
            navigate('/login');
        })
      })
      .catch(error=>console.log(error))
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="hero-content flex-col-reverse lg:flex-row">
          <div className="card w-1/2  max-w-lg shadow-2xl bg-base-100">
            <h1 className="text-4xl font-bold text-center mt-6">
              Sign Up now!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Type here"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-xs text-red-500 mt-2">
                    Name is required
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Type here"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-xs text-red-500 mt-2">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoUrl", { required: true })}
                  placeholder="Your Photo URL"
                  className="input input-bordered"
                />
                {errors.photoUrl && (
                  <span className="text-xs text-red-500 mt-2">
                    Photo URL is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="Type you password"
                  className="input input-bordered"
                />
                {errors.password?.type === "minLength" && (
                  <span className="text-xs text-red-500 mt-2">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-xs text-red-500 mt-2">
                    Password must be less then 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-xs text-red-500 mt-2">
                    Password must be one uppercase, one lowercase, and one
                    special characters
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054] border-0"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="form-control mt-3">
              <Link to="/login">
                <p className="text-[#D1A054] text-center hover:underline">
                  Already registered?{" "}
                  <span className="font-semibold">Go to login page</span>
                </p>
              </Link>
            </div>
            <div className="form-control mb-6">
              <p className="text-center font-semibold mb-4">or sign up with</p>
              <div className="flex mx-auto space-x-6">
                <div>
                  <FaFacebook className="text-3xl hover:text-[#D1A054] cursor-pointer"></FaFacebook>
                </div>
                <div>
                  <AiFillGoogleCircle className="text-[32px] hover:text-[#D1A054] cursor-pointer"></AiFillGoogleCircle>
                </div>
                <div>
                  <FaGithub className="text-3xl hover:text-[#D1A054] cursor-pointer"></FaGithub>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center w-1/2">
            <img src={logImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
