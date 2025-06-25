import './App.css';

import { ThemeProvider, useTheme } from './context/ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import animationDark from './assets/animationDark.mp4';
import animationLight from './assets/animationLight.mp4';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

function AppContent() {
  const { darkMode } = useTheme();
  const videoRef = useRef(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (videoRef.current) {
      // Fade out current video
      setOpacity(0);

      // Wait for fade out, then switch source and fade in
      setTimeout(() => {
        videoRef.current.load();
        setOpacity(1);
      }, 300);
    }
  }, [darkMode]);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
        style={{
          opacity: opacity,
          transition: 'opacity 300ms ease-in-out',
        }}
      >
        <source
          src={darkMode ? animationDark : animationLight}
          type="video/mp4"
        />
      </video>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;
