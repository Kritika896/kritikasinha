
import { Award, BookOpen, Code, Database, User, Cpu, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      category: "💻 Technical Skills",
      icon: <Code className="h-6 w-6 text-tech-blue" />,
      sections: [
        {
          title: "Languages & Programming",
          items: ["Python", "C/C++", "C#", "R"]
        },
        {
          title: "Frameworks & Tools",
          items: ["TensorFlow", "Keras", "OpenCV", "Scikit-learn", "Mediapipe", "GitHub", "Jupyter", "STM32CubeMX", "KiCad", "Embedded Wizard", "TouchGFX", "STM32CubeIDE"]
        }
      ]
    },
    {
      category: "🧠 Domains of Expertise",
      icon: <Eye className="h-6 w-6 text-tech-purple" />,
      sections: [
        {
          title: "Embedded Systems & Hardware",
          items: ["STM32 Series, ESP32, ARM Cortex", "PCB Design", "Sensor Integration", "GUI Development with TouchGFX and Embedded Wizard"]
        },
        {
          title: "Machine Learning & Vision",
          items: ["CNNs", "Gesture Analysis", "Data Science", "Computer Vision (face recognition, wavelet transforms)"]
        }
      ]
    }
  ];

  return (
    <section id="about" className="section bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1 space-y-6">
            <div>
              <h6 className="text-primary font-semibold mb-2">ABOUT ME</h6>
              <h2 className="section-title">Designing Solutions, Not Just Visuals</h2>
            </div>
            
            <p className="text-lg leading-relaxed">
              I am a B.Tech student in Cyber Physical Systems at Manipal Institute of Technology, with a passion for innovative technology solutions. 
              My expertise lies in developing embedded systems, implementing computer vision algorithms, and creating AI-driven applications.
            </p>
            
            <p className="text-lg leading-relaxed">
              As the Corporate Alumni Relations Head at E-Cell Manipal, I've honed my leadership abilities while building a network of professionals across the tech industry. I believe in creating systems that solve real-world problems through an interdisciplinary approach combining hardware expertise and software intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Card className="flex-1">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Award className="h-5 w-5 text-primary" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold">2+ Years</p>
                  <p className="text-muted-foreground">In Tech Projects</p>
                </CardContent>
              </Card>
              
              <Card className="flex-1">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Code className="h-5 w-5 text-primary" />
                    Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold">15+</p>
                  <p className="text-muted-foreground">Completed Projects</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">🚀 Skills Overview</h3>
            </div>
            
            {skills.map((skill, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    {skill.icon}
                    {skill.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skill.sections.map((section, sectionIdx) => (
                    <div key={sectionIdx}>
                      <h4 className="font-semibold text-lg mb-2 text-primary">{section.title}</h4>
                      <ul className="space-y-1">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
