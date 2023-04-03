import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  const [date, onChange] = useState(new Date());
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, FirstName, LastName });
  };

  return (
    <div>
      <h1 className="text-2xl text-center pb-4">Register Here</h1>
      <input
        className="border-black border rounded-lg p-1"
        value={FirstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      &nbsp;
      <input
        className="border-black border rounded-lg p-1"
        value={LastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label>Emaill</label>
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
        <label>Date of Birth</label>
        <DatePicker onChange={onChange} value={date} />
        <button className="rounded-lg bg-black text-white mt-2 p-2">
          Register Now
        </button>
        <div>
          Already have an account?{" "}
          <Link to={"/login"} className="hover:underline">
            Login here!
          </Link>
        </div>{" "}
      </form>
    </div>
  );
};
