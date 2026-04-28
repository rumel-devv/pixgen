"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Avatar, Spinner } from "@heroui/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Photos", href: "/allphotos" },
  { name: "Pricing", href: "/pricing" },
  { name: "Profile", href: "/profile" },
];

const Navbar = () => {
  const { data, isLoading } = authClient.useSession();
  const user = data?.user;
  

  if(isLoading){
    <div className="flex flex-col items-center gap-2">
        <Spinner color="current" />
        <span className="text-xs text-muted">Current</span>
      </div>
  }

  const handleLogout = async () => {
    await authClient.signOut();
  };
  return (
    <nav className="w-full md:w-10/12 mx-auto py-4 px-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Image src="/logo.png" width={48} height={48} alt="Logo" />
          <Link href="/" className="text-purple-600 text-2xl font-bold">
            pixgen.
          </Link>
        </div>
        <ul className="hidden md:flex gap-5 text-sm font-normal uppercase">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="hover:text-purple-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {!user && (
          <div className="space-x-3">
            <Link href="/signup">
              <button className="px-4 py-1.5  bg-transparent border border-purple-600 text-black rounded-lg hover:bg-purple-700 transition ">
                SignUp
              </button>
            </Link>
            <Link href="/login">
              <button className="px-4 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition ">
                Login
              </button>
            </Link>
          </div>
        )}
        {user && (
          <div className="flex gap-2">
            <Avatar>
              <Avatar.Image
                alt="John Doe"
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>

            <button
              onClick={handleLogout}
              className="px-4 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition "
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
