import axios from "axios";
import { useState } from "react";

export default function Other() {
  const [word, setWord] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("/test", { text: word }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="input"
          onChange={(e) => setWord(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
