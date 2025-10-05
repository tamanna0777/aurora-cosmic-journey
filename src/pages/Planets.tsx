import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Info } from "lucide-react";
import earthAurora from "@/assets/earth-aurora.jpg";
import jupiterAurora from "@/assets/jupiter-aurora.jpg";
import saturnAurora from "@/assets/saturn-aurora.jpg";
import neptuneAurora from "@/assets/neptune-aurora.jpg";

const Planets = () => {
  const planets = [
    {
      name: "Earth",
      image: earthAurora,
      auroraType: "Aurora Borealis & Australis",
      color: "Vibrant green, sometimes red or purple",
      description: "Earth's auroras are caused by solar wind particles colliding with oxygen and nitrogen in the atmosphere.",
      facts: ["Most commonly green from oxygen", "Occurs at both poles", "Visible at high latitudes"],
    },
    {
      name: "Jupiter",
      image: jupiterAurora,
      auroraType: "Jovian Aurora",
      color: "Purple-blue ultraviolet",
      description: "Jupiter has the most powerful auroras in the solar system, powered by its volcanic moon Io and strong magnetic field.",
      facts: ["Most powerful in solar system", "Influenced by moon Io", "Permanent aurora features"],
    },
    {
      name: "Saturn",
      image: saturnAurora,
      auroraType: "Saturnian Aurora",
      color: "Ultraviolet, faint visible",
      description: "Saturn's auroras are affected by its iconic ring system and solar wind interactions with its magnetosphere.",
      facts: ["Influenced by ring system", "Ultraviolet emissions", "Oval-shaped patterns"],
    },
    {
      name: "Neptune",
      image: neptuneAurora,
      auroraType: "Neptunian Aurora",
      color: "Dark blue flashes",
      description: "Neptune's auroras are mysterious and less understood, occurring on this distant ice giant far from the Sun.",
      facts: ["Farthest planet with auroras", "Very faint emissions", "Complex magnetic field"],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Planetary Auroras
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Journey across the solar system to discover unique auroras on different worlds
          </p>
        </div>

        {/* Rocket Animation Section */}
        <Card className="mb-12 bg-gradient-to-br from-card via-card to-background border-primary/20 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="font-heading text-3xl font-bold mb-3">Launch Your Exploration</h2>
              <p className="text-muted-foreground mb-4">
                Travel between planets to witness auroras across the solar system. Each world offers 
                unique phenomena based on its atmospheric composition and magnetic field.
              </p>
              <Button variant="hero" size="lg" className="group">
                <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Journey
              </Button>
            </div>
            <div className="animate-float">
              <Rocket className="w-32 h-32 text-primary" />
            </div>
          </div>
        </Card>

        {/* Planet Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {planets.map((planet, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={planet.image}
                  alt={`${planet.name} aurora`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-heading text-3xl font-bold">{planet.name}</h3>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-primary">Aurora Type:</span>
                    <span className="text-sm text-muted-foreground">{planet.auroraType}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-aurora-purple">Color:</span>
                    <span className="text-sm text-muted-foreground">{planet.color}</span>
                  </div>
                </div>

                <p className="text-muted-foreground">{planet.description}</p>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold">Key Facts:</span>
                  </div>
                  <ul className="space-y-1">
                    {planet.facts.map((fact, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full">
                  Explore {planet.name}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <Card className="mt-12 bg-card border-border p-8">
          <h2 className="font-heading text-3xl font-bold mb-6 text-center">Aurora Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-heading">Planet</th>
                  <th className="text-left py-3 px-4 font-heading">Magnetic Field</th>
                  <th className="text-left py-3 px-4 font-heading">Primary Cause</th>
                  <th className="text-left py-3 px-4 font-heading">Visibility</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-semibold">Earth</td>
                  <td className="py-3 px-4 text-muted-foreground">Moderate</td>
                  <td className="py-3 px-4 text-muted-foreground">Solar wind</td>
                  <td className="py-3 px-4 text-muted-foreground">Visible light</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-semibold">Jupiter</td>
                  <td className="py-3 px-4 text-muted-foreground">Very strong</td>
                  <td className="py-3 px-4 text-muted-foreground">Io's volcanism</td>
                  <td className="py-3 px-4 text-muted-foreground">UV/X-ray</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-semibold">Saturn</td>
                  <td className="py-3 px-4 text-muted-foreground">Strong</td>
                  <td className="py-3 px-4 text-muted-foreground">Solar wind + rings</td>
                  <td className="py-3 px-4 text-muted-foreground">UV</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Neptune</td>
                  <td className="py-3 px-4 text-muted-foreground">Moderate</td>
                  <td className="py-3 px-4 text-muted-foreground">Solar wind</td>
                  <td className="py-3 px-4 text-muted-foreground">Faint UV</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Planets;
