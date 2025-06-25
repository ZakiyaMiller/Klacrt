import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import logoDark from '../assets/logoDark.svg';
import logo from '../assets/logo.svg';

// Header component (navbar)
export default function Header() {
  const { darkMode } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-[2px]">
      <div className="max-w-[1228px] mx-auto h-[72px] px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={darkMode ? logoDark : logo}
            alt="KLACRT Logo"
            className="w-[85px] h-[51px] object-contain"
          />
          <span className="text-3xl font-semibold text-[var(--text-primary)]">
            KLACRT
          </span>
        </div>
        <ThemeToggle />
        <div className="flex gap-3">
          <button className="px-6 py-2 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--text-primary)]/5 transition-colors">
            Log in
          </button>
          <button className="px-6 py-2 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
