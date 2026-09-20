import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import caseAlpha from "@/assets/case-alpha.jpg";
import caseBeta from "@/assets/case-beta.jpg";
import caseGamma from "@/assets/case-gamma.jpg";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    number: "01",
    title: "Websites",
    description: "Professional, responsive websites designed to turn visitors into enquiries.",
    items: ["Business websites", "Landing pages", "Mobile optimisation", "Contact forms", "WhatsApp integration", "Basic SEO foundations"],
    cta: "Explore websites",
    href: "#work",
  },
  {
    number: "02",
    title: "Digital Presence",
    description: "Make sure customers can find your business, understand what you offer and know how to contact you.",
    items: ["Google Business optimisation", "Social profile setup", "Digital brand consistency", "Contact systems", "Basic digital strategy"],
    cta: "Improve your presence",
    href: "#contact",
  },
  {
    number: "03",
    title: "Ongoing Support",
    description: "Your website shouldn't become outdated the moment it launches.",
    items: ["Website updates", "Content changes", "Improvements", "Technical maintenance", "Ongoing digital support"],
    cta: "Talk about support",
    href: "#contact",
  },
];

const projects = [
  {
    category: "Automotive",
    title: "Cape Auto Group",
    description: "A modern automotive website focused on vehicle discovery and enquiry generation.",
    image: caseAlpha,
    featured: true,
  },
  {
    category: "Hospitality",
    title: "Oak Valley Guesthouse",
    description: "A calm, image-led website designed to showcase rooms, location and the guest experience.",
    image: caseBeta,
  },
  {
    category: "Professional Services",
    title: "CapePoint Accounting",
    description: "A professional digital presence designed to make services easier to understand and enquiries easier.",
    image: caseGamma,
  },
];

const process = [
  ["01", "Discover", "Understand the business, audience and problem."],
  ["02", "Plan", "Define the structure, content and user journey."],
  ["03", "Build", "Design and develop the experience."],
  ["04", "Launch", "Test, optimise and put it into the hands of customers."],
  ["05", "Support", "Improve and maintain the digital experience."],
];

const principles = [
  ["Purpose over decoration", "Every element should have a reason to exist."],
  ["Simple over complicated", "We build practical systems without unnecessary complexity."],
  ["Designed for growth", "Your digital presence should be able to evolve as your business does."],
];

