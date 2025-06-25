// Sent message bubble (right-aligned, lighter background)
export function SentBubble({ message }) {
    return (
        <div className="flex justify-end mb-4">
            <div className="max-w-[70%] bg-[var(--text-primary)]/10 text-[var(--text-primary)] rounded-[20px] rounded-tr-[5px] px-6 py-4">
                <p className="text-sm break-words leading-relaxed">
                    {message}
                </p>
            </div>
        </div>
    );
}

// Received message bubble (left-aligned, darker background)
export function ReceivedBubble({ message }) {
    return (
        <div className="flex justify-start mb-4">
            <div className="max-w-[70%] bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-[20px] rounded-tl-[5px] px-6 py-4">
                <p className="text-sm break-words leading-relaxed">
                    {message}
                </p>
            </div>
        </div>
    );
}
