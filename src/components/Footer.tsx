
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Footer = () => {
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
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
