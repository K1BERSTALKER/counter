import Link from "next/link";
import React from "react";
import { navLinks } from "../constants";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center">
      <Link
        href="/"
        className={"bg-black font-bold text-xl p-2 rounded-md text-white"}
      >
        DEV <span className="bg-orange-500 text-black p-1 rounded-md">XUB</span>
      </Link>

      <ul className="flex gap-4">
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
