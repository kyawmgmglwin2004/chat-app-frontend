import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ForgotPsw = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          body: JSON.stringify({...formData}),
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
  return (
    <div className=" flex items-center justify-center mt-[15vh] lg:mt-[3vh]">
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

          <button
            type="submit"
            className="w-full rounded-lg px-4 py-3 font-medium shadow-sm
                       bg-transparent border border-blue-500 text-blue-600
                       hover:bg-blue-400 hover:text-white transition-colors duration-150"
            disabled={isSending}
          >
            {isSending ? "Logining..." : isSent ? "Login" : "Login"}
          </button>
        </form>
        <button
          onClick={() => {navigate("/login")}}
          className="mx-auto mt-2 underline text-sm hover:text-blue-400"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default ForgotPsw;