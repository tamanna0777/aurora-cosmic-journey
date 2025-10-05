import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Zap, Globe2, Sparkles, Video, BookOpen, Play } from "lucide-react";
import auroraBackground from "@/assets/aurora-background.jpg";
import earthAurora from "@/assets/earth-aurora.jpg";
import jupiterAurora from "@/assets/jupiter-aurora.jpg";
import saturnAurora from "@/assets/saturn-aurora.jpg";
import neptuneAurora from "@/assets/neptune-aurora.jpg";
import uranusAurora from "@/assets/uranus-aurora.jpg";
import marsAurora from "@/assets/mars-aurora.jpg";
import venusAurora from "@/assets/venus-aurora.jpg";
import { useEffect, useRef } from "react";

const Learn = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;

    // Create twinkling stars
    const createStars = () => {
      const container = starsRef.current;
      if (!container) return;

      for (let i = 0; i < 80; i++) {
        const star = document.createElement("div");
        star.className = "absolute rounded-full bg-white animate-twinkle";
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(star);
      }
    };

    createStars();
  }, []);

  const topics = [
    {
      icon: Sun,
      title: "Solar Flares & CMEs",
      description: "Learn how the Sun's activity triggers spectacular light shows on Earth and other planets.",
      color: "text-aurora-pink",
      bgColor: "bg-aurora-pink/20",
    },
    {
      icon: Zap,
      title: "Geomagnetic Storms",
      description: "Understand the Kp-index and how geomagnetic storms affect our planet's magnetosphere.",
      color: "text-aurora-purple",
      bgColor: "bg-aurora-purple/20",
    },
    {
      icon: Globe2,
      title: "Planetary Auroras",
      description: "Discover how auroras appear on Jupiter, Saturn, Neptune, and other planets in our solar system.",
      color: "text-primary",
      bgColor: "bg-primary/20",
    },
  ];

  const planetaryAuroras = [
    {
      name: "Earth",
      image: earthAurora,
      auroraType: "Aurora Borealis & Australis",
      color: "Vibrant green, red, purple",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      name: "Jupiter",
      image: jupiterAurora,
      auroraType: "Jovian Aurora",
      color: "Purple-blue ultraviolet",
      gradient: "from-purple-500 to-blue-600",
    },
    {
      name: "Saturn",
      image: saturnAurora,
      auroraType: "Saturnian Aurora",
      color: "Ultraviolet with ring glow",
      gradient: "from-yellow-400 to-amber-500",
    },
    {
      name: "Neptune",
      image: neptuneAurora,
      auroraType: "Neptunian Aurora",
      color: "Dark blue flashes",
      gradient: "from-blue-600 to-indigo-700",
    },
    {
      name: "Uranus",
      image: uranusAurora,
      auroraType: "Uranian Aurora",
      color: "Faint cyan-blue",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      name: "Mars",
      image: marsAurora,
      auroraType: "Martian Aurora",
      color: "Patchy UV spots",
      gradient: "from-red-500 to-orange-600",
    },
    {
      name: "Venus",
      image: venusAurora,
      auroraType: "Venusian Glow",
      color: "Faint UV emission",
      gradient: "from-orange-400 to-yellow-500",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Deep Space Background */}
      <div className="fixed inset-0 space-gradient -z-10" />
      
      {/* Twinkling Stars */}
      <div ref={starsRef} className="fixed inset-0 -z-10" />

      <div className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-gradient">
              Learn About Auroras
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the fascinating science behind one of nature's most beautiful phenomena
            </p>
          </div>

          {/* Interactive 360° Aurora Experience */}
          <Card className="mb-16 overflow-hidden border-primary/30 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-aurora-purple/10 to-aurora-pink/10 animate-aurora" />
            
            {/* Aurora Background Image */}
            <div className="relative h-[600px] overflow-hidden">
              <img
                src={auroraBackground}
                alt="Breathtaking aurora borealis"
                className="w-full h-full object-cover"
              />
              
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              
              {/* Glowing Aurora Effects */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-aurora-purple/20 animate-pulse-glow" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
                <Sparkles className="w-20 h-20 mb-6 text-primary animate-float" />
                <h2 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-gradient drop-shadow-lg">
                  Interactive 360° Aurora Experience
                </h2>
                <p className="text-xl text-foreground/90 mb-8 max-w-2xl drop-shadow-md">
                  Immerse yourself in a fully interactive aurora visualization
                </p>
                <Button variant="hero" size="lg" className="group-hover:scale-110 transition-transform shadow-2xl">
                  <Play className="w-5 h-5" />
                  Launch 360° Viewer
                </Button>
              </div>
            </div>
          </Card>

          {/* Educational Topics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all p-6 group hover:scale-105 hover:shadow-2xl"
                >
                  <div className={`w-12 h-12 ${topic.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${topic.color}`} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{topic.title}</h3>
                  <p className="text-muted-foreground mb-4">{topic.description}</p>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary transition-colors">
                    Learn More →
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* Planetary Aurora Gallery */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-gradient">
                Auroras Across the Solar System
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Witness the dancing lights on different planets, each with unique colors and patterns
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {planetaryAuroras.map((planet, index) => (
                <Card
                  key={index}
                  className="group relative bg-card/30 backdrop-blur-md border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Aurora Glow Effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 cosmic-glow -z-10" />
                  
                  {/* Planet Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={planet.image}
                      alt={`${planet.name} aurora`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${planet.gradient} opacity-20 group-hover:opacity-40 transition-opacity`} />
                    
                    {/* Planet Name Badge */}
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                      <h3 className="font-heading text-xl font-bold text-gradient">
                        {planet.name}
                      </h3>
                    </div>
                  </div>

                  {/* Planet Info */}
                  <div className="p-6 space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-primary">Aurora Type:</span>
                      <p className="text-muted-foreground">{planet.auroraType}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-semibold text-aurora-purple">Color:</span>
                      <p className="text-muted-foreground">{planet.color}</p>
                    </div>

                    <Button 
                      variant="hero" 
                      className="w-full group-hover:bg-primary/40 transition-all"
                    >
                      <Sparkles className="w-4 h-4" />
                      View in 360°
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* How Auroras Form */}
          <Card className="bg-card/30 backdrop-blur-md border-border/50 p-8 mb-8 cosmic-glow">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
              <h2 className="font-heading text-3xl font-bold">How Do Auroras Form?</h2>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-primary/5 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-primary">Step 1: Solar Wind</h3>
                  <p className="text-muted-foreground">
                    The Sun constantly emits a stream of charged particles called the solar wind. During solar flares 
                    and coronal mass ejections (CMEs), this flow intensifies dramatically.
                  </p>
                </div>
                
                <div className="p-6 bg-aurora-purple/5 rounded-lg border border-aurora-purple/20 hover:border-aurora-purple/40 transition-colors">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-aurora-purple">Step 2: Magnetic Field</h3>
                  <p className="text-muted-foreground">
                    Earth's magnetic field acts as a shield, deflecting most solar particles. However, some particles 
                    get trapped and funnel toward the magnetic poles.
                  </p>
                </div>
                
                <div className="p-6 bg-aurora-pink/5 rounded-lg border border-aurora-pink/20 hover:border-aurora-pink/40 transition-colors">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-aurora-pink">Step 3: Atmospheric Collision</h3>
                  <p className="text-muted-foreground">
                    When these charged particles collide with oxygen and nitrogen molecules in Earth's upper atmosphere, 
                    they transfer energy, causing the gases to emit light.
                  </p>
                </div>
                
                <div className="p-6 bg-primary/5 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-primary">Step 4: Light Show</h3>
                  <p className="text-muted-foreground">
                    The result is the stunning aurora borealis (northern lights) and aurora australis (southern lights). 
                    Different gases produce different colors - oxygen creates green and red, while nitrogen produces blue and purple.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Educational Videos */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/30 backdrop-blur-md border-border/50 overflow-hidden group hover:scale-105 transition-all">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-aurora-purple/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 animate-aurora bg-gradient-to-r from-primary/30 via-aurora-purple/30 to-aurora-pink/30" />
                <Video className="w-16 h-16 text-primary group-hover:scale-110 transition-transform relative z-10" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2">Aurora Formation Explained</h3>
                <p className="text-muted-foreground mb-4">
                  Watch an animated explanation of how solar particles create the beautiful aurora displays.
                </p>
                <Button variant="outline" className="w-full">
                  <Play className="w-4 h-4" />
                  Watch Video
                </Button>
              </div>
            </Card>

            <Card className="bg-card/30 backdrop-blur-md border-border/50 overflow-hidden group hover:scale-105 transition-all">
              <div className="aspect-video bg-gradient-to-br from-aurora-purple/20 to-aurora-pink/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 animate-aurora bg-gradient-to-r from-aurora-purple/30 via-aurora-pink/30 to-primary/30" />
                <Video className="w-16 h-16 text-aurora-purple group-hover:scale-110 transition-transform relative z-10" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2">Space Weather Impact</h3>
                <p className="text-muted-foreground mb-4">
                  Discover how solar storms affect satellites, power grids, and communications on Earth.
                </p>
                <Button variant="outline" className="w-full">
                  <Play className="w-4 h-4" />
                  Watch Video
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
