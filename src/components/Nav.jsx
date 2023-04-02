import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-black text-white px-8 py-2 flex justify-between">
      <Link className="hover:underline" to={"/other"}>
        LivingLink
      </Link>
      <Link className="hover:underline" to={"/other"}>
        Other Pages😁
      </Link>
      <Link className="hover:underline" to={"/login"}>
        Profile
      </Link>
    </nav>
  );
}
