import { Search, PanelLeftClose } from 'lucide-react';


// Sidebar component (chat history)
export default function Sidebar({ collapsed, setCollapsed }) {
  const historyGroups = [
    { title: 'Today', items: ['Solana Price Future'] },
    { title: '7 days ago', items: ['Solana Price Future'] },
    { title: '1 month ago', items: ['Solana Price Future'] },
    { title: '2 months ago', items: ['Solana Price Future'] },
    { title: '2024', items: ['Solana Price Future'] }
  ];

  return (
    <aside
      className={`
        flex flex-col h-full
        bg-[var(--bg-primary)] dark:bg-[#252525]
        text-[var(--text-primary)]
        transition-all duration-300 ease-in-out
        w-full
      `}
    >
      <div className="flex items-center justify-between p-2 border-b border-[var(--border-color)]/10">
        {!collapsed && (
          <button className="p-2 hover:bg-[var(--text-primary)]/5 rounded-lg transition-colors">
            <Search size={20} className="text-[var(--text-primary)]" />
          </button>
        )}
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="p-2 rounded-lg hover:bg-[var(--text-primary)]/10 transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <PanelLeftClose
            size={22}
            className={`transition-transform duration-300 ${collapsed ? 'rotate-180' : ''} text-[var(--text-primary)]`}
          />
        </button>
      </div>
      {!collapsed && (
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {historyGroups.map((group, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xs font-medium text-[var(--text-secondary)] px-2">{group.title}</h3>
              <ul className="space-y-1">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-[var(--text-primary)]/5 text-[var(--text-primary)] transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
