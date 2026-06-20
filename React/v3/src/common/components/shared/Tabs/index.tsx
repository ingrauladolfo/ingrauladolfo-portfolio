import type { FC } from "react"
import type { TabsProps } from "../../../interfaces/components/shared/Tabs"

const Tabs: FC<TabsProps> = ({ tabs, activeTab, labels, onChange, theme }) => {
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map(tab => (
                <button key={tab} onClick={() => onChange(tab)} className={`px-4 py-2 rounded-full cursor-pointer font-semibold transition border-3 ${theme === 'dark' ? activeTab === tab ? 'border-amber-300 bg-gray-950 text-gray-100' : 'border-red-600 bg-gray-950 text-gray-100' : activeTab === tab ? 'border-red-600 bg-gray-100 text-gray-950' : 'border-amber-300 bg-gray-100 text-gray-950'}`}>
                    {labels[tab]}
                </button>
            ))}
        </div>
    )
}

export default Tabs