import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'All Photos', href: '/allphotos' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Profile', href: '/profile' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-16">
      <div className="w-8/12 md:w-9/12 mx-auto px-4 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" width={40} height={40} alt="Logo" />
              <h2 className="text-xl font-bold text-purple-500">pixgen.</h2>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Generate stunning AI photos instantly. Fast, creative, and powerful.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-purple-500 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-purple-500">About</Link></li>
              <li><Link href="#" className="hover:text-purple-500">Contact</Link></li>
              <li><Link href="#" className="hover:text-purple-500">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-purple-500">Blog</Link></li>
              <li><Link href="#" className="hover:text-purple-500">Help Center</Link></li>
              <li><Link href="#" className="hover:text-purple-500">API Docs</Link></li>
              <li><Link href="#" className="hover:text-purple-500">Status</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} pixgen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;