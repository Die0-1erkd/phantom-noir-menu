import { Button } from "@/components/ui/button";
import phantomLogo from "@/assets/phantom-logo.png";

const DISCORD_LINK = "https://discord.gg/ktCKKrYu6q";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[2px] bg-primary/20 animate-scan" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img
            src={phantomLogo}
            alt="Phantom Logo"
            className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-wider">
          <span className="text-foreground">PHAN</span>
          <span className="text-primary glow-text-intense">TOM</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-2 tracking-wide">
          FiveM Menu
        </p>
        <p className="text-sm md:text-base text-muted-foreground/70 max-w-xl mx-auto mb-10">
          Das ultimative Menü für FiveM. Undetected. Leistungsstark. Unaufhaltsam.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">
              Jetzt Kaufen
            </Button>
          </a>
          <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              Mehr erfahren
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Support" },
            { value: "5K+", label: "Nutzer" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-primary glow-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30" />
    </section>
  );
};

export default Hero;
