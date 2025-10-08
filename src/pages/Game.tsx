import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Hand, Eye, Zap, Play, RotateCcw, Trophy } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  speed: number;
  size: number;
}

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [playerX, setPlayerX] = useState(50);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const gameLoopRef = useRef<number>();
  const canvasRef = useRef<HTMLDivElement>(null);

  const auroraColors = [
    "bg-aurora-green",
    "bg-aurora-purple", 
    "bg-aurora-pink",
    "bg-aurora-blue",
  ];

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setPlayerX(50);
    setParticles([]);
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setPlayerX(50);
    setParticles([]);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted || gameOver) return;
      
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        setPlayerX(prev => Math.max(5, prev - 3));
      } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        setPlayerX(prev => Math.min(85, prev + 3));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const difficultyMultiplier = Math.min(1 + score / 500, 2.5);
    const spawnRate = Math.max(400, 800 - score / 2);

    const spawnParticle = () => {
      const newParticle: Particle = {
        id: Date.now() + Math.random(),
        x: 5 + Math.random() * 80,
        y: -8,
        color: auroraColors[Math.floor(Math.random() * auroraColors.length)],
        speed: (0.8 + Math.random() * 1.2) * difficultyMultiplier,
        size: 2.5 + Math.random() * 1.5,
      };
      setParticles(prev => [...prev, newParticle]);
    };

    const spawnInterval = setInterval(spawnParticle, spawnRate);

    const gameLoop = () => {
      setParticles(prev => {
        const updated = prev
          .map(particle => ({
            ...particle,
            y: particle.y + particle.speed,
          }))
          .filter(particle => {
            // Better collision detection
            const paddleWidth = 10;
            const particleRadius = particle.size / 2;
            
            if (particle.y >= 88 && particle.y <= 96) {
              const distanceFromPaddle = Math.abs(particle.x - playerX);
              if (distanceFromPaddle < paddleWidth + particleRadius) {
                setScore(s => s + 10);
                return false;
              }
            }
            
            // Game over if particle reaches bottom
            if (particle.y > 102) {
              setGameOver(true);
              return false;
            }
            return true;
          });
        return updated;
      });

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoopRef.current = requestAnimationFrame(gameLoop);

    return () => {
      clearInterval(spawnInterval);
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };
  }, [gameStarted, gameOver, playerX, score]);

  useEffect(() => {
    if (gameOver && score > highScore) {
      setHighScore(score);
    }
  }, [gameOver, score, highScore]);

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
          {/* Mini Game Area */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="bg-card border-border overflow-hidden">
              <div className="bg-gradient-to-b from-background via-card to-background p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold flex items-center gap-2">
                      <Zap className="w-6 h-6 text-aurora-green" />
                      Aurora Catcher
                    </h3>
                    <p className="text-sm text-muted-foreground">Catch falling aurora particles!</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                      <Trophy className="w-5 h-5" />
                      {score}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      High Score: {highScore}
                    </div>
                  </div>
                </div>

                <div 
                  ref={canvasRef}
                  className="relative bg-gradient-to-b from-space-dark to-space-darker rounded-lg overflow-hidden border-2 border-primary/20"
                  style={{ height: "clamp(400px, 50vh, 600px)" }}
                >
                  {!gameStarted ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 mx-auto bg-aurora-green/20 rounded-full flex items-center justify-center animate-pulse-glow">
                          <Play className="w-10 h-10 text-aurora-green" />
                        </div>
                        <h4 className="font-heading text-2xl font-bold">Ready to Play?</h4>
                        <p className="text-muted-foreground max-w-sm">
                          Use Arrow Keys or A/D to move left and right. Catch the falling aurora particles!
                        </p>
                        <Button onClick={startGame} variant="hero" size="lg" className="gap-2">
                          <Play className="w-5 h-5" />
                          Start Game
                        </Button>
                      </div>
                    </div>
                  ) : gameOver ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 mx-auto bg-aurora-purple/20 rounded-full flex items-center justify-center">
                          <Trophy className="w-10 h-10 text-aurora-purple" />
                        </div>
                        <h4 className="font-heading text-2xl font-bold">Game Over!</h4>
                        <p className="text-xl">Score: <span className="text-primary font-bold">{score}</span></p>
                        {score === highScore && score > 0 && (
                          <p className="text-aurora-green font-semibold">🎉 New High Score!</p>
                        )}
                        <Button onClick={resetGame} variant="hero" size="lg" className="gap-2">
                          <RotateCcw className="w-5 h-5" />
                          Play Again
                        </Button>
                      </div>
                    </div>
                  ) : null}

                  {/* Particles */}
                  {particles.map(particle => (
                    <div
                      key={particle.id}
                      className={`absolute rounded-full ${particle.color} animate-pulse-glow`}
                      style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}rem`,
                        height: `${particle.size}rem`,
                        boxShadow: "0 0 25px currentColor",
                        transition: "top 0.016s linear, left 0.016s linear",
                      }}
                    />
                  ))}

                  {/* Player */}
                  {gameStarted && !gameOver && (
                    <div
                      className="absolute bottom-4 transition-all duration-75 ease-linear"
                      style={{
                        left: `${playerX}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div className="w-16 sm:w-20 h-3 sm:h-4 bg-gradient-to-r from-aurora-green via-aurora-purple to-aurora-pink rounded-full shadow-lg shadow-aurora-green/50 animate-pulse-glow" />
                    </div>
                  )}

                  {/* Twinkling stars background */}
                  <div className="absolute inset-0 stars-container pointer-events-none" />
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline">Arrow Left / </span>
                    <span>A - Move Left</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline">Arrow Right / </span>
                    <span>D - Move Right</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Full Game Description */}
            <Card className="bg-card border-border p-6">
              <h3 className="font-heading text-xl font-semibold mb-3">About Aurora Nexus</h3>
              <p className="text-muted-foreground mb-4">
                Experience the full Aurora Nexus journey starting from your location on Earth. Fly to the North or South Pole, 
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

          {/* Info Panel */}
          <div className="space-y-4">
            <Card className="bg-card border-border p-6">
              <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                <Hand className="w-5 h-5 text-primary" />
                How to Play
              </h3>
              
              <div className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-aurora-green mt-1">1.</span>
                    <span>Click "Start Game" to begin</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-aurora-purple mt-1">2.</span>
                    <span>Use Arrow Keys or A/D to move left and right</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-aurora-pink mt-1">3.</span>
                    <span>Catch falling aurora particles with your paddle</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-aurora-blue mt-1">4.</span>
                    <span>Don't let any particles reach the bottom!</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">5.</span>
                    <span>Each particle = 10 points. Beat your high score!</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-aurora-purple" />
                Full Game Features
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

            <Card className="bg-gradient-to-br from-aurora-green/10 to-aurora-purple/10 border-aurora-green/20 p-4 sm:p-6">
              <h4 className="font-heading font-semibold mb-2 text-aurora-green">🌟 Pro Tips</h4>
              <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <p>• Particles fall faster as your score increases!</p>
                <p>• The spawn rate increases with difficulty</p>
                <p>• Position yourself in advance to catch particles</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
