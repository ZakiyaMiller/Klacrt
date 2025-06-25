import { Wifi, Camera, PieChart } from "lucide-react";


const iconMap = {
    wifi: Wifi,
    camera: Camera,
    "pie-chart": PieChart,
};

const FeatureButton = ({ icon, label }) => {

    const LucideIcon = iconMap[icon];

    return (
        <button
            className="
        flex items-center gap-2 w-[200px] h-[43px] px-6 py-3
        rounded-[109px] border border-[var(--border-color)]
        bg-[var(--bg-primary)] text-[var(--text-primary)]
        font-medium text-[16px] leading-none
        transition-colors duration-300
        hover:bg-[var(--text-primary)]/5
      "
            type="button"
        >
            {LucideIcon && <LucideIcon size={16} />}
            <span className="ml-2">{label}</span>
        </button>
    );
};

export default function FeatureCard() {
    const features = [
        { icon: "wifi", label: "Live Insights" },
        { icon: "camera", label: "Smart Trades" },
        { icon: "pie-chart", label: "Predictive Edge" },
    ];

    return (
        <div className="flex flex-row flex-wrap gap-4 pt-4  max-w-full items-center justify-center">
            {features.map((feature, index) => (
                <FeatureButton key={index} {...feature} />
            ))}
        </div>
    );
}
