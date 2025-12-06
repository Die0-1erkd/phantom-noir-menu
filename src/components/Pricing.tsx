import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "9.99",
    duration: "1 Woche",
    features: ["Alle Basis-Features", "Discord Support", "Auto-Updates"],
    popular: false,
  },
  {
    name: "Premium",
    price: "24.99",
    duration: "1 Monat",
    features: [
      "Alle Features",
      "Priority Support",
      "Auto-Updates",
      "Exklusive Features",
    ],
    popular: true,
  },
  {
    name: "Lifetime",
    price: "79.99",
    duration: "Für immer",
    features: [
      "Alle Features",
      "VIP Support",
      "Lebenslange Updates",
      "Beta Zugang",
      "Custom Configs",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="preise" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-foreground">
            <span className="text-primary glow-text">Preise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wähle den Plan, der am besten zu dir passt
          </p>
          <div className="cyber-line max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass rounded-xl p-6 lg:p-8 relative ${
                plan.popular ? "ring-2 ring-primary animate-glow-pulse" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-orbitron uppercase tracking-wider">
                  Beliebt
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-orbitron text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-orbitron font-bold text-primary glow-text">
                    €{plan.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {plan.duration}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                Auswählen
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
