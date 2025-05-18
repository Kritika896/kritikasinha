
import { 
  Cpu, 
  Eye, 
  LineChart, 
  Workflow, 
  Users,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Embedded Systems Development",
      description: "Custom embedded solutions using STM32, ARM Cortex, Arduino, and Raspberry Pi platforms for IoT and smart device applications.",
      icon: <Cpu className="h-12 w-12 text-primary" />,
      link: "#contact"
    },
    {
      title: "Computer Vision & AI Solutions",
      description: "Implementation of computer vision algorithms and AI models for object detection, image classification, and video analysis.",
      icon: <Eye className="h-12 w-12 text-primary" />,
      link: "#contact"
    },
    {
      title: "Data Analysis & Software Development",
      description: "Custom software solutions for data analysis, visualization, and predictive modeling using Python, R, and related technologies.",
      icon: <LineChart className="h-12 w-12 text-primary" />,
      link: "#contact"
    },
    {
      title: "IoT & Smart Device Automation",
      description: "Development of automated systems for IoT devices, smart homes, and industrial applications with focus on reliability and efficiency.",
      icon: <Workflow className="h-12 w-12 text-primary" />,
      link: "#contact"
    },
    {
      title: "Event & Team Coordination",
      description: "Professional event management, team leadership, and coordination services for tech events, workshops, and conferences.",
      icon: <Users className="h-12 w-12 text-primary" />,
      link: "#contact"
    }
  ];

  return (
    <section id="services" className="section">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <h6 className="text-primary font-semibold mb-2">WHAT I OFFER</h6>
            <h2 className="section-title">Expertise Services! Let's check it out</h2>
          </div>
          <p className="md:max-w-md text-muted-foreground">
            Specialized services combining embedded systems expertise with AI and software development capabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden card-hover border">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="p-0 h-auto hover:bg-transparent group">
                  <a href={service.link} className="flex items-center gap-2">
                    Inquire Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
