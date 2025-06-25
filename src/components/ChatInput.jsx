import { Mic } from 'lucide-react';

export default function ChatInput() {
    return (
        <div className="relative w-[500px]">
            <input
                type="text"
                placeholder="Ask anything"
                className="w-full h-[50px] bg-[var(--text-primary)]/5 rounded-full px-6 pr-12
                 text-[var(--text-primary)] placeholder-[var(--text-primary)]/50
                 focus:outline-none focus:ring-1 focus:ring-[var(--text-primary)]/20
                 hover:bg-[var(--text-primary)]/10 transition-colors"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-primary)]/70 hover:text-[var(--text-primary)] transition-colors">
                <Mic size={20} />
            </button>
        </div>
    );
}
