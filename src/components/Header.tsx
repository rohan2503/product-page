import React from 'react';
import dynamic from 'next/dynamic';

const NavItem = dynamic(() => import('./NavItem'), { ssr: false });

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 px-6 flex justify-between items-center text-black">
      <nav>
        <ul className="flex space-x-6 list-none p-0 m-0">
          <NavItem href="/women">Women</NavItem>
          <NavItem href="/men">Men</NavItem>
          <NavItem href="/all-gender">All Gender</NavItem>
          <NavItem href="/shows">Shows</NavItem>
        </ul>
      </nav>
      <div className="text-center">
        <h1 className="text-2xl font-serif">Maison Margiela</h1>
        <p className="text-xs">PARIS</p>
      </div>
      <div className="flex space-x-4">
        <NavItem href="/search">Search</NavItem>
        <NavItem href="/account">Account</NavItem>
        <NavItem href="/wishlist">Wishlist</NavItem>
        <NavItem href="/bag">Bag</NavItem>
      </div>
    </header>
  );
};

export default Header;