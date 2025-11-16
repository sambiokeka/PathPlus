import { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import { FaSun, FaMoon, FaBars, FaTimes, FaHome, FaRoute, FaUserFriends, FaUser } from 'react-icons/fa';



const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: 'Dashboard', icon: FaHome, href: '/dashboard' },
    { name: 'Trilhas', icon: FaRoute, href: '/trilha' },
    { name: 'Mentores', icon: FaUserFriends, href: '/mentores' },
  ];

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-extrabold">
              <a 
                href="homepage" 
                className="flex items-center text-black dark:text-white hover:scale-105 transition-transform duration-200"
              >
                <span style={{fontFamily: "Montserrat, sans-serif"}}>Path</span><span className="text-black dark:text-white ml-1"><span style={{fontFamily: "Montserrat, sans-serif"}}>+</span></span>
              </a>
            </h1>
            </div>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                <NavLink 
                  key={index}
                  to={item.href}
                  className={({ isActive }) => 
                    `flex items-center space-x-1 transition-colors ${
                      isActive 
                        ? 'text-indigo-600 dark:text-indigo-400 font-medium border-b-2 border-indigo-600 pb-1' 
                        : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`
                  }
                >
                  <item.icon className="text-sm" />
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
            
            {/* Botões Direita */}
            <div className="flex items-center space-x-3">
              {/* Toggle Dark Mode */}
              <button 
                onClick={toggleDarkMode}
                className="hover:cursor-pointer w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? <FaSun className="text-gray-200" /> : <FaMoon />}
              </button>
              
              {/* Avatar */}
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors cursor-pointer">
                <span className="text-indigo-600 dark:text-indigo-300 font-medium">E</span>
              </div>

              {/* Botão Menu Mobile */}
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div className={`md:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={toggleMobileMenu}
        ></div>
        
        {/* Menu */}
        <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl">
          {/* Header do Menu Mobile */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">+</span>
              </div>
              <h2 className="text-lg font-bold text-gray-800 dark:text-white">Menu</h2>
            </div>
            <button 
              onClick={toggleMobileMenu}
              className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center"
            >
              <FaTimes />
            </button>
          </div>

          {/* --- Itens do Menu --- */}
          <div className="p-4">
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.href}
                  onClick={toggleMobileMenu}

                  className={({ isActive }) => 
                    `flex items-center space-x-4 p-4 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <item.icon className="text-lg" />
                      <span className="font-medium">{item.name}</span>
                      {isActive && (
                        <div className="w-2 h-2 bg-indigo-600 rounded-full ml-auto"></div>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Seção de Informações do Usuário */}
            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 dark:text-indigo-300 font-medium text-lg">E</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Erick Jooji</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Data Science</p>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                <div className="bg-white dark:bg-gray-600 p-2 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Progresso</p>
                  <p className="font-bold text-indigo-600 dark:text-indigo-400">65%</p>
                </div>
                <div className="bg-white dark:bg-gray-600 p-2 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Módulos</p>
                  <p className="font-bold text-green-600 dark:text-green-400">7/12</p>
                </div>
              </div>
            </div>

            {/* Footer do Menu Mobile */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full flex items-center justify-center space-x-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
                <FaUserFriends />
                <span>Encontrar Mentores</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;