import { Ghost, Shield, Zap, Eye, Settings, Download } from "lucide-react";

const features = [
  {
    icon: Ghost,
    title: "Undetected",
    description: "Bleibt unsichtbar für alle Anti-Cheat Systeme",
  },
  {
    icon: Shield,
    title: "Sicher",
    description: "Verschlüsselte Verbindung und sichere Authentifizierung",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimiert für maximale FPS ohne Einbußen",
  },
  {
    icon: Eye,
    title: "ESP & Aimbot",
    description: "Präzise Spieler-Erkennung und Zielhilfe",
  },
  {
    icon: Settings,
    title: "Anpassbar",
    description: "Vollständig konfigurierbare Einstellungen",
  },
  {
    icon: Download,
    title: "Auto-Update",
    description: "Automatische Updates bei neuen Versionen",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-foreground">
            <span className="text-primary glow-text">Features</span>
          </h2>
          <div className="cyber-line max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass rounded-lg p-6 gradient-border group hover:bg-primary/5 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
