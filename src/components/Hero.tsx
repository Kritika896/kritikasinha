
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">Kritika Sinha</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-100">
              Embedded Systems & AI Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mt-2">
              Specializing in embedded systems, computer vision, AI, and tech-driven problem solving
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2 group bg-white text-blue-700 hover:bg-gray-100">
              <a href="#contact">
                Get in Touch <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <a href="#portfolio">View My Work</a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-200">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span> 
              Available for projects
            </span>
            <span className="text-gray-300">•</span>
            <span>Based in Bengaluru</span>
          </div>
          
          {/* Social Links - Removed phone and email, kept only LinkedIn and GitHub */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://linkedin.com/in/kritika-sinha" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Kritika896" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="https://i.postimg.cc/jdWjmb60/Whats-App-Image-2025-05-18-at-15-54-56-a3674730.jpg"
              alt="Kritika Sinha" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-radial from-indigo-300/30 to-transparent rounded-full blur-3xl -z-10"></div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-300/20 rounded-full blur-xl"></div>
          <div className="absolute top-10 -left-10 w-20 h-20 bg-purple-400/30 rounded-full blur-lg"></div>
          <div className="absolute -top-5 right-10 w-10 h-10 border-2 border-cyan-300 rounded-full"></div>
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
