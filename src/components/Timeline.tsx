
import { 
  Briefcase, 
  Calendar, 
  MapPin 
} from "lucide-react";

const Timeline = () => {
  const experiences = [
    {
      title: "Embedded Systems and Vision AI Intern",
      company: "Digitoad Technologies",
      location: "Bengaluru",
      period: "Feb 2025 – Present",
      description: [
        "Developed and tested embedded systems using STM32 microcontrollers for real-time data acquisition and control.",
        "Integrated computer vision capabilities using OpenCV and custom ML models to enhance embedded intelligence.",
        "Collaborated on cross-functional projects involving sensor integration, signal processing, and hardware interfacing."
      ]
    },
    {
      title: "Summer Research Intern – Image Processing & Rock Fragment Analysis",
      company: "Indian Institute of Technology (ISM)",
      location: "Dhanbad",
      period: "May 2024 – July 2024",
      description: [
        "Conducted advanced research on rock fragment size analysis using computer vision and machine learning techniques.",
        "Utilized OpenCV, contour detection, and shape analysis to automate the segmentation and measurement of white rock fragments.",
        "Developed a software pipeline for calibration, area, volume, and mass estimation from images, contributing to efficiency in mining operations.",
        "Created a robust image preprocessing method to enhance contour visibility under varying lighting and background conditions."
      ]
    },
    {
      title: "Corporate Alumni Relations (CAR) Head",
      company: "E-Cell Manipal",
      location: "Manipal",
      period: "Sept 2023 – Present",
      description: [
        "Led alumni outreach and corporate relations for one of the largest student-run entrepreneurship cells.",
        "Initiated targeted engagement strategies by segmenting contacts (startups, VCs, alumni) and maintained strong professional ties through personalized communication.",
        "Organized and executed high-impact events like the Manipal Entrepreneurship Summit (MES), including alumni networking sessions, virtual meetups, and exclusive campus tours.",
        "Improved data management using Notion and Excel for efficient tracking and communication, while mentoring junior executives to build sustainable internal systems."
      ]
    }
  ];

  return (
    <section id="timeline" className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h6 className="text-primary font-semibold mb-2">EXPERIENCE</h6>
          <h2 className="section-title">My Working Timeline</h2>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-border"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background z-10"></div>
                
                {/* Content wrapper */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <div className="bg-card rounded-lg p-6 shadow-md card-hover">
                    <h3 className="text-xl font-bold mb-1">
                      {experience.title}
                    </h3>
                    <h4 className="text-lg font-medium text-primary mb-4">
                      {experience.company}
                    </h4>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-baseline gap-2">
                          <span className="h-1.5 w-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty div for layout in desktop */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
