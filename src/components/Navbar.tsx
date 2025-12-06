import phantomLogo from "@/assets/phantom-logo.png";

const DISCORD_LINK = "https://discord.gg/ktCKKrYu6q";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img src={phantomLogo} alt="Phantom" className="w-6 h-6 object-contain" />
            <span className="font-orbitron text-lg font-bold text-foreground tracking-wider">
              PHANTOM
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider font-medium"
            >
              Features
            </a>
            <a
              href="#preise"
              className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider font-medium"
            >
              Preise
            </a>
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider font-medium"
            >
              Discord
            </a>
          </div>

          {/* CTA */}
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider font-orbitron"
          >
            Kaufen
          </a>
        </div>
      </div>
      <div className="cyber-line" />
    </nav>
  );
};

export default Navbar;
