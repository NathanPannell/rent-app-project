import React, { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email);

  }

  return (
    <> 
    <form onSubmit = {handleSubmit}>
      <label for="email">email</label>
      <input
        value = {email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="youremail@gmail.com"
        id="email"
        name="email"
      />

      <label for="Password">password</label>
      <input
        onChange = {(e) => setPass(e.target.value)}
        value = {pass}
        type="Password"
        placeholder="Enter Password"
        id="Password"
        name="Password"
      />
      <button type = "submit" > Log in</button>
    </form>
    <button>Don't have an acount? Register here!</button>
    </>
  );
}
