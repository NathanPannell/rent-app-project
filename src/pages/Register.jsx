import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";
import axios from "axios";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [date, setDate] = useState(new Date());
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Register user with backend
    axios
      .post("/register", {
        name: `${lastName}, ${firstName}`,
        email,
        phone,
        date,
        password,
      })
      .then((res) => {
        const data = res.data;
        if (data.isDuplicate) {
          alert("An account with this email already exists!");
        } else {
          alert("New account has been created. You may now log in.");
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl text-center pb-4">Register Here</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div>
          <input
            className="border-black border rounded-lg p-1"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          &nbsp;
          <input
            className="border-black border rounded-lg p-1"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </div>
        <label>Email</label>
        <input
          type="email"
          className="border-black border rounded-lg p-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Name@gmail.com"
        />
        <label>Phone Number</label>
        <input
          type="number"
          className="border-black border rounded-lg p-1"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="XXX-XXX-XXXX"
        />
        <label>Password</label>
        <input
          type="password"
          className="border-black border rounded-lg p-1"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter Password"
        />
        <label>Date of Birth</label>
        <DatePicker onChange={setDate} value={date} />
        <button className="rounded-lg bg-black text-white mt-2 p-2">
          Register Now
        </button>
      </form>
      <div>
        Already have an account?{" "}
        <Link to={"/login"} className="hover:underline">
          Login here!
        </Link>
      </div>{" "}
    </div>
  );
};
