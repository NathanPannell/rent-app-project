import { useState } from "react";
import { Link } from "react-router-dom";
const cross = "M6 18L18 6M6 6l12 12";
const hamburger = "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setNavOpen(!navOpen);
  };

  return (
    <div>
      <nav className="bg-black text-white px-8 py-2 flex justify-between">
        <Link className="hover:underline" to={"/"}>
          LivingLink
        </Link>
        <Link
          className="hidden sm:block hover:underline"
          to={"/create-listing"}
        >
          Create Listing 😁
        </Link>
        <Link className="hidden sm:block hover:underline" to={"/login"}>
          Profile
        </Link>
        <button className="sm:hidden" onClick={toggleNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={`${navOpen ? cross : hamburger}`}
            />
          </svg>
        </button>
      </nav>
      <div
        className={`bg-black text-white px-8 flex flex-col absolute right-0 transition-all ease-out duration-300 ${
          navOpen
            ? "transform opacity-100 scale-y-100"
            : "transform opacity-0 scale-y-0"
        }`}
      >
        <Link
          className="hover:underline border-b-2 py-4"
          to={"/create-listing"}
        >
          Create Listing 😁
        </Link>
        <Link className="hover:underline py-4" to={"/login"}>
          Profile
        </Link>
      </div>
    </div>
  );
}
