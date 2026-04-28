import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'All Photos', href: '/allphotos' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Profile', href: '/profile' },
];

const Navbar = () => {
  return (
    <nav className='w-full md:w-10/12 mx-auto py-4 px-2'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-1'>
          <Image src="/logo.png" width={48} height={48} alt="Logo" />
          <Link href='/' className='text-purple-600 text-2xl font-bold'>
            pixgen.
          </Link>
        </div>
        <ul className='hidden md:flex gap-5 text-sm font-normal uppercase'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className='hover:text-purple-600 transition'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className='px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition'>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;