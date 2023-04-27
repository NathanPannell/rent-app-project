import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      // Register user with backend
      axios
        .post("/register", {
          name,
          email,
          phone: null,
          date: null,
          password,
        })
        .then((res) => {
          const data = res.data;
          if (data.msg) {
            alert(data.msg);
          }
        });
    } else {
      alert("Passwords do not match. Please check and try again.");
    }
  };

  return (
    <div className="w-screen flex flex-row m-4 gap-8 items-center justify-evenly h-screen">
      <div className="w-1/2 self-center">
        <form
          className="flex flex-col self-center max-w-sm m-auto"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl">Create an account</h1>
          <input
            className="border-b-2 pb-2 pt-4 !outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            className="border-b-2 pb-2 pt-4 !outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            className="border-b-2 pb-2 pt-4 !outline-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
          <input
            type="password"
            className={`border-b-2 pb-2 pt-4 !outline-none ${
              confirmPassword != password ? "text-red-800" : "text-black"
            }`}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            placeholder="Confirm Password"
          />
          <button className="rounded-full border-2 transition-all border-black bg-black text-white mt-8 p-2 hover:bg-transparent hover:text-black">
            Create Account
          </button>
          <div>
            Already have an account?
            <br />
            <Link to={"/login"} className="hover:underline text-slate-500">
              Login here!
            </Link>
          </div>
        </form>
      </div>
      <img
        className="max-h-full overflow-hidden hidden sm:block"
        src="https://previews.123rf.com/images/ottoblotto/ottoblotto1909/ottoblotto190900005/131994867-ivy-covered-professional-or-residential-building-in-an-urban-setting-vertical-aspect.jpg"
      />
    </div>
  );
};
