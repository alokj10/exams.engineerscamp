"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const userFullName = "John Doe Smith Johnson";
  const truncatedName = userFullName.length > 15 ? userFullName.substring(0, 12) + '...' : userFullName;

  return (
    <header className="bg-[#300A24] text-white p-2 flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/logo_1.png" alt="Logo" width={40} height={40} className="mr-4" />
        <h1 className="text-xl font-bold text-[#E95420]">Engineers CAMP</h1>
      </div>

      <div className="flex-grow mx-4">
        <div className={`relative transition-all duration-300 ease-in-out ${isSearchExpanded ? 'w-full' : 'w-48'}`}>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#2C001E] text-white placeholder-[#AEA79F] rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#E95420]"
            onFocus={() => setIsSearchExpanded(true)}
            onBlur={() => setIsSearchExpanded(false)}
          />
          <svg
            className="absolute right-3 top-2.5 h-5 w-5 text-[#AEA79F]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="flex items-center">
        <span className="mr-2 text-[#AEA79F]">{truncatedName}</span>
        <div className="relative">
          <button
            className="flex items-center space-x-2"
            onMouseEnter={() => setIsUserMenuOpen(true)}
            onMouseLeave={() => setIsUserMenuOpen(false)}
          >
            <svg
              className="h-8 w-8 text-[#E95420]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>

          {isUserMenuOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-[#2C001E] rounded-md shadow-lg py-1 z-10"
              onMouseEnter={() => setIsUserMenuOpen(true)}
              onMouseLeave={() => setIsUserMenuOpen(false)}
            >
              <Link href="/profile" className="block px-4 py-2 text-sm text-[#AEA79F] hover:bg-[#3A0A2A] hover:text-white">User Profile</Link>
              <Link href="/logout" className="block px-4 py-2 text-sm text-[#AEA79F] hover:bg-[#3A0A2A] hover:text-white">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
