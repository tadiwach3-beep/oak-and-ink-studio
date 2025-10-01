import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import techPreview1 from "@/assets/tech-preview-1.jpg";
import techPreview2 from "@/assets/tech-preview-2.jpg";
import techPreview3 from "@/assets/tech-preview-3.jpg";

const TechConsulting = () => {
  const projects = [
    {
      image: techPreview1,
      title: "AI Dashboard Integration",
      client: "Fortune 500 Company",
      results: "60% faster decision-making",
      description: "Implemented neural network visualization for real-time business intelligence."
    },
    {
      image: techPreview2,
      title: "Enterprise Automation",
      client: "Global Manufacturing",
      results: "40% cost reduction",
      description: "Streamlined workflows with AI-powered automation systems."
    },
    {
      image: techPreview3,
      title: "Cloud Infrastructure",
      client: "Tech Startup",
      results: "99.9% uptime achieved",
      description: "Scalable cloud architecture supporting millions of users."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="metallic-gradient py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-6 hover:bg-foreground/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider neon-glow mb-4 text-foreground">
            Tech Consulting
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl">
            Streamline your operations with AI-driven solutions. We transform complex systems into elegant, efficient workflows.
          </p>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold neon-glow mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold neon-glow mb-2">85%</div>
              <div className="text-muted-foreground">Efficiency Increase</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold neon-glow mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 uppercase tracking-wider">
            Previous Designs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 hover:card-glow border border-border group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover pixel-glitch transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">{project.title}</h3>
                  <div className="text-sm text-primary mb-2">{project.client}</div>
                  <div className="text-neon font-bold mb-3">{project.results}</div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="metallic-gradient py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wider text-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 text-foreground/90">
            Let's discuss how our tech consulting services can drive your success.
          </p>
          <Link to="/#contact">
            <Button className="metallic-gradient text-foreground text-lg font-bold rounded-xl px-8 py-6 hover:scale-105 hover:card-glow transition-all duration-300">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TechConsulting;
