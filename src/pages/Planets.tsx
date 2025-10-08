import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Telescope, ChevronDown } from "lucide-react";
import mercuryAurora from "@/assets/mercury-aurora.jpg";
import venusAurora from "@/assets/venus-aurora.jpg";
import earthAurora from "@/assets/earth-aurora.jpg";
import marsAurora from "@/assets/mars-aurora.jpg";
import jupiterAurora from "@/assets/jupiter-aurora.jpg";
import saturnAurora from "@/assets/saturn-aurora.jpg";
import uranusAurora from "@/assets/uranus-aurora.jpg";
import neptuneAurora from "@/assets/neptune-aurora.jpg";
import { useEffect, useRef, useState } from "react";

const Planets = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;

    // Create twinkling stars
    const createStars = () => {
      const container = starsRef.current;
      if (!container) return;

      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "absolute rounded-full bg-white animate-twinkle";
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(star);
      }
    };

    createStars();
  }, []);

  const [expandedPlanet, setExpandedPlanet] = useState<string | null>(null);

  const planets = [
    {
      name: "Mercury",
      image: mercuryAurora,
      fact: "Closest to the Sun • No atmosphere",
      auroraColor: "None",
      size: "Smallest planet",
      gradient: "from-slate-500 to-gray-600",
      auroraInfo: "Mercury has no significant atmosphere and lacks a global magnetic field, making it unable to produce traditional auroras like those on Earth. Without atmospheric gases to interact with solar wind particles, Mercury remains a barren world without the spectacular light shows seen on other planets."
    },
    {
      name: "Venus",
      image: venusAurora,
      fact: "Hottest planet • Thick atmosphere",
      auroraColor: "Faint UV glow",
      size: "Earth's twin",
      gradient: "from-orange-400 to-yellow-500",
      auroraInfo: "Venus exhibits 'global, diffuse' auroras despite lacking a global magnetic field, unlike Earth's polar auroras. These auroras are faint green and blue glows on the nightside, caused by solar wind particles interacting with the Venusian atmosphere, creating localized magnetic fields and exciting oxygen atoms. The aurora is not visible from the surface due to Venus's dense atmospheric haze but can be observed from space."
    },
    {
      name: "Earth",
      image: earthAurora,
      fact: "Our home • Vibrant auroras",
      auroraColor: "Green, red, purple",
      size: "The Blue Marble",
      gradient: "from-blue-500 to-green-400",
      auroraInfo: "Auroras are natural light displays in Earth's atmosphere, caused by charged particles from the Sun (solar wind) interacting with Earth's magnetic field and atmospheric gases. These particles are directed toward the poles, where they collide with atoms like oxygen and nitrogen, causing them to emit light in a dazzling show of colors, most commonly green and red. The Northern Lights are called Aurora Borealis and the Southern Lights are called Aurora Australis."
    },
    {
      name: "Mars",
      image: marsAurora,
      fact: "The Red Planet • Thin atmosphere",
      auroraColor: "Patchy UV spots",
      size: "Half Earth's size",
      gradient: "from-red-600 to-orange-500",
      auroraInfo: "Mars has auroras similar to Earth but different due to its lack of a global magnetic field; these auroras are caused by solar wind particles interacting with the Martian atmosphere, resulting in faint, diffuse glows rather than the structured displays seen on Earth. In a historic first, NASA's Perseverance rover captured the first visible-light images of a Martian aurora in 2024, revealing a soft green glow in the night sky caused by atomic oxygen."
    },
    {
      name: "Jupiter",
      image: jupiterAurora,
      fact: "Gas giant • Most powerful auroras",
      auroraColor: "Purple-blue UV",
      size: "Largest planet",
      gradient: "from-orange-300 to-amber-600",
      auroraInfo: "Jupiter's auroras are massive, powerful light shows, hundreds of times brighter and more energetic than Earth's, caused by its immense magnetic field. The strong magnetic field, powered by Jupiter's metallic core, captures charged particles from the solar wind and its volcanic moon Io, accelerating them toward the planet's poles. These high-energy particles then collide with atmospheric gases, causing them to glow and create the continuous, dynamic aurora."
    },
    {
      name: "Saturn",
      image: saturnAurora,
      fact: "Ringed beauty • UV auroras",
      auroraColor: "Ultraviolet rings",
      size: "Ring system",
      gradient: "from-yellow-200 to-amber-400",
      auroraInfo: "Auroras on Saturn are giant, natural light shows similar to Earth's Northern and Southern Lights, caused by charged particles from the solar wind colliding with gases in Saturn's atmosphere. These spectacular displays appear as vivid, towering curtains of light over the planet's poles. While Earth's auroras are green and red and visible in the sky, Saturn's auroras are primarily red and purple and can only be seen using ultraviolet-sensitive instruments from space."
    },
    {
      name: "Uranus",
      image: uranusAurora,
      fact: "Ice giant • Tilted axis",
      auroraColor: "Faint blue glow",
      size: "Sideways rotation",
      gradient: "from-cyan-400 to-blue-500",
      auroraInfo: "Uranus has auroras, visible in both ultraviolet and infrared light, caused by energetic particles interacting with its unique magnetic field and atmosphere. Unlike Earth's, Uranus's auroras are irregular and not centered at its poles because the planet's magnetic field is tilted and offset from its rotational axis. These auroras are studied to understand icy worlds and search for signs of life on exoplanets, with the infrared aurora providing insights into atmospheric temperature and composition."
    },
    {
      name: "Neptune",
      image: neptuneAurora,
      fact: "Farthest ice giant • Dark storms",
      auroraColor: "Dark blue flashes",
      size: "Windiest planet",
      gradient: "from-blue-600 to-indigo-700",
      auroraInfo: "Auroras were recently captured on Neptune by the James Webb Space Telescope (JWST), confirming their presence and revealing unique characteristics, such as their location at mid-latitudes due to Neptune's extremely tilted magnetic field, rather than at the poles. These auroras, composed of the trihydrogen cation (H₃⁺) and appearing faint and dull in the planet's upper atmosphere, provide crucial information about Neptune's temperature and magnetosphere."
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Deep Space Background */}
      <div className="fixed inset-0 space-gradient -z-10" />
      
      {/* Twinkling Stars */}
      <div ref={starsRef} className="fixed inset-0 -z-10" />
      
      {/* Floating Particles */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      <div className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-3xl -z-10" />
            <Telescope className="w-20 h-20 mx-auto mb-6 text-primary animate-float" />
            <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-gradient">
              Explore the Planets
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Journey across the solar system and witness auroras on different worlds. 
              Each planet offers unique phenomena based on its atmosphere and magnetic field.
            </p>
            <div className="flex gap-4 justify-center items-center">
              <Sparkles className="w-5 h-5 text-aurora-purple animate-pulse" />
              <span className="text-sm text-aurora-purple font-semibold">
                Hover over planets to see aurora effects
              </span>
              <Sparkles className="w-5 h-5 text-aurora-pink animate-pulse" />
            </div>
          </div>

          {/* Planet Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16">
            {planets.map((planet, index) => (
              <Card
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl flex flex-col"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Aurora Ring Effect on Hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-aurora-ring -z-10" />
                
                {/* Planet Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={planet.image}
                    alt={`${planet.name} with aurora`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${planet.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  
                  {/* Cosmic Glow Overlay */}
                  <div className="absolute inset-0 cosmic-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Planet Name Overlay */}
                  <div className="absolute inset-0 flex items-end p-3 sm:p-4 bg-gradient-to-t from-background/90 via-background/50 to-transparent">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gradient">
                      {planet.name}
                    </h3>
                  </div>
                </div>

                {/* Planet Info */}
                <div className="p-4 sm:p-6 space-y-3 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-muted-foreground">{planet.fact}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-primary font-semibold">Aurora:</span>
                      <span className="text-muted-foreground">{planet.auroraColor}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-aurora-purple font-semibold">Size:</span>
                      <span className="text-muted-foreground">{planet.size}</span>
                    </div>
                  </div>

                  {/* Expandable Aurora Science Section */}
                  <div className="mt-auto">
                    <button
                      onClick={() => setExpandedPlanet(expandedPlanet === planet.name ? null : planet.name)}
                      className="w-full flex items-center justify-between p-2 sm:p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/30 group/btn"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-primary">Aurora Science</span>
                      <ChevronDown
                        className={`w-4 h-4 text-primary transition-transform duration-300 ${
                          expandedPlanet === planet.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedPlanet === planet.name ? 'max-h-96 mt-3' : 'max-h-0'
                      }`}
                    >
                      <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {planet.auroraInfo}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="hero" 
                    className="w-full mt-3 group-hover:bg-primary/40 transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    Explore Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <Card className="bg-card/30 backdrop-blur-md border-border/50 p-8 cosmic-glow">
            <h2 className="font-heading text-4xl font-bold mb-8 text-center text-gradient">
              Planetary Aurora Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/30">
                    <th className="text-left py-4 px-4 font-heading text-primary">Planet</th>
                    <th className="text-left py-4 px-4 font-heading text-aurora-purple">Magnetic Field</th>
                    <th className="text-left py-4 px-4 font-heading text-aurora-pink">Primary Cause</th>
                    <th className="text-left py-4 px-4 font-heading text-primary">Aurora Type</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Mercury", field: "Very weak", cause: "Solar wind", type: "None detected" },
                    { name: "Venus", field: "None", cause: "Solar wind", type: "Faint UV" },
                    { name: "Earth", field: "Moderate", cause: "Solar wind", type: "Visible light" },
                    { name: "Mars", field: "Very weak", cause: "Solar wind", type: "Patchy UV" },
                    { name: "Jupiter", field: "Very strong", cause: "Io's volcanism", type: "UV/X-ray" },
                    { name: "Saturn", field: "Strong", cause: "Solar wind + rings", type: "UV" },
                    { name: "Uranus", field: "Moderate", cause: "Solar wind", type: "Faint UV" },
                    { name: "Neptune", field: "Moderate", cause: "Solar wind", type: "Faint UV" },
                  ].map((row, idx) => (
                    <tr 
                      key={idx} 
                      className="border-b border-border/30 hover:bg-primary/5 transition-colors"
                    >
                      <td className="py-4 px-4 font-semibold text-foreground">{row.name}</td>
                      <td className="py-4 px-4 text-muted-foreground">{row.field}</td>
                      <td className="py-4 px-4 text-muted-foreground">{row.cause}</td>
                      <td className="py-4 px-4 text-muted-foreground">{row.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Planets;
