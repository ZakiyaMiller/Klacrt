import Header from '../components/Header';
import FeatureCard from '../components/FeatureCard';
import { FaLinkedin, FaMeta, FaInstagram, FaThreads } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import arrowUnion from '../assets/arrow-union.svg';


// Home page component
export default function HomePage() {
  const navigate = useNavigate();


  const socialIcons = [
    { icon: FaLinkedin, href: "#linkedin" },
    { icon: FaMeta, href: "#meta" },
    { icon: FaInstagram, href: "#instagram" },
    { icon: FaThreads, href: "#threads" }
  ];

  return (
    <main className="flex flex-col items-center min-h-screen relative text-[var(--text-primary)]">
      {/* Header */}
      <Header />

      {/* Info Box - removed border */}
      <div className="absolute top-[138px] left-[35px] w-[395px] h-[140px] p-6">
        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Klacrt</h2>
        <p className="text-sm text-[var(--text-secondary)] mb-6">
          Stay ahead in the crypto market with real-time insights and AI-driven strategies.
        </p>
        {/* Decorative Line with Elements */}
        <div className="relative w-full h-[1px] bg-[var(--text-primary)]">
          <div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-[var(--text-primary)]"></div>
          <div className="absolute right-0 -top-[3px] w-4 h-[6px] rounded-full bg-[var(--text-primary)]"></div>
        </div>
      </div>

      {/* Social Media Bar */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6">
        {socialIcons.map(({ icon, href }, index) => {
          const Icon = icon;
          return (
            <a
              key={index}
              href={href}
              className="text-[var(--text-primary)] hover:opacity-70 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} />
            </a>
          );
        })}
      </div>

      {/* Chat Navigation Button */}
      <button
        onClick={() => navigate('/chat')}
        className="absolute top-[162px] left-1/2 -translate-x-1/2
                  w-[89px] h-[49px] 
                  border-3 border-[#787878] dark:border-[#F0F0F0] rounded-[109px]
                  flex items-center justify-center gap-[10px]
                  px-8 py-3
                  transition-opacity hover:opacity-80"
      >
        <img
          src={arrowUnion}
          alt="Navigate to Chat"
          className="w-6 h-6"
        />
      </button>

      {/* Feature Card Section - positioned absolute from bottom */}
      <section className="absolute bottom-[90px] left-1/2 -translate-x-1/2 w-full flex justify-center">
        <FeatureCard />
      </section>
    </main>
  );
}
