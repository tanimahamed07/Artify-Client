import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash, FaUserPlus } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { Fade } from "react-awesome-reveal";

const Register = () => {
  const { signInWithGoogle, createUser, updateUserProfile } = use(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Registration Successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regex.test(password);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!validatePassword(password)) {
      setPasswordError("Use 6+ characters with uppercase & lowercase letters.");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(displayName, photoURL);
        navigate("/");
        toast.success("User created successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-base-100 px-4 py-12">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:30px_30px]"></div>

      <Fade triggerOnce fraction={0.5}>
        <div className="w-full max-w-[480px]">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black tracking-tight text-neutral mb-2">
              ARTIFY<span className="text-primary">.</span>
            </h2>
            <p className="text-neutral/50 font-medium tracking-wide text-xs uppercase">
              Join our creative community
            </p>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-[2rem] p-8 md:p-10 shadow-sm relative overflow-hidden">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold text-[10px] uppercase opacity-60 tracking-wider">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  name="displayName"
                  placeholder="John Doe"
                  className="input input-bordered bg-base-200/30 border-base-300 focus:border-primary focus:outline-none rounded-xl w-full text-sm"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold text-[10px] uppercase opacity-60 tracking-wider">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="artist@example.com"
                  className="input input-bordered bg-base-200/30 border-base-300 focus:border-primary focus:outline-none rounded-xl w-full text-sm"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold text-[10px] uppercase opacity-60 tracking-wider">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="https://image-link.com"
                  className="input input-bordered bg-base-200/30 border-base-300 focus:border-primary focus:outline-none rounded-xl w-full text-sm"
                />
              </div>

              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold text-[10px] uppercase opacity-60 tracking-wider">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Min. 6 chars (Aa-Zz)"
                    className={`input input-bordered bg-base-200/30 border-base-300 focus:border-primary focus:outline-none rounded-xl w-full text-sm ${
                      passwordError ? "border-error" : ""
                    }`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral/30 hover:text-primary transition-colors"
                  >
                    {showPassword ? (
                      <FaRegEyeSlash size={16} />
                    ) : (
                      <FaRegEye size={16} />
                    )}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-[10px] text-error mt-1.5 font-bold ml-1">
                    {passwordError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full rounded-xl text-white font-bold tracking-wide shadow-lg shadow-primary/10 border-none mt-4 transition-all hover:scale-[1.01]"
              >
                Create Account <FaUserPlus className="ml-2 text-xs" />
              </button>
            </form>

            <div className="relative flex py-6 items-center">
              <div className="flex-grow border-t border-base-300"></div>
              <span className="flex-shrink mx-4 text-[10px] font-bold text-neutral/30 uppercase tracking-[0.2em]">
                Quick Sign Up
              </span>
              <div className="flex-grow border-t border-base-300"></div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline border-base-300 hover:bg-neutral hover:text-white w-full rounded-xl flex items-center justify-center gap-3 font-bold transition-all h-12"
            >
              <FcGoogle size={20} /> Continue with Google
            </button>
          </div>

          <p className="mt-8 text-center text-sm font-medium text-neutral/50">
            Already a member?{" "}
            <Link
              to="/login"
              className="text-primary font-bold hover:underline transition-all"
            >
              Sign In
            </Link>
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Register;