const Index = () => {
  const { toast } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    service: "Website",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_j4uq0tv",
        "template_o3ejpm7",
        {
          from_name: formData.name,
          from_email: formData.email,
          business: formData.business,
          service: formData.service,
          message: formData.message,
        },
        "0f_z_WXqoZC089jnN",
      );
      toast({ title: "Enquiry sent", description: "Thanks — Oak & Ink will be in touch soon." });
      setFormData({ name: "", business: "", email: "", service: "Website", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({ title: "Your enquiry could not be sent", description: "Please email or WhatsApp us instead.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm" aria-label="Main navigation">
        <div className="studio-container flex h-20 items-center justify-between">
          <a href="#top" className="font-heading text-sm font-bold uppercase leading-[0.92] tracking-normal" aria-label="Oak and Ink Studio home">
            Oak &amp; Ink<br />Studio
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">{item.label}</a>
            ))}
            <Button asChild className="h-11 rounded-sm px-5 font-semibold">
              <a href="#contact">Start a project <ArrowRight /></a>
            </Button>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {menuOpen && (
          <div className="border-t border-border bg-background px-5 py-6 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={closeMenu} className="border-b border-border py-4 font-heading text-2xl font-semibold">
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-5 h-12 rounded-sm">
                <a href="#contact" onClick={closeMenu}>Start a project <ArrowRight /></a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      <main id="top">
        <header className="border-b border-border">
          <div className="studio-container grid min-h-[calc(100svh-5rem)] grid-cols-1 items-center gap-12 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
            <div className="max-w-3xl">
              <p className="eyebrow mb-7">Digital solutions studio</p>
              <h1 className="font-heading text-[clamp(2.75rem,6vw,5.4rem)] font-semibold leading-[0.98] tracking-normal">
                Turn your business into a digital presence <span className="text-primary">people remember.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
                Oak &amp; Ink Studio helps businesses build professional websites, strengthen their digital presence and create practical systems that help them operate online.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-13 rounded-sm px-7 text-base font-semibold">
                  <a href="#contact">Start a project <ArrowRight /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-13 rounded-sm border-foreground px-7 text-base font-semibold hover:bg-foreground hover:text-background">
                  <a href="#work">View our work</a>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
              <div className="absolute -right-3 -top-3 h-20 w-20 bg-accent-soft sm:-right-6 sm:-top-6 sm:h-28 sm:w-28" />
              <div className="relative border border-foreground bg-foreground p-2 shadow-editorial sm:p-3">
                <div className="flex h-8 items-center gap-1.5 border-b border-background/20 px-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="h-2 w-2 rounded-full bg-background/40" />
                  <span className="h-2 w-2 rounded-full bg-background/40" />
                  <span className="ml-3 h-3 flex-1 bg-background/10" />
                </div>
                <img src={caseAlpha} alt="Oak and Ink website concept displayed in a browser frame" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="relative -mt-9 ml-auto mr-5 w-28 border-4 border-foreground bg-foreground p-1 shadow-editorial sm:w-36">
                <img src={caseBeta} alt="Mobile website concept" className="aspect-[9/16] w-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        <section className="border-b border-border py-7">
          <div className="studio-container flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <span className="eyebrow">We build for</span>
              <p className="text-sm text-muted-foreground">Automotive <span className="text-primary">•</span> Hospitality <span className="text-primary">•</span> Professional Services <span className="text-primary">•</span> Growing Businesses</p>
            </div>
            <div className="flex gap-5 text-xs font-semibold uppercase text-foreground sm:gap-8">
              <span>Websites</span><span>Presence</span><span>Support</span>
            </div>
          </div>
        </section>

        <section id="services" className="section-space border-b border-border scroll-mt-20">
          <div className="studio-container">
            <div className="section-heading">
              <p className="eyebrow">Services</p>
              <h2>What we build</h2>
              <p>Practical digital solutions designed around your business—not unnecessary complexity.</p>
            </div>
            <div className="mt-14 grid border-l border-t border-border md:grid-cols-3">
              {services.map((service) => (
                <article key={service.number} className="group flex min-h-full flex-col border-b border-r border-border p-7 transition-colors hover:bg-accent-soft lg:p-9">
                  <span className="font-heading text-sm font-bold text-primary">{service.number}</span>
                  <h3 className="mt-8 font-heading text-3xl font-semibold">{service.title}</h3>
                  <p className="mt-4 min-h-20 leading-7 text-muted-foreground">{service.description}</p>
                  <ul className="mt-7 space-y-3 border-t border-border pt-6">
                    {service.items.map((item) => <li key={item} className="flex items-center gap-3 text-sm"><Check className="h-4 w-4 text-primary" />{item}</li>)}
                  </ul>
                  <a href={service.href} className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-primary">{service.cta} <ArrowRight className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section-space border-b border-border scroll-mt-20">
          <div className="studio-container">
            <div className="section-heading">
              <p className="eyebrow">Portfolio</p>
              <h2>Selected work</h2>
              <p>A selection of digital experiences built to solve real business problems.</p>
            </div>
            <div className="mt-14 grid gap-10 md:grid-cols-2">
              {projects.map((project, index) => (
                <article key={project.title} className={project.featured ? "md:col-span-2" : ""}>
                  <div className="group overflow-hidden border border-border bg-secondary">
                    <img src={project.image} alt={`${project.title} concept website`} className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${project.featured ? "aspect-[16/8]" : "aspect-[4/3]"}`} />
                  </div>
                  <div className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-[1fr_auto]">
                    <div>
                      <p className="eyebrow">{project.category}</p>
                      <h3 className="mt-2 font-heading text-2xl font-semibold">{project.title}</h3>
                      <p className="mt-2 max-w-xl leading-7 text-muted-foreground">{project.description}</p>
                      <p className="mt-4 text-xs text-muted-foreground">Concept project — created by Oak &amp; Ink for demonstration purposes.</p>
                    </div>
                    <a href="#contact" className="inline-flex h-fit items-center gap-2 text-sm font-bold text-primary">Discuss a similar project <ArrowDownRight className="h-4 w-4" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-foreground text-background">
          <div className="studio-container">
            <p className="eyebrow text-primary">Our process</p>
            <h2 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">We don't just build websites.<br /><span className="text-primary">We solve problems.</span></h2>
            <div className="mt-14 grid border-l border-t border-background/20 sm:grid-cols-2 lg:grid-cols-5">
              {process.map(([number, title, description]) => (
                <article key={number} className="border-b border-r border-background/20 p-6 lg:min-h-64">
                  <span className="text-sm font-bold text-primary">{number}</span>
                  <h3 className="mt-12 font-heading text-xl font-semibold uppercase">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-background/65">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space border-b border-border">
          <div className="studio-container grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Why Oak &amp; Ink</p>
              <h2 className="mt-5 font-heading text-4xl font-semibold leading-tight sm:text-5xl">Built around your business.</h2>
            </div>
            <div className="divide-y divide-border border-t border-border">
              {principles.map(([title, description], index) => (
                <article key={title} className="grid gap-3 py-7 sm:grid-cols-[3rem_1fr_1.3fr] sm:items-start">
                  <span className="text-sm font-bold text-primary">0{index + 1}</span>
                  <h3 className="font-heading text-xl font-semibold">{title}</h3>
                  <p className="leading-7 text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-space border-b border-border scroll-mt-20">
          <div className="studio-container grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="mt-5 font-heading text-4xl font-semibold leading-tight sm:text-5xl">Small studio.<br /><span className="text-primary">Serious work.</span></h2>
            </div>
            <div className="max-w-2xl">
              <div className="space-y-5 text-lg leading-8 text-muted-foreground">
                <p>Oak &amp; Ink Studio is an independent digital studio focused on helping businesses build stronger digital foundations.</p>
                <p>Founded by Tadiwa Chigumadzi, Oak &amp; Ink combines web development, design and practical digital thinking to create solutions that businesses can actually use.</p>
                <p>The studio is currently founder-led, allowing each project to receive direct attention from concept through to delivery.</p>
              </div>
              <div className="mt-9 border-l-2 border-primary pl-5">
                <p className="font-heading text-lg font-semibold">Tadiwa Chigumadzi</p>
                <p className="mt-1 text-sm text-muted-foreground">Founder &amp; CEO</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 text-primary-foreground sm:py-20">
          <div className="studio-container grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase">Ready when you are</p>
              <h2 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">Have a business that needs a better digital presence?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/80">Tell us what you're building, what isn't working and where you want to go.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg" className="h-13 rounded-sm bg-foreground px-7 text-background hover:bg-foreground/85">
                <a href="#contact">Start a project <ArrowRight /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-13 rounded-sm border-primary-foreground bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="https://wa.me/27733971530" target="_blank" rel="noreferrer">WhatsApp Oak &amp; Ink</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="section-space scroll-mt-20">
          <div className="studio-container">
            <div className="section-heading">
              <p className="eyebrow">Contact</p>
              <h2>Let's work together</h2>
            </div>
            <div className="mt-14 grid gap-14 lg:grid-cols-[1.35fr_.65fr]">
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <label className="form-label">Name
                  <Input required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} className="form-control" />
                </label>
                <label className="form-label">Business
                  <Input required value={formData.business} onChange={(event) => setFormData({ ...formData, business: event.target.value })} className="form-control" />
                </label>
                <label className="form-label">Email
                  <Input type="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className="form-control" />
                </label>
                <label className="form-label">What do you need?
                  <select value={formData.service} onChange={(event) => setFormData({ ...formData, service: event.target.value })} className="form-control w-full appearance-none px-3">
                    <option>Website</option><option>Digital Presence</option><option>Support</option><option>Other</option>
                  </select>
                </label>
                <label className="form-label sm:col-span-2">Tell us about the project
                  <Textarea required value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} className="min-h-36 rounded-sm border-border bg-background focus-visible:ring-primary" />
                </label>
                <Button type="submit" disabled={isSubmitting} size="lg" className="h-13 rounded-sm px-7 sm:w-fit">
                  {isSubmitting ? "Sending enquiry…" : "Send enquiry"} {!isSubmitting && <ArrowRight />}
                </Button>
              </form>

              <aside className="border-t border-border pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="text-sm leading-6 text-muted-foreground">Prefer a direct conversation? Email, call or send a WhatsApp message.</p>
                <div className="mt-8 space-y-7">
                  <ContactLink icon={Mail} label="Email" href="mailto:studiooakandink@gmail.com" value="studiooakandink@gmail.com" />
                  <ContactLink icon={MessageCircle} label="WhatsApp" href="https://wa.me/27733971530" value="073 397 1530" external />
                  <ContactLink icon={Phone} label="Call" href="tel:0733971530" value="073 397 1530" />
                  <div className="flex gap-4"><MapPin className="mt-0.5 h-5 w-5 text-primary" /><div><p className="text-xs font-bold uppercase text-muted-foreground">Location</p><p className="mt-1 font-medium">Western Cape, South Africa</p></div></div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary py-12">
        <div className="studio-container">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto]">
            <div>
              <p className="font-heading text-xl font-bold uppercase leading-none">Oak &amp; Ink</p>
              <p className="mt-3 text-sm text-muted-foreground">Digital solutions for businesses.</p>
            </div>
            <div className="flex flex-wrap content-start gap-x-6 gap-y-3 text-sm">
              {navItems.map((item) => <a key={item.label} href={item.href} className="hover:text-primary">{item.label}</a>)}
            </div>
            <div className="text-sm text-muted-foreground lg:text-right">
              <p>Western Cape, South Africa</p>
              <a href="https://www.facebook.com/OakandInkStudio" target="_blank" rel="noreferrer" className="mt-3 inline-block text-foreground hover:text-primary">Facebook</a>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Oak &amp; Ink Studio</p>
            <div className="flex gap-5"><span>Privacy Notice</span><span>Terms &amp; Conditions</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ContactLink = ({ icon: Icon, label, href, value, external = false }: { icon: typeof Mail; label: string; href: string; value: string; external?: boolean }) => (
  <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="group flex gap-4">
    <Icon className="mt-0.5 h-5 w-5 text-primary" />
    <div><p className="text-xs font-bold uppercase text-muted-foreground">{label}</p><p className="mt-1 break-all font-medium group-hover:text-primary">{value}</p></div>
  </a>
);

export default Index;