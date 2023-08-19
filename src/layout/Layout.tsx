import { ReactNode } from "react";
import { Navbar } from "../components";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full">
      <Navbar />

      <div className="max-w-6xl px-4 mx-auto">{children}</div>
    </div>
  );
}
