"use client";
import React, { useState } from 'react';
import { FaTachometerAlt, FaClipboardList, FaQuestionCircle, FaFolderOpen, FaFileAlt, FaChevronRight, FaBars, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";

interface SidebarProps {
  userName: string;
}
const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');
  const router = useRouter();

  const menuItems = [
    { name: 'Dashboard', icon: FaTachometerAlt, link: '/dashboard' },
    { name: 'Tests', icon: FaClipboardList, link: '/tests' },
    { name: 'Questions', icon: FaQuestionCircle, link: '/questions' },
    { name: 'Categories', icon: FaFolderOpen, link: '/categories' },
    { name: 'Pages', icon: FaFileAlt, link: '/pages' },
  ];

  const menuClick = (menuItem: any) => {
    setSelectedMenu(menuItem.name);
    router.push(menuItem.link.toLowerCase());
  };
  const { data: session, status } = useSession();
  console.log('status', status);
  const isLoggedIn = status === "authenticated";

  if(!isLoggedIn) {
    // router.push('/api/auth/signin');
    return null;
  }

  return (
    <div className={`bg-[#2C001E] text-white h-screen ${isExpanded ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out`}>
      <div className="p-4 flex items-center justify-between bg-[#3E0027]">
        <div className={`flex items-center ${isExpanded ? '' : 'justify-center w-full'}`}>
          <FaUser className="text-2xl mr-2 text-[#E95420]" />
          {isExpanded && <span className="font-semibold">{session?.user?.name}</span>}
        </div>
        <button onClick={() => setIsExpanded(!isExpanded)} className="text-xl text-[#E95420] hover:text-white">
          <FaBars />
        </button>
      </div>
      <nav className="mt-4">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`p-4 flex items-center cursor-pointer hover:bg-[#77216F] ${
                selectedMenu === item.name ? 'bg-[#5E2750] border-l-4 border-[#E95420]' : ''
              }`}
              onClick={() => menuClick(item)}
            >
              <item.icon className={`text-xl ${isExpanded ? 'mr-4' : 'mx-auto'} ${selectedMenu === item.name ? 'text-[#E95420]' : ''}`} />
              {isExpanded && <span>{item.name}</span>}
              {isExpanded && selectedMenu === item.name && (
                <FaChevronRight className="ml-auto text-[#E95420]" />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
