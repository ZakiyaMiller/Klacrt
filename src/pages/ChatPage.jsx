import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import ChatInput from '../components/ChatInput';
import SearchButton from '../components/SearchButton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { SentBubble, ReceivedBubble } from '../components/ChatBubbles';

// Chat page component
export default function ChatPage() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)]">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <aside className={`${collapsed ? 'w-[56px] min-w-[56px]' : 'w-[240px] min-w-[0px]'} transition-all duration-300 ease-in-out`}>
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </aside>
        <main className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 p-8 pb-20 overflow-y-auto scrollbar-thin scrollbar-thumb-[#252525]/10 dark:scrollbar-thumb-white/10">
              <div className="max-w-3xl mx-auto space-y-6">
                <ReceivedBubble message="Hello! How can I help you today?" />
                <SentBubble message="What's the future price prediction for Solana?" />
                <ReceivedBubble message="Based on current market analysis..." />
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 p-8 border-t border-[var(--border-color)]/10">
              <ChatInput />
              <SearchButton />
            </div>
          </div>
          {/* Info and question mark above footer */}
          <div className="flex items-center justify-between px-8 py-2 border-t border-[var(--border-color)]/10 text-[var(--text-secondary)] text-xs">
            <span>Klacrt can make mistakes. Check important info.</span>
            <button className="p-2 hover:opacity-75 transition-colors rounded-full hover:bg-[var(--text-primary)]/5">
              <HelpCircle size={18} className="text-[var(--text-primary)]" />
            </button>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
