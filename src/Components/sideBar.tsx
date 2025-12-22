import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineAppstore,
  AiOutlineMail,
} from 'react-icons/ai';

function SideBar() {
  const socialItems = [
    { name: 'Facebook', url: '/', icon: <FaFacebookF /> },
    { name: 'Twitter', url: '/about', icon: <FaTwitter /> },
    { name: 'Instagram', url: '/services', icon: <FaInstagram /> },
    { name: 'YouTube', url: '/media', icon: <FaYoutube /> },
  ];

  const mainLinks = [
    { name: 'Home', url: '/', icon: <AiOutlineHome /> },
    { name: 'About Us', url: '/about', icon: <AiOutlineInfoCircle /> },
    { name: 'Services', url: '/services', icon: <AiOutlineAppstore /> },
    { name: 'Contact', url: '/contact', icon: <AiOutlineMail /> },
  ];

  return (
    <aside className="h-screen w-50 bg-white shadow-lg p-6 flex flex-col justify-between">
      {/* Social Media */}
      <div>
        <h2 className="text-gray-500 uppercase font-semibold text-sm mb-4">
          Social Media
        </h2>
        <ul className="flex flex-col gap-3">
          {socialItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.url}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
              >
                <span className="text-blue-600">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Navigation */}
      <div>
        <h2 className="text-gray-500 uppercase font-semibold text-sm mb-4">
          Navigation
        </h2>
        <ul className="flex flex-col gap-3">
          {mainLinks.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.url}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
              >
                <span className="text-blue-600">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer / Logo */}
      <div className="text-center text-gray-400 text-sm mt-6">
        © 2025 Sri Lanka Railways
      </div>
    </aside>
  );
}

export default SideBar;
