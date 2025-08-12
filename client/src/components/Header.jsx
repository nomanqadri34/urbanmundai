import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Contact', href: '/#contact' },
    { name: 'WhatsApp Chat', href: '/whatsapp-chat' }
  ];

  const handleNavigation = (href) => {
    if (href === '/') {
      // If going to home page, navigate there
      window.location.href = '/';
    } else if (href === '/whatsapp-chat') {
      // If going to WhatsApp chat page, navigate there
      window.location.href = '/whatsapp-chat';
    } else if (href.startsWith('/#')) {
      // If it's a hash link, navigate to home first then scroll to section
      window.location.href = href;
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md md:shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 group">
              <img
                src="/logo.png"
                alt="UrbanMandaiGlobal"
                className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  UrbanMandaiGlobal
                </h1>
                <p className="text-xs text-gray-500">Since 2015</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
                className="text-gray-700 hover:text-[#2563eb] px-2 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/#contact');
              }}
              className="bg-gradient-to-r from-[#f97316] to-[#ec4899] text-white px-3 py-2 md:px-4 md:py-2 rounded-md hover:from-[#ea580c] hover:to-[#db2777] transition-all text-sm font-medium"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#2563eb] focus:outline-none focus:text-[#2563eb] p-2"
            >
              <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  className="text-gray-700 hover:text-[#2563eb] block px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 space-y-2">
                <a
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/#contact');
                  }}
                  className="bg-gradient-to-r from-[#f97316] to-[#ec4899] text-white px-3 py-2 rounded-md hover:from-[#ea580c] hover:to-[#db2777] transition-all text-sm font-medium block text-center"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 