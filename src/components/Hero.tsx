
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Hello, I'm <span className="tech-gradient-text">Kritika Sinha</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              Embedded Systems & AI Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mt-2">
              Specializing in embedded systems, computer vision, AI, and tech-driven problem solving
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2 group">
              <a href="#contact">
                Get in Touch <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#portfolio">View My Work</a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span> 
              Available for projects
            </span>
            <span>•</span>
            <span>Based in Bengaluru</span>
          </div>
        </div>
        
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="/lovable-uploads/6308e8e5-408c-4b25-9b13-ec63e80aadb9.png"
              alt="Kritika Sinha" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-radial from-indigo-300/30 to-transparent rounded-full blur-3xl -z-10"></div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-300/20 rounded-full blur-xl"></div>
          <div className="absolute top-10 -left-10 w-20 h-20 bg-purple-400/30 rounded-full blur-lg"></div>
          <div className="absolute -top-5 right-10 w-10 h-10 border-2 border-tech-teal rounded-full"></div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="wavy-decoration -top-20 right-0">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 80C60 60 90 120 110 100C130 80 160 140 180 120" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round"/>
          <path d="M40 100C60 80 90 140 110 120C130 100 160 160 180 140" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="wavy-decoration bottom-0 left-0 rotate-180">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 80C60 60 90 120 110 100C130 80 160 140 180 120" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round"/>
          <path d="M40 100C60 80 90 140 110 120C130 100 160 160 180 140" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      
      <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none"></div>
    </section>
  );
};

export default Hero;
