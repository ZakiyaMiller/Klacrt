import { HelpCircle } from 'lucide-react';

// Footer component
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full h-[32px] border-t border-[var(--border-color)]/10 bg-[var(--bg-primary)]/95 backdrop-blur-sm z-50">
      <div className="w-full h-full px-8 flex items-center justify-start text-sm text-[var(--text-primary)]/70">
        Copyright © 2025 Klacrt - All Rights Reserved.
      </div>
    </footer>
  );
}
