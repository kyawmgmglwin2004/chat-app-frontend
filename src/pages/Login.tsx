import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
   const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState({
    email: "",
    phone: "",
    password: "",
  })
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [signUP, setSignUp] = useState(false);
  const [login, setLogin] = useState(true);

  const signUpForm = () => {
    setSignUp(true);
    setLogin(false);
  };
  const loginForm = () => {
    setLogin(true);
    setSignUp(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleChangeSignUP = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("token: ", captchaToken);
    if (!captchaToken) {
      alert("Please verify that you are not a robot.");
    }
    setIsSending(true);
    setIsSent(false);
    if (checked) {
      navigate("/term");
    } else {
      alert("Please agree to the Terms & Conditions before proceeding.");
    }

    try {
      const response = await fetch("",
        {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({...formData, captchaToken}),
      }
      );
      console.log("result: ", response);
      if(response.ok) {
        setIsSent(true);
        setFormData({ email: "", password: ""});
      }else {
        setIsSent(false);
        alert("Failed to Login!");
      }
    } catch (error) {
       console.error(error);
      alert("An error occurred. Try again.");
      setIsSent(false);
    } finally {
       setIsSending(false);
    }
  };
  const handleSubmitSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("token: ", captchaToken);
    if (!captchaToken) {
      alert("Please verify that you are not a robot.");
    }
    setIsSending(true);
    setIsSent(false);

    try {
      const response = await fetch("",
        {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({...data, captchaToken}),
      }
      );
      console.log("result: ", response);
      if(response.ok) {
        setIsSent(true);
        setData({ email: "", password: "", phone: ""});
      }else {
        setIsSent(false);
        alert("Failed to Login!");
      }
    } catch (error) {
       console.error(error);
      alert("An error occurred. Try again.");
      setIsSent(false);
    } finally {
       setIsSending(false);
    }
  };

  // Replace this with your backend / APK integration
  //   console.log("Login attempt:", { email, password });
  //   alert("Submitted — check console for data.");
  // };

  return (
    <div className=" flex items-center justify-center mt-[15vh] lg:mt-[3vh]">
      {login && (
        <div className="w-full max-w-md bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-5">
          <p className="text-xl text-blue-400 mb-6 font-bold">
            Sign in to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-start font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400
                         focus:outline-none transition duration-150
                         hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-start text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative mb-5">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-3 pr-12 text-gray-900 placeholder-gray-400
                           focus:outline-none transition duration-150
                           hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-2 flex items-center px-2 text-sm text-gray-600 hover:text-blue-500 focus:outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <ReCAPTCHA
                sitekey="6Lc6MNArAAAAAIhziVkoUSV4qz5FZo4cvUhsVNcM"
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg px-4 py-3 font-medium shadow-sm
                       bg-transparent border border-blue-500 text-blue-600
                       hover:bg-blue-400 hover:text-white transition-colors duration-150"
              disabled={isSending}
            >
              {isSending ? "Logining..." : isSent ? "Login" : "Login"}
            </button>

       
            {/* Extras */}
            {/* <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                Remember me
              </label>
             
            </div> */}
          </form>
            <label className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 "
                />
                <button onClick={() => {
                  navigate("/term")
                }}
                className="hover:text-blue-400 text-sm"
                >
                  I agree Terms & Condition
                </button>
              </label>
           <div className="flex flex-row justify-between mt-5">
            <button onClick={() => {
                navigate("/forgotpsw")
              }}
              className="hover:text-blue-500 mb-4"

              >
                forgot password?
              </button>
          <button
            onClick={signUpForm}
            className=" underline text-sm hover:text-blue-400"
          >
            Sign Up
          </button>
           </div>
        </div>
      )}
      {signUP && (
        <div className="w-full max-w-md bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-5">
          <p className="text-xl text-blue-400 mb-6 font-bold">
            Sign up to continue
          </p>

          <form onSubmit={handleSubmitSignup} className="space-y-4 ">
            {/* Email */}
            <div>
            
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChangeSignUP}
                required
                placeholder="Email"
                className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400
                         focus:outline-none transition duration-150
                         hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            
              <input
                id="phone"
                name="phone"
                type="phone"
                onChange={handleChangeSignUP}
                required
                placeholder="Phone"
                className="mt-4 w-full bg-transparent border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400
                         focus:outline-none transition duration-150
                         hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />

            </div>

            {/* Password */}
            <div>
              <div className="relative mb-5">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  onChange={handleChangeSignUP}
                  className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-3 pr-12 text-gray-900 placeholder-gray-400
                           focus:outline-none transition duration-150
                           hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-2 flex items-center px-2 text-sm text-gray-600 hover:text-blue-500 focus:outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <ReCAPTCHA
                sitekey="6Lc6MNArAAAAAIhziVkoUSV4qz5FZo4cvUhsVNcM"
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg px-4 py-3 font-medium shadow-sm
                       bg-transparent border border-blue-500 text-blue-600
                       hover:bg-blue-400 hover:text-white transition-colors duration-150"
              disabled={isSending}
            >
              {isSending ? "Sign UP..." : isSent ? "Sign Up" : "Sign Up"}
            </button>

            {/* Extras */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
             
              {/* <a href="#" className="hover:text-blue-500">
                Forgot password?
              </a> */}
            </div>
          </form>
          <button
            onClick={loginForm}
            className="mx-auto mt-2 underline text-sm hover:text-blue-400"
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
}
