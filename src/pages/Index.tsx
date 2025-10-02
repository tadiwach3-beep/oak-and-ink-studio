import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_j4uq0tv',
        'template_o3ejpm7',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '0f_z_WXqoZC089jnN'
      );
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
        className: "border-neon bg-card text-neon",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="wine-gradient py-20 md:py-32 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider elegant-glow mb-4 text-foreground">
            Oak and Ink Studio
          </h1>
          <p className="text-xl md:text-2xl mb-4 gold-accent font-semibold">
            AI-Powered Graphic Design in Stellenbosch
          </p>
          <p className="text-lg md:text-xl mb-8 text-foreground/90 max-w-3xl mx-auto">
            Crafting Bold Brands for Wineries & Tourism | From R1,000 | Stellenbosch, South Africa
          </p>
          <div className="max-w-4xl mx-auto">
            <img
              src={heroImage}
              alt="Oak and Ink Studio - AI-Powered Graphic Design"
              className="w-full rounded-3xl oak-texture float-animation shadow-2xl"
            />
          </div>
          <div className="mt-8">
            <a href="#contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl font-bold shadow-lg hover:scale-105 transition-all duration-300">
                Book a Free Mockup
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 uppercase tracking-wider">
            Our Design Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From logos to full business identities, we use cutting-edge AI tools to deliver stunning designs fast and affordably
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              image={serviceTech}
              title="Logo Design"
              description="Minimalist abstract & vintage rustic logos. Standard: R1,000 | Premium: R3,000 | Gold: R5,000"
              pricing="From R1,000"
            />
            <ServiceCard
              image={serviceDigital}
              title="Social Media Graphics"
              description="Vibrant minimalism & bold storytelling posts. Standard: R1,000 | Premium: R3,000 | Gold: R5,000"
              pricing="From R1,000"
            />
            <ServiceCard
              image={serviceInnovation}
              title="Business Identity"
              description="Complete brand packages with business cards, letterheads & more. Standard: R2,000 | Gold: R6,000"
              pricing="From R2,000"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 uppercase tracking-wider">
            Our Portfolio
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Showcasing our best work for wineries, tourism businesses, and local Stellenbosch brands
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              image={caseAlpha}
              title="Winery Logo Design"
              description="Custom minimalist logo for Stellenbosch wine estate – R1,000. Elegant design reflecting organic terroir."
            />
            <ServiceCard
              image={caseBeta}
              title="Tourism Social Graphics"
              description="Vibrant social media campaign for local guesthouse – R3,000. Increased engagement by 150%."
            />
            <ServiceCard
              image={caseGamma}
              title="Restaurant Brand Identity"
              description="Complete business identity for Cape Winelands restaurant – R6,000. Logo, menus, business cards."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-wider gold-accent">
            Why Oak and Ink?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            <strong>Oak and Ink Studio</strong> is your local AI-powered graphic design hub in <strong>Stellenbosch, South Africa</strong>. 
            Specializing in logos, social media graphics, business identities, and more, we serve wineries, tourism spots, 
            and small businesses with affordable, fast designs starting from <strong>R1,000</strong>.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Using cutting-edge free AI tools, we craft custom solutions reflecting Stellenbosch's wine and culture vibe. 
            From minimalist abstract logos to vibrant social campaigns, we blend 2025 design trends with local authenticity. 
            Based in the heart of Cape Winelands, we understand what makes your brand stand out.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="wine-gradient py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 uppercase tracking-wider elegant-glow text-foreground">
            Book Your Design
          </h2>
          <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Ready to elevate your brand? Get a free mockup or discuss your project. We respond within 24 hours.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="bg-background/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl border-2 border-border card-glow space-y-6">
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:studiooakandink@gmail.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-neon transition-colors duration-300 group"
                >
                  <div className="mt-1 text-neon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <p className="group-hover:underline">studiooakandink@gmail.com</p>
                  </div>
                </a>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="text-neon">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </span>
                    Phone
                  </p>
                  <div className="flex flex-wrap gap-3 ml-7">
                    <a 
                      href="tel:0733971530"
                      className="text-muted-foreground hover:text-neon transition-colors duration-300 hover:underline"
                    >
                      Call: 073 397 1530
                    </a>
                    <span className="text-muted-foreground">•</span>
                    <a 
                      href="https://wa.me/27733971530"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-neon transition-colors duration-300 hover:underline"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <a 
                  href="https://oak-and-ink-studio.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-neon transition-colors duration-300 group"
                >
                  <div className="mt-1 text-neon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Website</p>
                    <p className="group-hover:underline">oak-and-ink-studio.lovable.app</p>
                  </div>
                </a>

                <a 
                  href="https://www.facebook.com/OakandInkStudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-neon transition-colors duration-300 group"
                >
                  <div className="mt-1 text-neon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Facebook</p>
                    <p className="group-hover:underline">Oak and Ink Studio</p>
                  </div>
                </a>

                <a 
                  href="https://www.google.com/maps/search/?api=1&query=35+luyolo+road+stellenbosch+kayamandi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-neon transition-colors duration-300 group"
                >
                  <div className="mt-1 text-neon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Location</p>
                    <p className="group-hover:underline">35 Luyolo Road, Kayamandi</p>
                    <p className="group-hover:underline">Stellenbosch, Cape Town</p>
                    <p className="group-hover:underline">South Africa</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-background/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl border-2 border-transparent hover:border-neon transition-all duration-300 card-glow"
            >
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-6">Send a Message</h3>
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
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold rounded-xl h-12 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>

          {/* Map */}
          <div className="bg-background/80 backdrop-blur-sm p-4 rounded-3xl border-2 border-border card-glow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.8987634281234!2d18.8658!3d-33.9321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d0c0c0c0c0d%3A0x0!2s35%20Luyolo%20Rd%2C%20Kayamandi%2C%20Stellenbosch%2C%207600!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </div>
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
  pricing,
}: {
  image: string;
  title: string;
  description: string;
  link?: string;
  pricing?: string;
}) => {
  const content = (
    <>
      <img
        src={image}
        alt={title}
        className="w-full rounded-2xl mb-4 oak-texture hover:scale-105 transition-transform duration-300"
      />
      <h2 className="text-2xl font-bold mb-3 uppercase tracking-wide gold-accent">{title}</h2>
      {pricing && (
        <p className="text-primary font-bold text-lg mb-2">{pricing}</p>
      )}
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </>
  );

  if (link) {
    return (
      <Link to={link} className="block">
        <div className="bg-card rounded-3xl p-6 transition-all duration-300 hover:scale-105 hover:card-glow border-2 border-border hover:border-primary cursor-pointer group">
          {content}
          <div className="mt-4 gold-accent text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Details →
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-card rounded-3xl p-6 transition-all duration-300 hover:scale-105 hover:card-glow border-2 border-border hover:border-primary">
      {content}
    </div>
  );
};

export default Index;
