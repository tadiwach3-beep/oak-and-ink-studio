import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Grape, ChevronDown } from "lucide-react";
import emailjs from "@emailjs/browser";
import heroImage from "@/assets/hero-portrait.jpg";
import serviceTech from "@/assets/service-tech.jpg";
import serviceDigital from "@/assets/service-digital.jpg";
import serviceInnovation from "@/assets/service-innovation.jpg";
import caseAlpha from "@/assets/case-alpha.jpg";
import caseBeta from "@/assets/case-beta.jpg";
import caseGamma from "@/assets/case-gamma.jpg";
import wineryLogo1 from "@/assets/winery-logo-1.jpg";
import wineryLogo2 from "@/assets/winery-logo-2.jpg";
import wineryLogo3 from "@/assets/winery-logo-3.jpg";
import wineryLogo4 from "@/assets/winery-logo-4.jpg";
import wineryLogo5 from "@/assets/winery-logo-5.jpg";
import wineryLogo6 from "@/assets/winery-logo-6.jpg";
import wineryLogo7 from "@/assets/winery-logo-7.jpg";
import wineryLogo8 from "@/assets/winery-logo-8.jpg";
import wineryLogo9 from "@/assets/winery-logo-9.jpg";
import oakInkLogo from "@/assets/oak-ink-logo.png";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whyChooseOpen, setWhyChooseOpen] = useState(false);

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
    <div className="min-h-screen bg-background">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={oakInkLogo} alt="Oak & Ink Studio" className="h-9 w-9 object-contain" />
            <span className="font-bold uppercase tracking-widest text-sm">Oak <span className="text-primary">&</span> Ink</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <a href="#contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none uppercase tracking-wider text-xs font-bold h-9 px-4">
              Hire Me
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-1/3 h-full orange-block hidden md:block" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 font-bold">// Stellenbosch · ZA</p>
              <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.95] mb-6">
                Hello.<br/>
                I'm <span className="text-primary">Oak &amp; Ink</span><br/>
                Studio.
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
                AI-powered graphic design for wineries, tourism &amp; bold brands. From R1,000 — delivered in 1–3 days.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none uppercase tracking-wider font-bold h-12 px-8">
                    Book Free Mockup
                  </Button>
                </a>
                <a href="#portfolio">
                  <Button variant="outline" className="rounded-none uppercase tracking-wider font-bold h-12 px-8 border-2 border-foreground/20 hover:border-primary hover:text-primary">
                    View Work
                  </Button>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border max-w-md">
                <div>
                  <div className="text-3xl font-black text-primary">120+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary">95%</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary">10+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Years Local</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
              <img
                src={heroImage}
                alt="Oak and Ink Studio designer portrait"
                className="relative w-full max-w-md mx-auto float-animation"
                width={1024}
                height={1280}
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section short */}
      <section id="about" className="py-20 px-4 border-b border-border">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 font-bold">// About</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
              Bold design,<br/>built fast.
            </h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              <strong className="text-foreground">Oak and Ink Studio</strong> is a Stellenbosch-based design studio fusing AI tools with handcrafted detail. We build identities for wineries, tourism brands, and small businesses across the Cape Winelands.
            </p>
            <p>
              From minimalist logos to vibrant social campaigns, we move at the speed of modern brands — without losing the soul of local craft.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 font-bold">// Services</p>
              <h2 className="text-4xl md:text-5xl font-black uppercase">What I Do</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">Cutting-edge AI tools, fast delivery, transparent pricing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            <ServiceCard
              image={serviceTech}
              title="Logo Design"
              description="Minimalist abstract & vintage rustic logos. Standard / Premium / Gold tiers."
              pricing="From R1,000"
            />
            <ServiceCard
              image={serviceDigital}
              title="Social Graphics"
              description="Vibrant minimalism & bold storytelling posts that stop the scroll."
              pricing="From R1,000"
            />
            <ServiceCard
              image={serviceInnovation}
              title="Brand Identity"
              description="Complete packages — logo, cards, letterheads, brand guidelines."
              pricing="From R2,000"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us — bold dark variant */}
      <section className="py-20 px-4 border-b border-border bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 font-bold">// Why Us</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase">Why Choose Oak &amp; Ink?</h2>
          </div>

          <Collapsible open={whyChooseOpen} onOpenChange={setWhyChooseOpen}>
            <CollapsibleTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none uppercase tracking-wider font-bold h-12 px-8 mb-8">
                {whyChooseOpen ? 'Hide Details' : 'See Details'}
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${whyChooseOpen ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent className="animate-in slide-in-from-top-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
                {[
                  { t: 'Local Expertise', d: 'Tailored designs for Stellenbosch wineries and tourism, crafted with AI speed.' },
                  { t: 'Affordable Quality', d: 'Starting at R1,000 with free AI tools, beating South African agency rates.' },
                  { t: 'Fast Turnaround', d: 'Deliveries in 1–3 days, perfect for urgent winery events.' },
                  { t: 'Personalized Service', d: 'One-on-one support and free mockups for every client.' },
                ].map((item, i) => (
                  <div key={i} className="bg-background p-8 hover:bg-card transition-colors group">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="text-primary font-black text-2xl">0{i+1}</span>
                      <h3 className="text-xl font-bold uppercase tracking-wide group-hover:text-primary transition-colors">{item.t}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 font-bold">// Projects</p>
              <h2 className="text-4xl md:text-5xl font-black uppercase">Recent Work</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            <ServiceCard
              image={caseAlpha}
              title="Winery Logo"
              description="Custom minimalist logo for Stellenbosch wine estate."
              pricing="R1,000"
            />
            <ServiceCard
              image={caseBeta}
              title="Tourism Social"
              description="Vibrant social media campaign — +150% engagement."
              pricing="R3,000"
            />
            <ServiceCard
              image={caseGamma}
              title="Restaurant Brand"
              description="Complete identity for a Cape Winelands restaurant."
              pricing="R6,000"
            />
          </div>
        </div>
      </section>

      {/* Winery Logo References Section */}
      <section className="py-20 px-4 border-b border-border bg-card/30">
        <div className="container mx-auto">
          <div className="mb-12">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 font-bold">// Gallery</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase">Winery Logo References</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-border">
            {[wineryLogo1, wineryLogo2, wineryLogo3, wineryLogo4, wineryLogo5, wineryLogo6, wineryLogo7, wineryLogo8, wineryLogo9].map((logo, index) => (
              <div
                key={index}
                className="aspect-square bg-background p-6 hover:bg-primary/10 transition-colors flex items-center justify-center group"
              >
                <img
                  src={logo}
                  alt={`Stellenbosch Winery Logo ${index + 1}`}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a href="#contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none uppercase tracking-wider font-bold h-12 px-8">
                Get Your Custom Logo
              </Button>
            </a>
          </div>
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
