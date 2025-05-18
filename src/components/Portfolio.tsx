
import { useState } from "react";
import { 
  Code, 
  Eye, 
  Database, 
  GitBranch, 
  Brain 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filters = [
    { id: "all", label: "All Projects" },
    { id: "embedded", label: "Embedded Systems" },
    { id: "vision", label: "Computer Vision" },
    { id: "ml", label: "Machine Learning" },
    { id: "hardware", label: "Hardware" },
  ];
  
  const projects = [
    {
      id: 1,
      title: "Gesture-Controlled Device",
      description: "Using STM32 & MPU6050 for hand gesture recognition and device control",
      tech: ["STM32", "MPU6050", "C++", "Embedded Systems"],
      category: ["embedded", "hardware"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Automated Indoor Plant Irrigation System",
      description: "Smart irrigation system with moisture sensors and automated watering schedules",
      tech: ["Arduino", "IoT", "Sensors", "Automation"],
      category: ["embedded", "hardware"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Deepfake Detection System",
      description: "AI-based solution to identify manipulated video content using facial analysis",
      tech: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
      category: ["vision", "ml"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Rock Fragment Analysis Software",
      description: "Computer vision system for analyzing rock fragment sizes in mining operations",
      tech: ["Python", "OpenCV", "Image Processing"],
      category: ["vision"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "AI-Powered Sports Celebrity Classification",
      description: "Machine learning model to identify sports personalities from images",
      tech: ["Python", "TensorFlow", "CNN", "Transfer Learning"],
      category: ["vision", "ml"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "TASAC Temperature Control System",
      description: "Intelligent temperature control system for batch chemical reactors using reinforcement learning",
      tech: ["Python", "Reinforcement Learning", "Control Systems"],
      category: ["ml", "embedded"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Stock Price Forecasting with LSTM",
      description: "Deep learning approach to predict stock market trends using LSTM networks",
      tech: ["Python", "Keras", "LSTM", "Time Series Analysis"],
      category: ["ml"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Netflix Dataset Analysis",
      description: "Comprehensive data analysis of Netflix content library with interactive visualizations",
      tech: ["Python", "Pandas", "Data Visualization", "Statistical Analysis"],
      category: ["ml"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="portfolio" className="section bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h6 className="text-primary font-semibold mb-2">PORTFOLIO</h6>
          <h2 className="section-title">Digital Product Showcases</h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
            Explore my projects across embedded systems, computer vision, and machine learning
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="rounded-full"
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden card-hover group border">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <div className="flex gap-2">
                    <Button size="icon" variant="secondary" className="rounded-full h-9 w-9">
                      <GitBranch size={16} />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full h-9 w-9">
                      <Eye size={16} />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="outline" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="font-normal">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
