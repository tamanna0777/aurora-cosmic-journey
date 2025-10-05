import { Card } from "@/components/ui/card";
import { Rocket, Target, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-gradient">
            About Aurora Nexus
          </h1>
          <p className="text-xl text-muted-foreground">
            Bringing the wonders of space science to life through interactive storytelling
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-8 bg-card border-border p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold mb-3">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                Aurora Nexus is dedicated to making space science accessible, engaging, and interactive for everyone. 
                We combine cutting-edge educational content with immersive gaming experiences to help students, 
                educators, and space enthusiasts understand the fascinating phenomena of auroras across our solar system.
              </p>
              <p className="text-muted-foreground">
                Through our interactive platform, users can explore how auroras form, understand space weather impacts, 
                and virtually travel to distant planets to witness these spectacular light shows firsthand.
              </p>
            </div>
          </div>
        </Card>

        {/* What We Offer */}
        <Card className="mb-8 bg-card border-border p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-aurora-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Rocket className="w-6 h-6 text-aurora-purple" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">What We Offer</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Interactive Gaming Experience</h3>
                  <p className="text-muted-foreground">
                    Explore auroras through our Unity-powered 3D game, featuring realistic environments, 
                    educational storytelling layers, and planetary exploration missions.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Educational Content</h3>
                  <p className="text-muted-foreground">
                    Learn about solar flares, CMEs, geomagnetic storms, and how space weather affects Earth 
                    through engaging visualizations and clear explanations.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Planetary Comparison</h3>
                  <p className="text-muted-foreground">
                    Discover how auroras manifest differently on Jupiter, Saturn, Neptune, and other planets, 
                    understanding the unique atmospheric and magnetic conditions of each world.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Historical Perspective</h3>
                  <p className="text-muted-foreground">
                    Explore significant aurora events throughout history, from the Carrington Event to modern 
                    solar storms and their impact on technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Target Audience */}
        <Card className="mb-8 bg-card border-border p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-aurora-pink/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-aurora-pink" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold mb-4">Who Is This For?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Students (Ages 8-14)</h3>
                  <p className="text-muted-foreground text-sm">
                    Engaging way to learn about space science, physics, and planetary phenomena through interactive gameplay.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Educators</h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive teaching resource for astronomy, physics, and earth science curricula.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Space Enthusiasts</h3>
                  <p className="text-muted-foreground text-sm">
                    Deep dive into aurora science with detailed planetary comparisons and historical data.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Curious Minds</h3>
                  <p className="text-muted-foreground text-sm">
                    Anyone fascinated by natural phenomena and wanting to understand the science behind auroras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Acknowledgments */}
        <Card className="bg-card border-border p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold mb-4">Acknowledgments</h2>
              <p className="text-muted-foreground mb-4">
                Aurora Nexus would not be possible without the incredible data and research from organizations 
                dedicated to space science and exploration:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>NASA for planetary data and aurora research</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>NOAA Space Weather Prediction Center for real-time data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>ESA for European space research contributions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Universities and research institutions worldwide</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
