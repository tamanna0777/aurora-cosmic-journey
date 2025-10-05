import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Zap, Globe2, Sparkles, Video, BookOpen } from "lucide-react";

const Learn = () => {
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

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Learn About Auroras
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the fascinating science behind one of nature's most beautiful phenomena
          </p>
        </div>

        {/* 360° Experience Section */}
        <Card className="mb-12 overflow-hidden border-primary/20">
          <div className="aspect-video bg-gradient-to-br from-background via-card to-background flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-aurora-purple/10 to-aurora-pink/10 animate-aurora" />
            <div className="relative z-10 text-center p-8">
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-primary animate-pulse" />
              <h3 className="font-heading text-3xl font-semibold mb-3">Interactive 360° Aurora Experience</h3>
              <p className="text-muted-foreground mb-6">
                Immerse yourself in a fully interactive aurora visualization
              </p>
              <Button variant="hero" size="lg">
                Launch 360° Viewer
              </Button>
            </div>
          </div>
        </Card>

        {/* Educational Topics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all p-6 group"
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

        {/* How Auroras Form */}
        <Card className="bg-card border-border p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="font-heading text-3xl font-bold">How Do Auroras Form?</h2>
          </div>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-3">Step 1: Solar Wind</h3>
                <p className="text-muted-foreground">
                  The Sun constantly emits a stream of charged particles called the solar wind. During solar flares 
                  and coronal mass ejections (CMEs), this flow intensifies dramatically.
                </p>
              </div>
              
              <div>
                <h3 className="font-heading text-xl font-semibold mb-3">Step 2: Magnetic Field</h3>
                <p className="text-muted-foreground">
                  Earth's magnetic field acts as a shield, deflecting most solar particles. However, some particles 
                  get trapped and funnel toward the magnetic poles.
                </p>
              </div>
              
              <div>
                <h3 className="font-heading text-xl font-semibold mb-3">Step 3: Atmospheric Collision</h3>
                <p className="text-muted-foreground">
                  When these charged particles collide with oxygen and nitrogen molecules in Earth's upper atmosphere, 
                  they transfer energy, causing the gases to emit light.
                </p>
              </div>
              
              <div>
                <h3 className="font-heading text-xl font-semibold mb-3">Step 4: Light Show</h3>
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
          <Card className="bg-card border-border overflow-hidden group">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-aurora-purple/20 flex items-center justify-center">
              <Video className="w-16 h-16 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold mb-2">Aurora Formation Explained</h3>
              <p className="text-muted-foreground mb-4">
                Watch an animated explanation of how solar particles create the beautiful aurora displays.
              </p>
              <Button variant="outline">Watch Video</Button>
            </div>
          </Card>

          <Card className="bg-card border-border overflow-hidden group">
            <div className="aspect-video bg-gradient-to-br from-aurora-purple/20 to-aurora-pink/20 flex items-center justify-center">
              <Video className="w-16 h-16 text-aurora-purple group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold mb-2">Space Weather Impact</h3>
              <p className="text-muted-foreground mb-4">
                Discover how solar storms affect satellites, power grids, and communications on Earth.
              </p>
              <Button variant="outline">Watch Video</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Learn;
