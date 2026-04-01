import { useState } from "react";
import { Menu, X, Shield, Clock, Users, Award } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  projectType: z.string().min(1, "Project type is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      projectType: "",
      phone: "",
      email: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: "Request Received",
      description: "Thank you for reaching out. We will contact you shortly.",
    });
    form.reset();
  }

  const galleryRow1 = [
    "https://static.wixstatic.com/media/86befe_38f9ac0493a04cf4801bfb4be3aa91b6~mv2.jpeg/v1/fit/w_756,h_809,q_90,enc_avif,quality_auto/86befe_38f9ac0493a04cf4801bfb4be3aa91b6~mv2.jpeg",
    "https://static.wixstatic.com/media/86befe_d34681d46fe445d7bf1d0d7272af174a~mv2.jpeg/v1/fit/w_1188,h_809,q_90,enc_avif,quality_auto/86befe_d34681d46fe445d7bf1d0d7272af174a~mv2.jpeg",
    "https://static.wixstatic.com/media/86befe_a5e01992cac843eea67c0627b685a5cc~mv2.jpeg/v1/fit/w_1188,h_809,q_90,enc_avif,quality_auto/86befe_a5e01992cac843eea67c0627b685a5cc~mv2.jpeg",
    "https://static.wixstatic.com/media/86befe_f6d33ecef70e44e5b0bffaf330a891d1~mv2.jpeg/v1/fit/w_1008,h_756,q_90,enc_avif,quality_auto/86befe_f6d33ecef70e44e5b0bffaf330a891d1~mv2.jpeg",
    "https://static.wixstatic.com/media/86befe_1f110771329d4bc9801daf6e4e3ce3c7~mv2.jpg/v1/fit/w_1188,h_809,q_90,enc_avif,quality_auto/86befe_1f110771329d4bc9801daf6e4e3ce3c7~mv2.jpg",
    "https://static.wixstatic.com/media/86befe_6c22f743b8264ea3bff05a055098a043~mv2.jpeg/v1/fit/w_756,h_809,q_90,enc_avif,quality_auto/86befe_6c22f743b8264ea3bff05a055098a043~mv2.jpeg",
    "https://static.wixstatic.com/media/86befe_146dc98deba54740b12f0f7b00383000~mv2.jpeg/v1/fit/w_1008,h_756,q_90,enc_avif,quality_auto/86befe_146dc98deba54740b12f0f7b00383000~mv2.jpeg",
    "https://static.wixstatic.com/media/86befe_e7617c4309ba4958acfb213ab19ef505~mv2.jpg/v1/fit/w_1188,h_809,q_90,enc_avif,quality_auto/86befe_e7617c4309ba4958acfb213ab19ef505~mv2.jpg",
  ];

  const galleryRow2 = [
    "https://static.wixstatic.com/media/86befe_38e320347fa146b8a91fe9ab791aa6d8~mv2.jpg/v1/fit/w_1188,h_809,q_90,enc_avif,quality_auto/86befe_38e320347fa146b8a91fe9ab791aa6d8~mv2.jpg",
    "https://static.wixstatic.com/media/86befe_3687928a1fef41e6b6673df0b429ce74~mv2.jpg/v1/fit/w_1188,h_809,q_90,enc_avif,quality_auto/86befe_3687928a1fef41e6b6673df0b429ce74~mv2.jpg",
    "https://static.wixstatic.com/media/86befe_ad62efa7f7454570b17458c2d7b22be3~mv2.jpg/v1/fit/w_1188,h_809,q_90,enc_avif,quality_auto/86befe_ad62efa7f7454570b17458c2d7b22be3~mv2.jpg",
    "https://static.wixstatic.com/media/86befe_f7c46da8ff334eb687be5222d9a5a3c8~mv2.jpg/v1/fit/w_1188,h_809,q_90,enc_avif,quality_auto/86befe_f7c46da8ff334eb687be5222d9a5a3c8~mv2.jpg",
    "https://static.wixstatic.com/media/86befe_13a442171dc04009aa4e923b93c023d7~mv2.jpg/v1/fit/w_1188,h_809,q_90,enc_avif,quality_auto/86befe_13a442171dc04009aa4e923b93c023d7~mv2.jpg",
    "https://static.wixstatic.com/media/86befe_3e309cc65cff468f957574a268bbcc8e~mv2.jpeg/v1/fit/w_1008,h_756,q_90,enc_avif,quality_auto/86befe_3e309cc65cff468f957574a268bbcc8e~mv2.jpeg",
    "https://static.wixstatic.com/media/86befe_938ad1dc462b4098bb5bd241717da079~mv2.jpeg/v1/fit/w_1008,h_756,q_90,enc_avif,quality_auto/86befe_938ad1dc462b4098bb5bd241717da079~mv2.jpeg",
    galleryRow1[0], // duplicate to fill
  ];

  const team = [
    { photo: "https://static.wixstatic.com/media/86befe_c275471c17664aa09ad02ff95d6dafb3~mv2.jpg/v1/crop/x_0,y_589,w_916,h_916/fill/w_278,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_3833_JPG.jpg", title: "President", name: "Marco Bertron" },
    { photo: "https://static.wixstatic.com/media/86befe_6fa4e732b34b4a48b3bb478b60cf515b~mv2.jpg/v1/crop/x_0,y_774,w_2316,h_2314/fill/w_278,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6054_JPG.jpg", title: "Vice President", name: "Chad Mosier" },
    { photo: "https://static.wixstatic.com/media/86befe_18b3510c44a349a9987a11cb6e185651~mv2.jpg/v1/crop/x_0,y_1431,w_4284,h_4281/fill/w_278,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0204.jpg", title: "Service Manager", name: "Matt Wickwire" },
    { photo: "https://static.wixstatic.com/media/86befe_b09a111f5ee34ef58b722f2a40e8a7fc~mv2.jpg/v1/fill/w_278,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0203.jpg", title: "Purchasing Manager", name: "Greg Ficarro" },
    { photo: "https://static.wixstatic.com/media/86befe_cf447fbfecad4175b1331e2a1aafed98~mv2.jpeg/v1/crop/x_0,y_69,w_1816,h_1818/fill/w_278,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/processed-74500AA4-3766-4794-A896-8848D954E584.jpeg", title: "Estimator", name: "Michael Ficarro" },
    { photo: "https://static.wixstatic.com/media/86befe_386d17b24a094cf495ed6c54df945c01~mv2.jpeg/v1/crop/x_0,y_235,w_1320,h_1324/fill/w_278,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image.jpeg", title: "Project Manager", name: "Matt Hart" },
    { photo: "https://static.wixstatic.com/media/86befe_fb1244a61bd143ad8a8d2a98a716f5ae~mv2.jpg/v1/crop/x_309,y_682,w_3576,h_3589/fill/w_278,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0526.jpg", title: "Contracts Manager", name: "Liz Bouille-Sharma" },
    { photo: "https://static.wixstatic.com/media/86befe_394e23e15cb24fd19af03ef9cd6399e7~mv2.jpg/v1/fill/w_278,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0213.jpg", title: "Office Manager", name: "Joanne Benson" },
    { photo: "https://static.wixstatic.com/media/86befe_7b4a5603064a429682f5951f0afe7b6d~mv2.jpg/v1/fill/w_278,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0160.jpg", title: "Assistant Project Manager", name: "Titus Marvin" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. STICKY HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <a href="#">
                <img 
                  className="h-12 w-auto object-contain" 
                  src="https://static.wixstatic.com/media/86befe_5b343736e3ec4e908a01349ffd887b0e~mv2.jpg/v1/fill/w_927,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/86befe_5b343736e3ec4e908a01349ffd887b0e~mv2.jpg" 
                  alt="Kimble Inc Logo" 
                />
              </a>
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#projects" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#team" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">Team</a>
              <a href="#about" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">Contact</a>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#contact">Request a Quote</a>
              </Button>
            </nav>
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border shadow-md">
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-semibold text-foreground hover:bg-muted">Services</a>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-semibold text-foreground hover:bg-muted">Projects</a>
              <a href="#team" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-semibold text-foreground hover:bg-muted">Team</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-semibold text-foreground hover:bg-muted">About</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-semibold text-foreground hover:bg-muted">Contact</a>
              <div className="px-3 pt-2">
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Request a Quote</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={galleryRow1[0]} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-wide mb-6">
            60 Years of Mechanical Excellence
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-10 font-sans max-w-2xl mx-auto">
            Trusted mechanical contracting solutions for commercial and industrial projects across New York and Pennsylvania
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-none" data-testid="btn-hero-quote">
              <a href="#contact">Request a Quote</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-6 text-lg rounded-none" data-testid="btn-hero-projects">
              <a href="#projects">View Our Projects</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. TRUST BAR */}
      <section className="bg-muted py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-border">
            <div className="px-4">
              <div className="text-3xl font-bold text-primary font-display">60+</div>
              <div className="text-sm text-foreground mt-1 font-semibold uppercase tracking-wider">Years in Business</div>
            </div>
            <div className="px-4">
              <div className="text-3xl font-bold text-primary font-display">NY & PA</div>
              <div className="text-sm text-foreground mt-1 font-semibold uppercase tracking-wider">Serving Southern Tier</div>
            </div>
            <div className="px-4">
              <div className="text-3xl font-bold text-primary font-display">Large-Scale</div>
              <div className="text-sm text-foreground mt-1 font-semibold uppercase tracking-wider">Project Specialists</div>
            </div>
            <div className="px-4">
              <div className="text-3xl font-bold text-primary font-display">Skilled</div>
              <div className="text-sm text-foreground mt-1 font-semibold uppercase tracking-wider">Workforce</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES SECTION */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wide">Our Capabilities</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border shadow-sm group hover:shadow-md transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img src="https://static.wixstatic.com/media/86befe_bfb11a9a813e4995b726a5c1705093ae~mv2.jpg/v1/fill/w_467,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/process-pipe-e1589210436556.jpg" alt="Process Piping" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-display uppercase">Process Piping</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our process piping services are tailored to industrial and institutional clients, ensuring efficient and reliable systems that meet specific operational needs.
                </p>
              </div>
            </div>
            <div className="bg-card border border-border shadow-sm group hover:shadow-md transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img src="https://static.wixstatic.com/media/86befe_f520d96291dd43f98631c6418eecc0de~mv2.jpg/v1/fill/w_404,h_271,al_c,lg_1,q_80,enc_avif,quality_auto/86befe_f520d96291dd43f98631c6418eecc0de~mv2.jpg" alt="HVAC Systems" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-display uppercase">HVAC Systems</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We specialize in designing and installing heating, ventilation, and air conditioning systems for commercial and institutional facilities, prioritizing functionality and reliability.
                </p>
              </div>
            </div>
            <div className="bg-card border border-border shadow-sm group hover:shadow-md transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img src="https://static.wixstatic.com/media/86befe_ae23b4778f8043d3a2267cbb151f0272~mv2.jpg/v1/crop/x_0,y_2220,w_2268,h_1433/fill/w_467,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1454.jpg" alt="Plumbing Solutions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-display uppercase">Plumbing Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From new installations to maintenance and repairs, our plumbing services cover a wide range of needs, delivering durable and efficient solutions for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECT GALLERY MARQUEE */}
      <section id="projects" className="py-24 bg-card border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wide">Project Gallery</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-6 mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our completed projects showcasing our expertise in mechanical contracting, process piping, HVAC systems, and plumbing solutions.
          </p>
        </div>
        
        <div className="pause-on-hover flex flex-col gap-4">
          <div className="flex w-[200%] animate-marquee-left">
            {[...galleryRow1, ...galleryRow1].map((src, i) => (
              <div key={`r1-${i}`} className="flex-none px-2 w-[300px] md:w-[400px]">
                <img src={src} alt={`Project image ${i}`} className="w-full h-[240px] object-cover shadow-sm" />
              </div>
            ))}
          </div>
          <div className="flex w-[200%] animate-marquee-right">
            {[...galleryRow2, ...galleryRow2].map((src, i) => (
              <div key={`r2-${i}`} className="flex-none px-2 w-[300px] md:w-[400px]">
                <img src={src} alt={`Project image ${i}`} className="w-full h-[240px] object-cover shadow-sm" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY KIMBLE INC SECTION */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wide">Why Kimble Inc</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-border bg-card shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Shield size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold font-display uppercase mb-3 text-foreground">Decades of Proven Experience</h3>
              <p className="text-muted-foreground">60+ years of delivering complex mechanical systems on time and on budget.</p>
            </div>
            <div className="p-6 border border-border bg-card shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Clock size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold font-display uppercase mb-3 text-foreground">On Time, On Budget</h3>
              <p className="text-muted-foreground">Project management discipline that keeps work on schedule and within scope.</p>
            </div>
            <div className="p-6 border border-border bg-card shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Users size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold font-display uppercase mb-3 text-foreground">Strong Client Relationships</h3>
              <p className="text-muted-foreground">Long-term partnerships built on consistent performance and trust.</p>
            </div>
            <div className="p-6 border border-border bg-card shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Award size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold font-display uppercase mb-3 text-foreground">Commitment to Quality</h3>
              <p className="text-muted-foreground">Rigorous standards on every job site, every time, ensuring safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHO WE WORK WITH SECTION */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wide mb-12">Who We Work With</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-8 py-4 bg-background border border-border font-bold uppercase tracking-wide text-foreground shadow-sm">Commercial Facilities</div>
            <div className="px-8 py-4 bg-background border border-border font-bold uppercase tracking-wide text-foreground shadow-sm">Industrial Plants</div>
            <div className="px-8 py-4 bg-background border border-border font-bold uppercase tracking-wide text-foreground shadow-sm">Institutional Buildings</div>
            <div className="px-8 py-4 bg-background border border-border font-bold uppercase tracking-wide text-foreground shadow-sm">Government & Infrastructure</div>
          </div>
        </div>
      </section>

      {/* 8. ABOUT PREVIEW SECTION */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wide mb-6">Built on Six Decades of Trust</h2>
              <div className="h-1 w-20 bg-primary mb-8"></div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Kimble Inc has been a cornerstone of mechanical contracting in the Southern Tier of New York and Northern Pennsylvania for over 60 years. From complex industrial piping systems to institutional HVAC installations, we have built our reputation one successful project at a time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our workforce brings decades of hands-on experience to every job, and our clients return because we deliver. Experienced, technical, confident.
              </p>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <img src={galleryRow1[1]} alt="About Kimble Inc" className="w-full h-full object-cover shadow-md" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-primary/20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TEAM SECTION */}
      <section id="team" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wide">Your Trusted Mechanical Experts</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-6 mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team of skilled professionals at Kimble Inc is dedicated to delivering top-notch mechanical contracting services. With years of experience, we ensure excellence in every project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-48 h-48 mb-6 overflow-hidden bg-muted">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mt-2">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONTACT / CTA SECTION */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wide">Have a Project in Mind?</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-6 mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Contact our team to discuss your project requirements.
            </p>
          </div>
          <div className="bg-card p-8 md:p-12 border border-border shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} data-testid="input-contact-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Company name" {...field} data-testid="input-contact-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Email address" type="email" {...field} data-testid="input-contact-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Phone number" type="tel" {...field} data-testid="input-contact-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="input-contact-project-type">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="process-piping">Process Piping</SelectItem>
                          <SelectItem value="hvac-systems">HVAC Systems</SelectItem>
                          <SelectItem value="plumbing">Plumbing Solutions</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none text-lg py-6" data-testid="btn-contact-submit">
                  Request Consultation
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-[#1a1f2e] text-[#f4f3ee] py-16 border-t-[8px] border-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <img 
                className="h-16 w-auto object-contain brightness-0 invert mb-6" 
                src="https://static.wixstatic.com/media/86befe_5b343736e3ec4e908a01349ffd887b0e~mv2.jpg/v1/fill/w_927,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/86befe_5b343736e3ec4e908a01349ffd887b0e~mv2.jpg" 
                alt="Kimble Inc Logo" 
              />
              <p className="text-[#f4f3ee]/70 text-sm max-w-sm">
                The established authority in mechanical contracting. Over 60 years of proven results for commercial and industrial clients.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold font-display uppercase tracking-wide mb-6">Contact Us</h4>
              <ul className="space-y-3 text-[#f4f3ee]/80">
                <li>Kimble Inc</li>
                <li>Elmira, New York</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@kimbleinc.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold font-display uppercase tracking-wide mb-6">Service Regions</h4>
              <ul className="space-y-3 text-[#f4f3ee]/80">
                <li>Southern Tier, New York</li>
                <li>Northern Pennsylvania</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-[#f4f3ee]/50">
            <p>2024 Kimble Inc. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
