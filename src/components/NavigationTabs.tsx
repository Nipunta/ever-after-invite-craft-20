
import React from 'react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  icon?: string;
}

interface NavigationTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const NavigationTabs = ({ tabs, activeTab, onTabChange }: NavigationTabsProps) => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-slide-in-top">
      <div className="bg-white/90 backdrop-blur-lg rounded-full shadow-2xl border border-white/40 p-1.5">
        <div className="flex space-x-1">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-500 transform",
                "hover:scale-110 active:scale-95 relative overflow-hidden",
                "animate-fade-in",
                activeTab === tab.id
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xl scale-105"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/70"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="flex items-center space-x-1.5 relative z-10">
                {tab.icon && (
                  <span className="animate-pulse">{tab.icon}</span>
                )}
                <span className="whitespace-nowrap">{tab.label}</span>
              </span>
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 animate-pulse opacity-20 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;
