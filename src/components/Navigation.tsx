import { Terminal } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="fixed w-full bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-sm shadow-lg z-10 transition-colors">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Terminal className="w-6 h-6 text-[#0246b3] dark:text-[#4d82ff]" />
          <span className="text-lg font-semibold text-[#0246b3] dark:text-[#4d82ff]">
            ambermtech
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-slate-600 dark:text-slate-300 hover:text-[#0246b3] dark:hover:text-[#4d82ff] transition-colors ${
              location.pathname === '/' ? 'text-[#0246b3] dark:text-[#4d82ff]' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className={`text-slate-600 dark:text-slate-300 hover:text-[#0246b3] dark:hover:text-[#4d82ff] transition-colors ${
              location.pathname === '/contact' ? 'text-[#0246b3] dark:text-[#4d82ff]' : ''
            }`}
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}