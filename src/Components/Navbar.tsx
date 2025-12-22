import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Media', url: '/media' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-linear-to-b from-[#EBF8FF] to-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-700 tracking-wide">
          Sri Lanka Railways
        </div>

        {/* Desktop Navigation */}
        <nav>
          <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={item.url}
                  className="transition-colors duration-300 group-hover:text-blue-600"
                >
                  {item.name}
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/services/booking')}
          className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          Book Ticket
        </button>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <HiOutlineX size={28} className="text-gray-700" />
          ) : (
            <HiOutlineMenu size={28} className="text-gray-700" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md w-full px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-semibold">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer hover:text-blue-600">
                <Link to={item.url} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
