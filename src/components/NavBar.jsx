import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDark]);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-teal-500 dark:bg-teal-700 p-4 sticky top-0 z-10 shadow-md">
      <ul className="flex justify-center space-x-8"> {/* Changed space-x-6 to space-x-8 */}
        {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-white hover:text-yellow-200 ${
                activeSection === item.toLowerCase() ? 'font-bold underline' : ''
              }`}
            >
              {item}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-white hover:text-yellow-200 focus:outline-none"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? '☀️' : '🌓'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;