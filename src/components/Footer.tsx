import phantomLogo from "@/assets/phantom-logo.png";

const DISCORD_LINK = "https://discord.gg/ktCKKrYu6q";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={phantomLogo} alt="Phantom" className="w-5 h-5 object-contain" />
            <span className="font-orbitron text-sm font-bold text-foreground tracking-wider">
              PHANTOM
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Discord
            </a>
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Support
            </a>
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
