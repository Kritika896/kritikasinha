
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate subscription
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "You're now subscribed to my newsletter.",
      });
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#timeline" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-2">Subscribe To Get Latest Update From Us</h2>
            <p className="text-muted-foreground mb-6">
              Stay up to date with my latest projects, articles, and tech insights
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" disabled={isSubscribing}>
                {isSubscribing ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                    Subscribing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Subscribe <Mail size={16} />
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Embedded Systems
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Computer Vision & AI
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Data Analysis
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    IoT Applications
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">Email:</span>
                  <a href="mailto:kritika.bengaluru@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    kritika.bengaluru@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">Phone:</span>
                  <a href="tel:+919142134173" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 9142134173
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="font-display font-bold text-xl">
              <span className="tech-gradient-text">Kritika</span> Sinha
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Kritika Sinha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
