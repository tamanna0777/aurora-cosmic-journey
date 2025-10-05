import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Hand, Eye, Zap } from "lucide-react";

const Game = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Aurora Nexus Game
          </h1>
          <p className="text-xl text-muted-foreground">
            Embark on an interactive journey through auroras across the universe
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Game Area */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-background via-card to-background flex items-center justify-center relative">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center animate-pulse-glow">
                    <Zap className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-2xl font-heading mb-4">Unity WebGL Game</p>
                  <p className="text-muted-foreground mb-6">
                    The full Aurora Nexus game will be embedded here using Unity WebGL.
                  </p>
                  <Button variant="hero" size="lg">
                    Launch Full Experience
                  </Button>
                </div>
              </div>
            </Card>

            {/* Game Description */}
            <Card className="mt-4 bg-card border-border p-6">
              <h3 className="font-heading text-xl font-semibold mb-3">About the Game</h3>
              <p className="text-muted-foreground mb-4">
                Experience the Aurora Nexus journey starting from your location on Earth. Fly to the North or South Pole, 
                set up camp by a frozen river, and witness the breathtaking northern lights. Learn how auroras form through 
                interactive storytelling, then launch rockets to explore auroras on distant planets like Jupiter, Saturn, and Neptune.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Educational</span>
                <span className="px-3 py-1 bg-aurora-purple/20 text-aurora-purple rounded-full text-sm">3D Exploration</span>
                <span className="px-3 py-1 bg-aurora-pink/20 text-aurora-pink rounded-full text-sm">Interactive</span>
              </div>
            </Card>
          </div>

          {/* Controls Panel */}
          <div className="space-y-4">
            <Card className="bg-card border-border p-6">
              <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                <Hand className="w-5 h-5 text-primary" />
                Game Controls
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-2">Movement</p>
                  <div className="grid grid-cols-3 gap-2 w-32 mx-auto mb-2">
                    <div />
                    <Button variant="outline" size="icon" className="pointer-events-none">
                      <ArrowUp className="w-4 h-4" />
                    </Button>
                    <div />
                    <Button variant="outline" size="icon" className="pointer-events-none">
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="pointer-events-none">
                      <ArrowDown className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="pointer-events-none">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">Arrow Keys / WASD</p>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Interact</span>
                      <span className="font-mono bg-muted px-2 py-0.5 rounded">E</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Jump</span>
                      <span className="font-mono bg-muted px-2 py-0.5 rounded">Space</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rotate Camera</span>
                      <span className="font-mono bg-muted px-2 py-0.5 rounded">Mouse</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Zoom</span>
                      <span className="font-mono bg-muted px-2 py-0.5 rounded">Scroll</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-aurora-purple" />
                Game Features
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>360° aurora viewing experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Interactive educational pop-ups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Planetary aurora exploration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Historical timeline integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Real-time space weather data</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
