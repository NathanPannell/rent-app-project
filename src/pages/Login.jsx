import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-center">Login Here</h1>
        <label>Email</label>
        <input
          className="border-black border rounded-lg p-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="youremail@gmail.com"
        />
        <label>Password</label>
        <input
          className="border-black border rounded-lg p-1"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter Password"
        />
        <button className="rounded-lg bg-black text-white mt-2 p-2">
          Log in
        </button>
        <div>
          Don't have an account?{" "}
          <Link to={"/register"} className="hover:underline">
            Register here!
          </Link>
        </div>{" "}
      </form>
    </div>
  );
}
