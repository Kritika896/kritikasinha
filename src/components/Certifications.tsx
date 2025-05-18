
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface Certification {
  title: string;
  issuer: string;
  url: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Data Science-Foundation using R",
      issuer: "Johns Hopkins University",
      url: "https://coursera.org/share/5a5ad1a30bb52b92f7ab36a898f53fa5",
    },
    {
      title: "Embedded Software and Hardware Architecture",
      issuer: "University of Colorado",
      url: "https://coursera.org/share/398908138b143cf575945af34f6ff32d",
    },
    {
      title: "Cortex-M Software Development Fundamentals (ARM)",
      issuer: "Imperial College London",
      url: "https://coursera.org/share/134ae848a25bc4ce84b5e30a14e48319",
    },
    {
      title: "Computer Vision- Image Basics with OpenCV and Python",
      issuer: "Coursera",
      url: "https://coursera.org/share/38479418695ea8fbd3cfbc3f73a70d39",
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      url: "https://coursera.org/share/8a84a976436308423088050b2b3e2066",
    },
    {
      title: "Mathematics for Machine Learning: Linear Algebra",
      issuer: "Imperial College London",
      url: "https://coursera.org/share/b624476f045e8ae20f083d3bfe21aa64",
    },
  ];

  return (
    <section id="certifications" className="section bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h6 className="text-primary font-semibold mb-2">PROFESSIONAL DEVELOPMENT</h6>
          <h2 className="section-title">Certifications</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-hover overflow-hidden border border-border/50">
              <CardHeader className="pb-2 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground mb-4">{cert.issuer}</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    View Certificate <ExternalLink size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
