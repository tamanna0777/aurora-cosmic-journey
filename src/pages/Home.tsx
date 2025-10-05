import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Gamepad2, BookOpen, Globe, Sparkles } from "lucide-react";
import heroAurora from "@/assets/hero-aurora.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroAurora})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6 animate-float">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-gradient">
              Aurora Nexus
            </h1>
            <Sparkles className="w-8 h-8 text-aurora-pink" />
          </div>
          
          <p className="text-xl md:text-3xl text-muted-foreground mb-12 font-light">
            Explore. Learn. Experience the Universe.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/game">
              <Button variant="hero" size="lg" className="group">
                <Gamepad2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Play the Game
              </Button>
            </Link>
            
            <Link to="/learn">
              <Button variant="cosmic" size="lg" className="group">
                <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Learn About Auroras
              </Button>
            </Link>
            
            <Link to="/planets">
              <Button variant="secondary" size="lg" className="group">
                <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Explore Planets
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Discover the Magic of Auroras
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Gamepad2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3">Interactive Gaming</h3>
              <p className="text-muted-foreground">
                Journey from Earth to distant planets, experiencing auroras in stunning 3D environments with intuitive controls.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:border-aurora-purple/50 transition-all hover:shadow-lg hover:shadow-aurora-purple/20">
              <div className="w-12 h-12 bg-aurora-purple/20 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-aurora-purple" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3">Educational Content</h3>
              <p className="text-muted-foreground">
                Learn about solar flares, geomagnetic storms, and the science behind auroras through interactive storytelling.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:border-aurora-pink/50 transition-all hover:shadow-lg hover:shadow-aurora-pink/20">
              <div className="w-12 h-12 bg-aurora-pink/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-aurora-pink" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3">Planetary Exploration</h3>
              <p className="text-muted-foreground">
                Discover unique auroras on Jupiter, Saturn, Neptune, and more. Compare planetary phenomena across the solar system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
