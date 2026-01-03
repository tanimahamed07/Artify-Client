import React, { useState, useContext } from "react";
import { FaRegEye, FaRegEyeSlash, FaArrowRight } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Fade } from "react-awesome-reveal";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, signInWithGoogle, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDemoLogin = () => {
    const emailInput = document.getElementById("email-field");
    const passwordInput = document.getElementById("password-field");
    emailInput.value = "artist@demo.com";
    passwordInput.value = "Demo1234@";
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    signInUser(email, password)
      .then(() => {
        setLoading(false);
        toast.success("Welcome Back to Artify!");
        event.target.reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Google Login Successful!");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google Sign-in failed");
      });
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-base-100 px-4">
      {/* Khub halka background element, jate chokhe na lage */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <Fade triggerOnce fraction={0.5}>
        <div className="w-full max-w-[440px] py-10">
          
          {/* Header Section */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black tracking-tight text-neutral mb-2">
              ARTIFY<span className="text-primary">.</span>
            </h2>
            <p className="text-neutral/50 font-medium tracking-wide text-sm uppercase">
              Sign in to your account
            </p>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-3xl p-8 md:p-10 shadow-sm">
            <form className="space-y-5" onSubmit={handleLogIn}>
              
              {/* Email Field */}
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold text-xs uppercase opacity-60">Email Address</span>
                </label>
                <input
                  id="email-field"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="input input-bordered bg-base-200/30 border-base-300 focus:border-primary focus:outline-none rounded-xl w-full transition-all"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="form-control">
                <div className="flex justify-between items-center py-1">
                  <label className="label-text font-bold text-xs uppercase opacity-60">Password</label>
                  <Link to="#" className="text-[10px] font-bold text-primary hover:underline">Forgot Password?</Link>
                </div>
                <div className="relative">
                  <input
                    id="password-field"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered bg-base-200/30 border-base-300 focus:border-primary focus:outline-none rounded-xl w-full transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral/30 hover:text-primary transition-colors"
                  >
                    {showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
                  </button>
                </div>
              </div>

              {/* Sign In Button */}
              <button 
                type="submit" 
                className="btn btn-primary w-full rounded-xl text-white font-bold tracking-wide shadow-lg shadow-primary/10 border-none mt-2"
              >
                Sign In <FaArrowRight className="ml-1 text-xs" />
              </button>
            </form>

            {/* Google Sign In */}
            <div className="relative flex py-6 items-center">
              <div className="flex-grow border-t border-base-300"></div>
              <span className="flex-shrink mx-4 text-[10px] font-bold text-neutral/30 uppercase tracking-[0.2em]">Social Login</span>
              <div className="flex-grow border-t border-base-300"></div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline border-base-300 hover:bg-neutral hover:text-white w-full rounded-xl flex items-center justify-center gap-3 font-bold transition-all"
            >
              <FcGoogle size={20} /> Continue with Google
            </button>

            {/* Demo Credential Button - Simplified */}
            <button 
              onClick={handleDemoLogin}
              className="w-full mt-4 py-2 text-[11px] font-bold text-neutral/40 hover:text-primary border border-dashed border-base-300 rounded-xl transition-all uppercase tracking-widest"
            >
              Click for Demo Credentials
            </button>
          </div>

          {/* Bottom Link */}
          <p className="mt-8 text-center text-sm font-medium text-neutral/50">
            New here?{" "}
            <Link to="/register" className="text-primary font-bold hover:underline transition-all">
              Create an account
            </Link>
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Login;