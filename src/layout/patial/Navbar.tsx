import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-primary">
      Navbar
      <div className="flex gap-2">
        <Link to={"/"}>루트</Link>
        <Link to={"/sample"}>샘플</Link>
      </div>
    </nav>
  );
}
