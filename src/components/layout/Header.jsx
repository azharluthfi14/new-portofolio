import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "~/svg/logo.svg";

export default function Header() {
  const navLinks = [
    { label: "Home" },
    { label: "About" },
    { label: "My Project" },
    { label: "Other Projects" },
  ];

  return (
    <header className="'sticky top-0 z-50 bg-white">
      <div className="layout flex h-16 items-center justify-between">
        <div>
          <Image src={Logo} width={35} height={35} alt="logo-header" />
        </div>
        <nav>
          <ul className="flex items-center justify-between space-x-4 lg:space-x-10">
            {navLinks.map(({ label }) => (
              <li key={label}>
                <div>{label}</div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
