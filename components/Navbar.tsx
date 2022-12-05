import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="flex justify justify-between mb-5 pb-5 border-b-2 border-b-white items-center px-2">
      <h1 className="text-3xl">GA</h1>
      <nav className="flex justify-evenly text-lg">
        <Link href="#">Home</Link>
        <p className="ml-2 mr-2">|</p>
        <Link href="#">About Me</Link>
        <p className="ml-2 mr-2">|</p>
        <Link href="#">Skills</Link>
        <p className="ml-2 mr-2">|</p>
        <Link href="#">Projects</Link>
        <p className="ml-2 mr-2">|</p>
        <Link href="#">Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
