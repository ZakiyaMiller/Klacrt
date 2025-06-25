import { Globe } from 'lucide-react';

export default function SearchButton() {
    return (
        <button className="
      flex items-center gap-2 px-6 py-2.5
      bg-[var(--text-primary)] text-[var(--bg-primary)]
      rounded-full
      hover:opacity-90 transition-colors
      font-medium
    ">
            <Globe size={16} />
            Search
        </button>
    );
}
