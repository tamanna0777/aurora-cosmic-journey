import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Have questions, feedback, or suggestions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <Card className="md:col-span-2 bg-card border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold">Send Us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full group">
                <Send className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Community */}
          <div className="space-y-6">
            <Card className="bg-card border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="font-heading text-xl font-bold">Email Us</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                For general inquiries, partnerships, or support:
              </p>
              <a
                href="mailto:contact@auroranexus.com"
                className="text-primary hover:text-aurora-pink transition-colors"
              >
                contact@auroranexus.com
              </a>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="font-heading text-xl font-bold mb-4">Feedback Categories</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-primary">Bug Reports</span>
                  <p className="text-muted-foreground">Help us improve by reporting issues</p>
                </div>
                <div>
                  <span className="font-semibold text-aurora-purple">Feature Requests</span>
                  <p className="text-muted-foreground">Suggest new features or improvements</p>
                </div>
                <div>
                  <span className="font-semibold text-aurora-pink">Educational Content</span>
                  <p className="text-muted-foreground">Questions about aurora science</p>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Partnerships</span>
                  <p className="text-muted-foreground">Collaboration opportunities</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-aurora-purple/10 border-primary/20 p-6">
              <h3 className="font-heading text-xl font-bold mb-3">Join Our Community</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Stay updated with the latest aurora events, game updates, and space science discoveries.
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full">Discord Community</Button>
                <Button variant="outline" className="w-full">Telegram Channel</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
