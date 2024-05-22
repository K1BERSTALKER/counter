"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function NavLink({ link }) {
  const pathname = usePathname();
  return (
    <Link
      className={
        pathname == link.path
          ? "text-orange-500 font-medium text-lg"
          : "font-medium text-lg"
      }
      href={link.path}
    >
      {link.title}
    </Link>
  );
}
