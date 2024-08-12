import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [mobileNavBar, setMobileNavBar] = useState(false);

  return (
    <nav className="bg-[#131212] h-[80px] text-white font-sans font-bold flex items-center justify-between md:justify-end px-4 md:px-8 lg:px-12 fixed w-full top-0 left-0 z-50 shadow-lg">
      

      <button
        className="text-2xl md:hidden flex items-center justify-center w-full"
        onClick={() => setMobileNavBar(!mobileNavBar)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-center justify-end w-full">
        {['Главная', 'CAPITAL','проекты',  'Контакты'].map((item) => (
          <a
            key={item}
            href="#"
            className={`text-[1.875rem] border-b-[3px] ${
              active === item
                ? 'border-[#c09c54] text-[#CACACA]'
                : 'border-transparent hover:border-[#c09c54]'
            }`}
            onClick={() => setActive(item)}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu */}
      {mobileNavBar && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#131212] z-40 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 p-4">
          {['Главная', 'CAPITAL','проекты',  'Контакты'].map((item) => (
              <li key={item} className="text-center">
                <a
                  href="#"
                  className={`text-[1.5rem] border-b-[3px] ${
                    active === item
                      ? 'border-[#c09c54] text-[#CACACA]'
                      : 'border-transparent hover:border-[#c09c54]'
                  }`}
                  onClick={() => {
                    setActive(item);
                    setMobileNavBar(false);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
