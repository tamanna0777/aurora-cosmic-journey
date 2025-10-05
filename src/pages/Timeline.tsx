import { Card } from "@/components/ui/card";
import { Clock, Zap, AlertTriangle, Sparkles } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      year: "1859",
      title: "Carrington Event",
      description: "The most powerful geomagnetic storm ever recorded. Telegraph systems worldwide failed, and auroras were visible as far south as the Caribbean.",
      severity: "Extreme",
      icon: AlertTriangle,
      color: "text-destructive",
    },
    {
      year: "1921",
      title: "New York Railroad Storm",
      description: "A severe geomagnetic storm disrupted telegraph and telephone communications across the eastern United States and Europe.",
      severity: "Severe",
      icon: Zap,
      color: "text-aurora-pink",
    },
    {
      year: "1989",
      title: "Quebec Blackout",
      description: "A geomagnetic storm caused a nine-hour power outage affecting 6 million people in Quebec, Canada. Satellites were damaged and auroras were seen as far south as Texas.",
      severity: "Major",
      icon: AlertTriangle,
      color: "text-aurora-purple",
    },
    {
      year: "2003",
      title: "Halloween Storms",
      description: "A series of solar storms in October-November affected satellites, power grids, and aviation. Auroras were visible across much of the United States.",
      severity: "Severe",
      icon: Zap,
      color: "text-aurora-pink",
    },
    {
      year: "2012",
      title: "July 2012 Solar Storm",
      description: "A powerful CME narrowly missed Earth. If it had hit, it could have caused trillions in damage to modern infrastructure.",
      severity: "Major",
      icon: AlertTriangle,
      color: "text-aurora-purple",
    },
    {
      year: "2015",
      title: "St. Patrick's Day Storm",
      description: "A strong geomagnetic storm caused power grid fluctuations and beautiful auroras visible across northern United States and Europe.",
      severity: "Strong",
      icon: Sparkles,
      color: "text-primary",
    },
    {
      year: "2024",
      title: "May 2024 Storm",
      description: "One of the strongest storms in recent years, with auroras visible across multiple continents and minor impacts on GPS and communications.",
      severity: "Strong",
      icon: Sparkles,
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Aurora Timeline
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the history of significant aurora events and solar storms throughout history
          </p>
        </div>

        {/* Kp-Index Explanation */}
        <Card className="mb-12 bg-card border-border p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-2">Understanding the Kp-Index</h2>
              <p className="text-muted-foreground mb-4">
                The Kp-index is a scale from 0 to 9 that measures geomagnetic storm intensity. Higher values indicate 
                stronger storms and auroras visible at lower latitudes.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                <div className="text-center p-2 bg-muted rounded">
                  <div className="font-bold text-primary">Kp 0-2</div>
                  <div className="text-xs text-muted-foreground">Quiet</div>
                </div>
                <div className="text-center p-2 bg-muted rounded">
                  <div className="font-bold text-primary">Kp 3-4</div>
                  <div className="text-xs text-muted-foreground">Active</div>
                </div>
                <div className="text-center p-2 bg-muted rounded">
                  <div className="font-bold text-aurora-purple">Kp 5-6</div>
                  <div className="text-xs text-muted-foreground">Minor</div>
                </div>
                <div className="text-center p-2 bg-muted rounded">
                  <div className="font-bold text-aurora-pink">Kp 7-8</div>
                  <div className="text-xs text-muted-foreground">Strong</div>
                </div>
                <div className="text-center p-2 bg-muted rounded">
                  <div className="font-bold text-destructive">Kp 9</div>
                  <div className="text-xs text-muted-foreground">Severe</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-aurora-purple to-aurora-pink" />

          {/* Events */}
          <div className="space-y-8">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-card border-2 border-primary rounded-full flex items-center justify-center z-10">
                    <Icon className={`w-4 h-4 ${event.color}`} />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1" />

                  {/* Event card */}
                  <Card
                    className={`flex-1 ml-16 md:ml-0 bg-card border-border p-6 hover:border-primary/50 transition-all ${
                      isEven ? "" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-mono text-muted-foreground">{event.year}</span>
                        </div>
                        <h3 className="font-heading text-xl font-bold">{event.title}</h3>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          event.severity === "Extreme"
                            ? "bg-destructive/20 text-destructive"
                            : event.severity === "Severe"
                            ? "bg-aurora-pink/20 text-aurora-pink"
                            : event.severity === "Major"
                            ? "bg-aurora-purple/20 text-aurora-purple"
                            : "bg-primary/20 text-primary"
                        }`}
                      >
                        {event.severity}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact on Modern Technology */}
        <Card className="mt-12 bg-card border-border p-8">
          <h2 className="font-heading text-3xl font-bold mb-6">Impact on Modern Technology</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-primary">Affected Systems</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Power grids and transformers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Satellite communications and GPS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>High-frequency radio communications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Aviation navigation systems</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-aurora-purple">Monitoring & Prediction</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-aurora-purple mt-1">•</span>
                  <span>NOAA Space Weather Prediction Center</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-aurora-purple mt-1">•</span>
                  <span>Solar observation satellites (SOHO, SDO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-aurora-purple mt-1">•</span>
                  <span>Real-time magnetometer networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-aurora-purple mt-1">•</span>
                  <span>Aurora forecasting models</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Timeline;
