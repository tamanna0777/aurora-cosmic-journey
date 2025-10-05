import { Link, useLocation } from "react-router-dom";
import { Rocket, Home, Gamepad2, BookOpen, Globe, Clock, Info, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/game", label: "Play", icon: Gamepad2 },
    { to: "/learn", label: "Learn", icon: BookOpen },
    { to: "/planets", label: "Planets", icon: Globe },
    { to: "/timeline", label: "Timeline", icon: Clock },
    { to: "/about", label: "About", icon: Info },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Rocket className="w-6 h-6 text-primary group-hover:text-aurora-pink transition-colors" />
            <span className="font-heading text-xl font-bold text-gradient">Aurora Nexus</span>
          </Link>
          
          <div className="flex items-center gap-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to;
              
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                    isActive
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
