
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  MessageSquare, 
  Users, 
  UserPlus, 
  DollarSign, 
  Settings, 
  HelpCircle 
} from 'lucide-react';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const SidebarLink = ({ to, icon, label, isActive }: SidebarLinkProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "sidebar-link",
        isActive && "active"
      )}
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { to: "/ai-agent", icon: <MessageSquare size={18} />, label: "AI Agent" },
    { to: "/dashboard", icon: <BarChart3 size={18} />, label: "Dashboard" },
    { to: "/campaign", icon: <Users size={18} />, label: "Campaign" },
    { to: "/promoters", icon: <UserPlus size={18} />, label: "Promoters" },
    { to: "/leads", icon: <Users size={18} />, label: "Leads" },
    { to: "/payouts", icon: <DollarSign size={18} />, label: "Payouts" },
  ];

  const bottomLinks = [
    { to: "/settings", icon: <Settings size={18} />, label: "Settings" },
    { to: "/help", icon: <HelpCircle size={18} />, label: "Help" },
  ];

  return (
    <aside className="w-[220px] bg-white border-r h-screen flex flex-col">
      <div className="p-4">
        <Link to="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8L16 24L24 8" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24 24L16 8L8 24" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      <nav className="flex flex-col gap-1 p-2 flex-1">
        {links.map((link) => (
          <SidebarLink
            key={link.to}
            to={link.to}
            icon={link.icon}
            label={link.label}
            isActive={currentPath === link.to}
          />
        ))}
      </nav>

      <div className="mt-auto">
        <nav className="flex flex-col gap-1 p-2 border-t">
          {bottomLinks.map((link) => (
            <SidebarLink
              key={link.to}
              to={link.to}
              icon={link.icon}
              label={link.label}
              isActive={currentPath === link.to}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
}