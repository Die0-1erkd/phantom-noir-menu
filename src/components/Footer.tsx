import { Ghost } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Ghost className="w-5 h-5 text-primary" />
            <span className="font-orbitron text-sm font-bold text-foreground tracking-wider">
              PHANTOM
            </span>
          </div>

          <div className="flex items-center gap-6">
            {["Discord", "Telegram", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          <p className="text-muted-foreground/60 text-xs">
            © 2024 Phantom. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
