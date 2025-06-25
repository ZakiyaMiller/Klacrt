import { Moon, Sun } from "lucide-react";
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className={`
      w-[111px] h-[44px] 
      rounded-full border 
      ${darkMode ? 'bg-[#252525] border-white' : 'bg-white border-[#252525]'}
      flex items-center relative
      overflow-hidden
      transition-all duration-300 ease-in-out
    `}>
      {/* Moving Circle */}
      <div className={`
        absolute h-[44px] w-[66px]
        ${darkMode ? 'bg-white' : 'bg-[#252525]'}
        rounded-full
        transition-all duration-300 ease-in-out
        transform-gpu
        ${darkMode ? 'translate-x-[46px]' : 'translate-x-0'}
      `} />

      {/* Icons Container */}
      <div className="flex items-center justify-between w-full relative px-0">
        {/* Sun Icon */}
        <button
          className="w-[52px] h-[36px] flex items-center justify-center relative transition-transform duration-300"
          onClick={() => setDarkMode(false)}
        >
          <Sun
            size={20}
            strokeWidth={2}
            className="transition-colors duration-300"
            color={darkMode ? '#FFFFFF' : '#FFFFFF'}
          />
        </button>

        {/* Moon Icon */}
        <button
          className="w-[52px] h-[36px] flex items-center justify-center relative transition-transform duration-300"
          onClick={() => setDarkMode(true)}
        >
          <Moon
            size={20}
            strokeWidth={2}
            className="transition-colors duration-300"
            color={darkMode ? '#252525' : '#252525'}
          />
        </button>
      </div>
    </div>
  );
}
