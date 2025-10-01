import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";
import serviceTech from "@/assets/service-tech.jpg";
import serviceDigital from "@/assets/service-digital.jpg";
import serviceInnovation from "@/assets/service-innovation.jpg";
import caseAlpha from "@/assets/case-alpha.jpg";
import caseBeta from "@/assets/case-beta.jpg";
import caseGamma from "@/assets/case-gamma.jpg";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
      className: "border-neon bg-card text-neon",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="metallic-gradient py-20 md:py-32 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider neon-glow mb-4 text-foreground">
            Forge Your Future
          </h1>
          <p className="text-lg md:text-xl mb-8 text-foreground/90">
            Bold minimalism meets neon nostalgia in our 2025 portfolio.
          </p>
          <div className="max-w-4xl mx-auto">
            <img
              src={heroImage}
              alt="Hyper-realistic 3D Hero"
              className="w-full rounded-full pixel-glitch float-animation"
            />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 uppercase tracking-wider">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              image={serviceTech}
              title="Tech Consulting"
              description="Streamline your operations with AI-driven solutions."
              link="/tech-consulting"
              pixelated
            />
            <ServiceCard
              image={serviceDigital}
              title="Digital Strategy"
              description="Maximalist approaches for bold market impact."
              link="/digital-strategy"
            />
            <ServiceCard
              image={serviceInnovation}
              title="Innovation Labs"
              description="Fluid forms of creativity for future-proofing."
              link="/innovation-labs"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 uppercase tracking-wider">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              image={caseAlpha}
              title="Project Alpha"
              description="Problem: Outdated systems. Solution: AI integration. Impact: 50% efficiency boost."
              pixelated
            />
            <ServiceCard
              image={caseBeta}
              title="Project Beta"
              description="Neon nostalgia revamp increased engagement by 200%."
            />
            <ServiceCard
              image={caseGamma}
              title="Project Gamma"
              description="Metallic designs drove viral growth."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-wider">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We blend 2025 trends like AI-powered creativity and bold minimalism to showcase your business.
            Our approach combines cutting-edge technology with stunning visual design to create portfolios
            that stand out in the digital landscape.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="metallic-gradient py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 uppercase tracking-wider neon-glow text-foreground">
            Contact Us
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-background/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl border-2 border-transparent hover:border-neon transition-all duration-300 card-glow"
          >
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card/50 border-muted focus:border-neon transition-all duration-300 rounded-xl h-12"
              />
              <Input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card/50 border-muted focus:border-neon transition-all duration-300 rounded-xl h-12"
              />
              <Textarea
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card/50 border-muted focus:border-neon transition-all duration-300 rounded-xl min-h-32 resize-y"
              />
              <Button
                type="submit"
                className="w-full metallic-gradient text-foreground text-lg font-bold rounded-xl h-12 hover:scale-105 hover:card-glow transition-all duration-300"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({
  image,
  title,
  description,
  link,
  pixelated = false,
}: {
  image: string;
  title: string;
  description: string;
  link?: string;
  pixelated?: boolean;
}) => {
  const content = (
    <>
      <img
        src={image}
        alt={title}
        className={`w-full rounded-2xl mb-4 ${pixelated ? "pixel-glitch" : "filter contrast-125 brightness-110"}`}
      />
      <h2 className="text-2xl font-bold mb-3 uppercase tracking-wide">{title}</h2>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </>
  );

  if (link) {
    return (
      <Link to={link} className="block">
        <div className="bg-card rounded-3xl p-6 transition-all duration-300 hover:scale-105 hover:card-glow border border-border cursor-pointer group">
          {content}
          <div className="mt-4 text-neon text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Previous Designs →
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-card rounded-3xl p-6 transition-all duration-300 hover:scale-105 hover:card-glow border border-border">
      {content}
    </div>
  );
};

export default Index;
