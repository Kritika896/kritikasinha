
import { useState } from "react";
import { 
  Code, 
  Eye, 
  Database, 
  GitBranch, 
  Brain,
  Github,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
      id: 6,
      title: "Stock Price Forecasting with LSTM",
      description: "Deep learning approach to predict stock market trends using LSTM networks",
      longDescription: "Developed a sophisticated stock price prediction model leveraging Long Short-Term Memory (LSTM) neural networks to analyze historical time series data. The system processes market data to identify patterns and predict future price movements with remarkable accuracy, providing valuable insights for investment decisions.",
      tech: ["Python", "Keras", "LSTM", "Time Series Analysis", "Pandas", "NumPy", "Streamlit"],
      category: ["ml"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      githubLink: "https://github.com/Kritika896/Stock_Market_Trend_Predictor",
      projectLink: "https://stockmarkettrendpredictor-8wziu9hdvxckzz2vyyzb9x.streamlit.app/"
    },
    {
      id: 9,
      title: "OncoBioClassifier",
      description: "ML-powered breast cancer prediction system with advanced diagnostic capabilities",
      longDescription: "OncoBioClassifier is an advanced machine learning solution designed to analyze breast tissue data for early cancer detection. Using a sophisticated algorithm trained on extensive medical datasets, this tool provides healthcare professionals with accurate diagnostic predictions to aid in early intervention and treatment planning.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Matplotlib", "Seaborn"],
      category: ["ml"],
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=800&q=80",
      githubLink: "https://github.com/Kritika896/Streamlit-cancer-predict",
      projectLink: "https://cancer-predict-mcm25uampcrcap6kvx8kky.streamlit.app/"
    },
    {
      id: 3,
      title: "Deepfake Detection System",
      description: "AI-based solution to identify manipulated video content using facial analysis",
      longDescription: "This cutting-edge system employs deep learning and computer vision techniques to detect synthetic media manipulations in video content. By analyzing facial micro-expressions, temporal inconsistencies, and visual artifacts, the system can effectively distinguish between authentic and artificially generated content with high accuracy, helping combat misinformation.",
      tech: ["Python", "OpenCV", "TensorFlow", "Deep Learning", "CNN", "Facial Recognition", "Video Processing"],
      category: ["vision", "ml"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      githubLink: "https://github.com/sha-shanks/detectify",
      projectLink: null
    },
    {
      id: 5,
      title: "TASAC Temperature Control System",
      description: "Intelligent temperature control system for batch chemical reactors using reinforcement learning",
      longDescription: "TASAC is an advanced temperature control system designed for batch chemical reactors that leverages cutting-edge reinforcement learning algorithms. The system optimizes temperature regulation in real-time, leading to improved product quality, reduced energy consumption, and enhanced safety in chemical processing environments.",
      tech: ["Python", "Reinforcement Learning", "Control Systems", "PID Control", "Sensor Integration", "Process Automation"],
      category: ["ml", "embedded"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      githubLink: "https://github.com/Kritika896/TASAC",
      projectLink: null
    },
    {
      id: 4,
      title: "Rock Fragment Analysis Software",
      description: "Computer vision system for analyzing rock fragment sizes in mining operations",
      longDescription: "This specialized software utilizes computer vision and image processing techniques to analyze rock fragments in mining operations. By automatically measuring fragment sizes, shapes, and distributions, the system provides valuable data for optimizing crushing operations, reducing energy consumption, and improving production efficiency in mineral processing.",
      tech: ["Python", "OpenCV", "Image Processing", "Contour Detection", "Calibration Algorithms", "Streamlit"],
      category: ["vision"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      githubLink: "https://github.com/Kritika896/Automated-rock-fragment-analysis",
      projectLink: "https://automated-rock-fragment-analysis-n3ti3qcfjefxpwnudxbamm.streamlit.app/"
    },
    {
      id: 8,
      title: "Netflix Dataset Analysis",
      description: "Comprehensive data analysis of Netflix content library with interactive visualizations",
      longDescription: "A detailed analytical exploration of Netflix's content library, examining trends in genre distribution, content production over time, and regional content strategies. The project utilizes advanced data visualization techniques to uncover insights about viewing patterns, content gaps, and strategic content acquisition opportunities.",
      tech: ["Python", "Pandas", "Data Visualization", "Statistical Analysis", "SQL", "Matplotlib", "Seaborn"],
      category: ["ml"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      githubLink: "https://github.com/Kritika896/Netfliz_sql",
      projectLink: null
    },
    {
      id: 1,
      title: "Gesture-Controlled Device",
      description: "Using STM32 & MPU6050 for hand gesture recognition and device control",
      longDescription: "An innovative embedded system that enables intuitive control of electronic devices through hand gestures. Using an STM32 microcontroller and MPU6050 accelerometer/gyroscope, the system captures and processes motion data to recognize specific gestures, which are then translated into device commands. Applications range from contactless human-machine interfaces to assistive technology for individuals with mobility limitations.",
      tech: ["STM32", "MPU6050", "C++", "Embedded Systems", "IMU Sensors", "Gesture Recognition", "Signal Processing"],
      category: ["embedded", "hardware"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      githubLink: "https://github.com/Kritika896/Hand_gesture",
      projectLink: null
    },
    {
      id: 2,
      title: "Automated Indoor Plant Irrigation System",
      description: "Smart irrigation system with moisture sensors and automated watering schedules",
      longDescription: "A comprehensive IoT solution for indoor plant care that combines soil moisture sensing, environmental monitoring, and automated irrigation. The system leverages Arduino microcontrollers and various sensors to maintain optimal soil conditions based on plant-specific requirements, with features including customizable watering schedules, remote monitoring, and water usage optimization.",
      tech: ["Arduino", "IoT", "Sensors", "Automation", "Soil Moisture Sensing", "Motor Control", "Mobile App Integration"],
      category: ["embedded", "hardware"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      githubLink: null,
      projectLink: null
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
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden card-hover group border cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                      <div className="flex gap-2">
                        {project.githubLink && (
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Button size="icon" variant="secondary" className="rounded-full h-9 w-9">
                              <Github size={16} />
                            </Button>
                          </a>
                        )}
                        {project.projectLink && (
                          <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                            <Button size="icon" variant="secondary" className="rounded-full h-9 w-9">
                              <ExternalLink size={16} />
                            </Button>
                          </a>
                        )}
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
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  <DialogDescription className="text-base text-foreground/80">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <div className="relative h-56 md:h-64 w-full mb-6 overflow-hidden rounded-md">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">About the Project</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-sm py-1.5">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 pt-2">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="gap-2">
                            <Github size={16} />
                            View on GitHub
                          </Button>
                        </a>
                      )}
                      {project.projectLink && (
                        <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                          <Button className="gap-2">
                            <ExternalLink size={16} />
                            Live Demo
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

