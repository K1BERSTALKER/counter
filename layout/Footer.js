"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { counterDetails, counterPackages } from "../constants";
import Link from "next/link";
export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="p-4 flex items-center justify-between">
      <ul className="flex gap-6">
        {counterDetails.map((item) => (
          <li key={item.id} className="font-medium text-lg ">
            <Link
              href={item.link}
              className="flex flex-col items-center justify-center text-center opacity-70 hover:opacity-100"
            >
              <item.icon size={100} /> {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <ul className="flex flex-col justify-start items-start">
          <li className="font-medium text-lg ">Packages:</li>
          {counterPackages.map((item) => (
            <li
              key={item.id}
              className="font-medium text-sm opacity-70 hover:opacity-100"
            >
              <Link
                href={item.link}
                className="flex flex-col items-center justify-center text-center"
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li>Devloped by:</li>
          <li className="mt-4">
            <Link
              href="/"
              className={"bg-black font-bold text-xl p-2 rounded-md text-white"}
            >
              DEV{" "}
              <span className="bg-orange-500 text-black p-1 rounded-md">
                XUB
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
