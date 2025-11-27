"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/Services" },
    { name: "Customers", href: "/Customers" },
    { name: "Company", href: "/company" },
    { name: "Careers", href: "/careers" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <header className="w-full bg-white shadow-lg border-b border-purple-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Logo + Nav */}
        <div className="flex items-center space-x-10">
          <Link href="/">
            <Image src="/nerfwar.png" alt="Logo" width={80} height={40} />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-8 text-purple-700 font-semibold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="relative flex items-center space-x-1">
                  <Link
                    href={link.href}
                    className={`pb-1 transition-all hover:text-purple-900 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-purple-900 after:transition-all hover:after:w-full ${
                      isActive ? "text-purple-900" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.name === "Services" && (
                    <span className="text-purple-700">{isActive ? "^" : "v"}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: Button + Mobile */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-purple-900 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-purple-800 transition">
                Get In Touch
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-purple-900"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-purple-200 px-6 py-4 shadow">
          <ul className="flex flex-col space-y-4 text-purple-700 font-semibold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="flex justify-between items-center">
                  <Link
                    href={link.href}
                    className={`pb-1 transition-all hover:text-purple-900 ${
                      isActive ? "text-purple-900" : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.name === "Services" && (
                    <span className="text-purple-700">{isActive ? "^" : "v"}</span>
                  )}
                </li>
              );
            })}

            {/* Mobile Button */}
            <li>
              <Link href="/contact">
                <button className="w-full bg-purple-900 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-purple-800 transition">
                  Get In Touch
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}