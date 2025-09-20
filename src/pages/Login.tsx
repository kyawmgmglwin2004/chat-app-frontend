import React, { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password:""
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setIsSent(false);

    try {
      const response = await fetch("",
        {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
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
  }

    // Replace this with your backend / APK integration
  //   console.log("Login attempt:", { email, password });
  //   alert("Submitted — check console for data.");
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Welcome back
        </h1>
        <p className="text-sm text-gray-500 mb-6">Sign in to continue</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
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
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
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
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg px-4 py-3 font-medium shadow-sm
                       bg-transparent border border-blue-500 text-blue-600
                       hover:bg-blue-500 hover:text-white transition-colors duration-150"
                       disabled={isSending}
          > 
            {isSending ? "Sending..." : isSent ? "Send" : "Send"}
          </button>

          {/* Extras */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              Remember me
            </label>
            <a href="#" className="hover:text-blue-500">
              Forgot password?
            </a>
          </div>
        </form>

        <footer className="mt-4 text-center text-xs text-gray-400">
          By signing in you agree to our{" "}
          <a href="#" className="hover:text-blue-500">
            Terms
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
