import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between bg-primary">
      Header
      <div className="flex gap-2">
        <Link to={"/"}>루트</Link>
        <Link to={"/sample"}>샘플</Link>
      </div>
    </header>
  );
}
