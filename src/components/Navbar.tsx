import React from 'react';
import { Link } from 'react-router-dom';
import { Plant, ShoppingBasket, Calendar, BookOpen, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Plant className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">FarmersMarket</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <NavLink to="/marketplace" icon={<ShoppingBasket className="h-5 w-5" />} text="Marketplace" />
            <NavLink to="/events" icon={<Calendar className="h-5 w-5" />} text="Events" />
            <NavLink to="/resources" icon={<BookOpen className="h-5 w-5" />} text="Resources" />
            <NavLink to="/profile" icon={<User className="h-5 w-5" />} text="Profile" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors duration-200"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;