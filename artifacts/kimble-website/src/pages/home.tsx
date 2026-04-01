import { useState } from "react";
import { Shield, Clock, Users, Award, Monitor, Folder, Globe } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  projectType: z.string().min(1, "Project type is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// ── Windows 2000 chrome window wrapper ──────────────────────
function Win2kWindow({
  title,
  icon,
  children,
  className = "",
  statusText,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  statusText?: string;
}) {
  return (
    <div className={`win-panel ${className}`}>
      {/* Title bar */}
      <div className="win-titlebar">
        <div className="flex items-center gap-1">
          {icon && <span className="mr-1">{icon}</span>}
          <span>{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="win-btn" style={{ minWidth: 16, padding: "0 4px", fontSize: 10, lineHeight: "14px" }} aria-label="Minimize">_</button>
          <button className="win-btn" style={{ minWidth: 16, padding: "0 4px", fontSize: 10, lineHeight: "14px" }} aria-label="Maximize">□</button>
          <button className="win-btn" style={{ minWidth: 16, padding: "0 4px", fontSize: 10, lineHeight: "14px", fontWeight: "bold" }} aria-label="Close">✕</button>
        </div>
      </div>
      {/* Content */}
      <div className="p-0">{children}</div>
      {/* Status bar */}
      {statusText && (
        <div className="win-statusbar">
          <span className="win-statusbar-cell">{statusText}</span>
          <span className="win-statusbar-cell">Ready</span>
        </div>
      )}
    </div>
  );
}

// ── Win2000 section heading with underline ───────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <div
        className="win-titlebar"
        style={{ fontSize: 13, fontWeight: "bold", padding: "4px 8px" }}
      >
        <span>{children}</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactFormValues) {
    setSubmitStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mreolrvd", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitStatus("ok");
      toast({ title: "Request Received", description: "Thank you! We will contact you shortly." });
      reset();
    } catch {
      setSubmitStatus("err");
      toast({ title: "Error", description: "Please try again or call (607) 734-4123.", variant: "destructive" });
    }
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
    galleryRow1[0],
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
    { photo: "https://static.wixstatic.com/media/86befe_7b4a5603064a429682f5951f0afe7b6d~mv2.jpg/v1/fill/w_278,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0160.jpg", title: "Asst. Project Manager", name: "Titus Marvin" },
  ];

  return (
    <div style={{ fontFamily: "'Tahoma','MS Sans Serif',Arial,sans-serif", fontSize: 11, backgroundColor: "#008080", minHeight: "100vh", padding: "8px" }}>

      {/* ── BROWSER CHROME (simulated IE6 window) ── */}
      <div style={{ backgroundColor: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #404040 #404040 #ffffff", marginBottom: 0 }}>

        {/* Title bar */}
        <div className="win-titlebar" style={{ fontSize: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Globe size={14} color="#ffffff" />
            <span>Kimble Inc — Mechanical Contracting — Microsoft Internet Explorer</span>
          </div>
          <div style={{ display: "flex", gap: 2 }}>
            <button className="win-btn" style={{ minWidth: 18, padding: "1px 5px", fontSize: 9 }} aria-label="Minimize">_</button>
            <button className="win-btn" style={{ minWidth: 18, padding: "1px 5px", fontSize: 9 }} aria-label="Maximize">□</button>
            <button className="win-btn" style={{ minWidth: 18, padding: "1px 5px", fontSize: 9, fontWeight: "bold" }} aria-label="Close">✕</button>
          </div>
        </div>

        {/* Menu bar */}
        <div style={{ backgroundColor: "#c0c0c0", padding: "2px 4px", fontSize: 11, display: "flex", gap: 0, borderBottom: "1px solid #808080" }}>
          {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((item) => (
            <button key={item} style={{ background: "none", border: "none", padding: "2px 8px", fontFamily: "Tahoma,sans-serif", fontSize: 11, cursor: "default", color: "#000" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#000080"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#000"; }}
            >{item}</button>
          ))}
        </div>

        {/* Address bar */}
        <div style={{ backgroundColor: "#c0c0c0", padding: "3px 6px", display: "flex", alignItems: "center", gap: 6, borderBottom: "1px solid #808080" }}>
          <span style={{ fontSize: 11 }}>Address</span>
          <div style={{ flex: 1, display: "flex", gap: 4 }}>
            <input
              readOnly
              value="http://www.kimbleinc.com/"
              style={{ flex: 1, fontFamily: "Tahoma,sans-serif", fontSize: 11, padding: "2px 4px", borderTop: "1px solid #808080", borderLeft: "1px solid #808080", borderRight: "1px solid #fff", borderBottom: "1px solid #fff", backgroundColor: "#fff" }}
            />
            <button className="win-btn" style={{ padding: "2px 12px" }}>Go</button>
          </div>
        </div>

        {/* ═══════════════ STICKY HEADER / NAV ═══════════════ */}
        <header style={{ backgroundColor: "#c0c0c0", borderBottom: "2px solid #808080", padding: "4px 8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <a href="#" style={{ textDecoration: "none" }}>
              <img
                style={{ height: 52, width: "auto", objectFit: "contain", border: "2px inset #808080", backgroundColor: "#fff", padding: 2 }}
                src="https://static.wixstatic.com/media/86befe_5b343736e3ec4e908a01349ffd887b0e~mv2.jpg/v1/fill/w_927,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/86befe_5b343736e3ec4e908a01349ffd887b0e~mv2.jpg"
                alt="Kimble Inc Logo"
              />
            </a>

            {/* Desktop nav */}
            <nav style={{ display: "flex", gap: 2, alignItems: "center" }} className="hidden md:flex">
              {[["#services", "Services"], ["#projects", "Project Gallery"], ["#team", "Our Team"], ["#about", "About Us"], ["#contact", "Contact"]].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  style={{ fontFamily: "Tahoma,sans-serif", fontSize: 11, color: "#000000", textDecoration: "none", padding: "3px 10px", backgroundColor: "#c0c0c0", border: "2px solid", borderColor: "#fff #808080 #808080 #fff", display: "inline-block" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#d4d0c8"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#c0c0c0"; }}
                >{label}</a>
              ))}
              <a
                href="#contact"
                style={{ fontFamily: "Tahoma,sans-serif", fontSize: 11, fontWeight: "bold", color: "#000000", textDecoration: "none", padding: "3px 12px", backgroundColor: "#c0c0c0", border: "2px solid", borderColor: "#fff #808080 #808080 #fff", marginLeft: 8, display: "inline-block" }}
              >🖊 Request a Quote</a>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden win-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ padding: "4px 10px", fontSize: 16 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="animate-slide-down" style={{ marginTop: 4, backgroundColor: "#c0c0c0", border: "2px inset #808080", padding: 4 }}>
              {[["#services", "Services"], ["#projects", "Project Gallery"], ["#team", "Our Team"], ["#about", "About Us"], ["#contact", "Contact"]].map(([href, label]) => (
                <a key={href} href={href} onClick={() => setIsMobileMenuOpen(false)}
                  style={{ display: "block", fontFamily: "Tahoma,sans-serif", fontSize: 11, color: "#000080", textDecoration: "underline", padding: "4px 8px", borderBottom: "1px solid #dfdfdf" }}
                >{label}</a>
              ))}
            </div>
          )}
        </header>

        {/* ── MARQUEE ANNOUNCEMENT BAR ── */}
        <div className="win-marquee-bar">
          <div style={{ display: "inline-block", whiteSpace: "nowrap", animation: "marquee-scroll 25s linear infinite" }}>
            &nbsp;&nbsp;&nbsp;
            <span className="win-blink">★ NEW!</span>
            &nbsp; Welcome to Kimble Inc — Over 60 Years of Mechanical Excellence in the Southern Tier of NY &amp; PA &nbsp;|&nbsp;
            Call us: (607) 734-4123 &nbsp;|&nbsp; Services: Process Piping · HVAC Systems · Plumbing Solutions &nbsp;|&nbsp;
            <span className="win-blink">★ NEW!</span>
            &nbsp; Now accepting project inquiries for 2026! &nbsp;&nbsp;&nbsp;
          </div>
        </div>
        <style>{`
          @keyframes marquee-scroll {
            0% { transform: translateX(100vw); }
            100% { transform: translateX(-100%); }
          }
        `}</style>

        {/* ═════════════════ PAGE CONTENT ═════════════════ */}
        <main style={{ backgroundColor: "#c0c0c0", padding: "8px" }}>

          {/* ── 1. HERO ── */}
          <Win2kWindow title="Welcome to Kimble Inc — Mechanical Contracting" icon={<Monitor size={12} color="#ffff00" />} statusText="kimbleinc.com — Done">
            <div style={{ position: "relative" }}>
              <img
                src={galleryRow1[0]}
                alt="Kimble Inc project site"
                style={{ width: "100%", height: 340, objectFit: "cover", display: "block", filter: "brightness(0.55)" }}
              />
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
                <div style={{ backgroundColor: "rgba(0,0,128,0.85)", border: "2px solid", borderColor: "#ffffff #404040 #404040 #ffffff", padding: "16px 24px", maxWidth: 580 }}>
                  <div style={{ background: "linear-gradient(to right, #0a246a, #a6caf0)", color: "#fff", fontWeight: "bold", fontSize: 13, padding: "3px 8px", marginBottom: 10, textAlign: "left" }}>
                    Kimble Inc — Home Page
                  </div>
                  <h1 style={{ color: "#ffffff", fontFamily: "Tahoma,sans-serif", fontSize: 22, fontWeight: "bold", textTransform: "uppercase", marginBottom: 10, textShadow: "1px 1px 0 #000" }}>
                    60 Years of Mechanical Excellence
                  </h1>
                  <p style={{ color: "#c8e0ff", fontFamily: "Tahoma,sans-serif", fontSize: 11, marginBottom: 14, lineHeight: 1.5 }}>
                    Trusted mechanical contracting for commercial &amp; industrial projects across New York and Pennsylvania.
                  </p>
                  <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                    <a href="#contact" className="win-btn-primary" style={{ textDecoration: "none", display: "inline-block", padding: "4px 16px", fontSize: 11 }}>
                      🖊 Request a Quote
                    </a>
                    <a href="#projects" className="win-btn" style={{ textDecoration: "none", display: "inline-block", padding: "4px 16px", fontSize: 11 }}>
                      📁 View Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Win2kWindow>

          {/* ── 2. TRUST BAR ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4, margin: "6px 0" }} className="grid-cols-2 md:grid-cols-4">
            {[
              { stat: "60+", label: "Years in Business" },
              { stat: "NY & PA", label: "Serving Southern Tier" },
              { stat: "Large-Scale", label: "Project Specialists" },
              { stat: "Skilled", label: "Workforce" },
            ].map(({ stat, label }) => (
              <div key={label} className="win-table-cell" style={{ fontSize: 11 }}>
                <div style={{ color: "#000080", fontWeight: "bold", fontSize: 16, fontFamily: "Tahoma,sans-serif" }}>{stat}</div>
                <div style={{ fontSize: 10, textTransform: "uppercase", fontFamily: "Tahoma,sans-serif", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>

          {/* ── 3. CAPABILITIES / SERVICES ── */}
          <section id="services">
            <Win2kWindow title="Our Capabilities — Services" icon={<Folder size={12} color="#ffff00" />} statusText="3 items">
              <div style={{ padding: "8px" }}>
                <SectionHeading>Our Capabilities</SectionHeading>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }} className="grid-cols-1 md:grid-cols-3">
                  {[
                    {
                      img: "https://static.wixstatic.com/media/86befe_bfb11a9a813e4995b726a5c1705093ae~mv2.jpg/v1/fill/w_467,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/process-pipe-e1589210436556.jpg",
                      title: "Process Piping",
                      desc: "Our process piping services are tailored to industrial and institutional clients, ensuring efficient and reliable systems that meet specific operational needs.",
                    },
                    {
                      img: "https://static.wixstatic.com/media/86befe_f520d96291dd43f98631c6418eecc0de~mv2.jpg/v1/fill/w_404,h_271,al_c,lg_1,q_80,enc_avif,quality_auto/86befe_f520d96291dd43f98631c6418eecc0de~mv2.jpg",
                      title: "HVAC Systems",
                      desc: "We specialize in designing and installing heating, ventilation, and air conditioning systems for commercial and institutional facilities.",
                    },
                    {
                      img: "https://static.wixstatic.com/media/86befe_ae23b4778f8043d3a2267cbb151f0272~mv2.jpg/v1/crop/x_0,y_2220,w_2268,h_1433/fill/w_467,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1454.jpg",
                      title: "Plumbing Solutions",
                      desc: "From new installations to maintenance and repairs, our plumbing services cover a wide range of needs, delivering durable and efficient solutions.",
                    },
                  ].map((svc) => (
                    <div key={svc.title} className="win-panel" style={{ overflow: "hidden" }}>
                      <div style={{ background: "linear-gradient(to right, #0a246a, #a6caf0)", color: "#fff", fontWeight: "bold", fontSize: 11, padding: "3px 6px" }}>
                        📁 {svc.title}
                      </div>
                      <img src={svc.img} alt={svc.title} style={{ width: "100%", height: 140, objectFit: "cover", display: "block", borderBottom: "1px solid #808080" }} />
                      <div style={{ padding: 8, backgroundColor: "#c0c0c0" }}>
                        <p style={{ fontFamily: "Tahoma,sans-serif", fontSize: 11, lineHeight: 1.5, color: "#000", margin: 0 }}>{svc.desc}</p>
                        <div style={{ marginTop: 8 }}>
                          <a href="#contact" className="win-btn" style={{ textDecoration: "none", display: "inline-block", fontSize: 10, padding: "2px 10px" }}>Learn More &gt;</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Win2kWindow>
          </section>

          {/* ── 4. PROJECT GALLERY ── */}
          <section id="projects" style={{ marginTop: 6 }}>
            <Win2kWindow title="Project Gallery — Photo Viewer" icon={<Folder size={12} color="#ffff00" />} statusText={`${galleryRow1.length + galleryRow2.length} items`}>
              <div style={{ padding: "8px 8px 0" }}>
                <SectionHeading>Project Gallery</SectionHeading>
                <p style={{ fontFamily: "Tahoma,sans-serif", fontSize: 11, marginBottom: 8, color: "#000" }}>
                  Explore our completed projects — mechanical contracting, process piping, HVAC, and plumbing solutions.
                </p>
              </div>
              <div className="pause-on-hover" style={{ overflow: "hidden", backgroundColor: "#000080", padding: "4px 0" }}>
                <div style={{ display: "flex", width: "200%" }} className="animate-marquee-left">
                  {[...galleryRow1, ...galleryRow1].map((src, i) => (
                    <div key={`r1-${i}`} style={{ flexShrink: 0, padding: "0 2px", width: 220 }}>
                      <img src={src} alt={`Project ${i}`} style={{ width: "100%", height: 130, objectFit: "cover", border: "2px solid", borderColor: "#808080 #fff #fff #808080", display: "block" }} />
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", width: "200%", marginTop: 4 }} className="animate-marquee-right">
                  {[...galleryRow2, ...galleryRow2].map((src, i) => (
                    <div key={`r2-${i}`} style={{ flexShrink: 0, padding: "0 2px", width: 220 }}>
                      <img src={src} alt={`Project ${i}`} style={{ width: "100%", height: 130, objectFit: "cover", border: "2px solid", borderColor: "#808080 #fff #fff #808080", display: "block" }} />
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ padding: "4px 8px 8px" }} />
            </Win2kWindow>
          </section>

          {/* ── 5. WHY KIMBLE ── */}
          <section style={{ marginTop: 6 }}>
            <Win2kWindow title="Why Choose Kimble Inc?" icon={<Shield size={12} color="#ffff00" />}>
              <div style={{ padding: 8 }}>
                <SectionHeading>Why Kimble Inc</SectionHeading>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }} className="grid-cols-2 md:grid-cols-4">
                  {[
                    { icon: <Shield size={20} />, title: "Decades of Experience", text: "60+ years delivering complex mechanical systems on time and on budget." },
                    { icon: <Clock size={20} />, title: "On Time, On Budget", text: "Project management discipline that keeps work on schedule and within scope." },
                    { icon: <Users size={20} />, title: "Strong Client Relations", text: "Long-term partnerships built on consistent performance and trust." },
                    { icon: <Award size={20} />, title: "Commitment to Quality", text: "Rigorous standards on every job site, every time, ensuring safety." },
                  ].map((item) => (
                    <div key={item.title} className="win-panel" style={{ padding: 8, textAlign: "center" }}>
                      <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
                        <div className="win-icon-box">{item.icon}</div>
                      </div>
                      <div style={{ fontFamily: "Tahoma,sans-serif", fontWeight: "bold", fontSize: 11, marginBottom: 4, color: "#000080" }}>{item.title}</div>
                      <div style={{ fontFamily: "Tahoma,sans-serif", fontSize: 10, lineHeight: 1.5, color: "#000" }}>{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Win2kWindow>
          </section>

          {/* ── 6. WHO WE WORK WITH ── */}
          <section style={{ marginTop: 6 }}>
            <Win2kWindow title="Who We Work With">
              <div style={{ padding: 8 }}>
                <SectionHeading>Who We Work With</SectionHeading>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {["Commercial Facilities", "Industrial Plants", "Institutional Buildings", "Government & Infrastructure"].map((client) => (
                    <div key={client} className="win-raised" style={{ padding: "4px 16px", fontFamily: "Tahoma,sans-serif", fontSize: 11, fontWeight: "bold", color: "#000080", textTransform: "uppercase" }}>
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            </Win2kWindow>
          </section>

          {/* ── 7. ABOUT ── */}
          <section id="about" style={{ marginTop: 6 }}>
            <Win2kWindow title="About Us — Built on Six Decades of Trust" icon={<Folder size={12} color="#ffff00" />}>
              <div style={{ padding: 8 }}>
                <SectionHeading>Built on Six Decades of Trust</SectionHeading>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="grid-cols-1 lg:grid-cols-2">
                  <div>
                    <p style={{ fontFamily: "Tahoma,sans-serif", fontSize: 11, lineHeight: 1.6, color: "#000", marginBottom: 8 }}>
                      Kimble Inc has been a cornerstone of mechanical contracting in the Southern Tier of New York and Northern Pennsylvania for over 60 years. From complex industrial piping systems to institutional HVAC installations, we have built our reputation one successful project at a time.
                    </p>
                    <p style={{ fontFamily: "Tahoma,sans-serif", fontSize: 11, lineHeight: 1.6, color: "#000", marginBottom: 12 }}>
                      Our workforce brings decades of hands-on experience to every job, and our clients return because we deliver. Experienced, technical, confident.
                    </p>
                    <a href="#contact" className="win-btn-primary" style={{ textDecoration: "none", display: "inline-block", padding: "5px 18px", fontSize: 11 }}>
                      Contact Us Today
                    </a>
                  </div>
                  <div>
                    <img
                      src={galleryRow1[1]}
                      alt="About Kimble Inc"
                      style={{ width: "100%", height: 220, objectFit: "cover", border: "2px solid", borderColor: "#808080 #fff #fff #808080", display: "block" }}
                    />
                  </div>
                </div>
              </div>
            </Win2kWindow>
          </section>

          {/* ── 8. TEAM ── */}
          <section id="team" style={{ marginTop: 6 }}>
            <Win2kWindow title="Our Team — Trusted Mechanical Experts" icon={<Users size={12} color="#ffff00" />} statusText={`${team.length} personnel`}>
              <div style={{ padding: 8 }}>
                <SectionHeading>Your Trusted Mechanical Experts</SectionHeading>
                <p style={{ fontFamily: "Tahoma,sans-serif", fontSize: 11, marginBottom: 10, color: "#000" }}>
                  Our team of skilled professionals is dedicated to delivering top-notch mechanical contracting services.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }} className="grid-cols-2 md:grid-cols-3">
                  {team.map((member, i) => (
                    <div key={i} className="win-panel" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 8 }}>
                      <div style={{ width: 80, height: 80, overflow: "hidden", border: "2px solid", borderColor: "#808080 #fff #fff #808080", marginBottom: 6, flexShrink: 0 }}>
                        <img
                          src={member.photo}
                          alt={member.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)", transition: "filter 0.3s" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.filter = "none"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%)"; }}
                        />
                      </div>
                      <div style={{ fontFamily: "Tahoma,sans-serif", fontWeight: "bold", fontSize: 11, color: "#000", textAlign: "center" }}>{member.name}</div>
                      <div style={{ fontFamily: "Tahoma,sans-serif", fontSize: 10, color: "#000080", textAlign: "center", marginTop: 2 }}>{member.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Win2kWindow>
          </section>

          {/* ── 9. CONTACT FORM ── */}
          <section id="contact" style={{ marginTop: 6 }}>
            <Win2kWindow title="Contact Us — Request a Consultation" icon={<Globe size={12} color="#ffff00" />}>
              <div style={{ padding: 8, maxWidth: 640, margin: "0 auto" }}>
                <SectionHeading>Have a Project in Mind?</SectionHeading>
                <p style={{ fontFamily: "Tahoma,sans-serif", fontSize: 11, marginBottom: 10, color: "#000" }}>
                  Please complete the form below and a member of our team will contact you shortly.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    <div>
                      <label style={{ fontFamily: "Tahoma,sans-serif", fontSize: 11, display: "block", marginBottom: 2 }}>Name:</label>
                      <input
                        {...register("name")}
                        placeholder="Your full name"
                        className="win-input"
                        data-testid="input-contact-name"
                      />
                      {errors.name && <span style={{ color: "#cc0000", fontSize: 10, fontFamily: "Tahoma,sans-serif" }}>{errors.name.message}</span>}
                    </div>
                    <div>
                      <label style={{ fontFamily: "Tahoma,sans-serif", fontSize: 11, display: "block", marginBottom: 2 }}>Company:</label>
                      <input
                        {...register("company")}
                        placeholder="Company name"
                        className="win-input"
                        data-testid="input-contact-company"
                      />
                      {errors.company && <span style={{ color: "#cc0000", fontSize: 10, fontFamily: "Tahoma,sans-serif" }}>{errors.company.message}</span>}
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    <div>
                      <label style={{ fontFamily: "Tahoma,sans-serif", fontSize: 11, display: "block", marginBottom: 2 }}>Email Address:</label>
                      <input
                        {...register("email")}
                        placeholder="you@company.com"
                        type="email"
                        className="win-input"
                        data-testid="input-contact-email"
                      />
                      {errors.email && <span style={{ color: "#cc0000", fontSize: 10, fontFamily: "Tahoma,sans-serif" }}>{errors.email.message}</span>}
                    </div>
                    <div>
                      <label style={{ fontFamily: "Tahoma,sans-serif", fontSize: 11, display: "block", marginBottom: 2 }}>Phone Number:</label>
                      <input
                        {...register("phone")}
                        placeholder="(607) 000-0000"
                        type="tel"
                        className="win-input"
                        data-testid="input-contact-phone"
                      />
                      {errors.phone && <span style={{ color: "#cc0000", fontSize: 10, fontFamily: "Tahoma,sans-serif" }}>{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div>
                    <label style={{ fontFamily: "Tahoma,sans-serif", fontSize: 11, display: "block", marginBottom: 2 }}>Project Type:</label>
                    <select
                      {...register("projectType")}
                      className="win-input"
                      data-testid="input-contact-project-type"
                      style={{ cursor: "pointer" }}
                    >
                      <option value="">-- Select project type --</option>
                      <option value="process-piping">Process Piping</option>
                      <option value="hvac-systems">HVAC Systems</option>
                      <option value="plumbing">Plumbing Solutions</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.projectType && <span style={{ color: "#cc0000", fontSize: 10, fontFamily: "Tahoma,sans-serif" }}>{errors.projectType.message}</span>}
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 4 }}>
                    <button
                      type="submit"
                      className="win-btn-primary"
                      data-testid="btn-contact-submit"
                      disabled={submitStatus === "loading"}
                      style={{ padding: "5px 24px", fontSize: 11 }}
                    >
                      {submitStatus === "loading" ? "Submitting..." : "Submit Request"}
                    </button>
                    <button
                      type="reset"
                      className="win-btn"
                      style={{ padding: "5px 16px", fontSize: 11 }}
                      onClick={() => reset()}
                    >
                      Cancel
                    </button>
                  </div>

                  {submitStatus === "ok" && (
                    <div style={{ backgroundColor: "#d4edda", border: "1px solid #808080", padding: 8, fontFamily: "Tahoma,sans-serif", fontSize: 11, color: "#155724" }}>
                      ✔ Your request has been received. We will contact you shortly.
                    </div>
                  )}
                </form>
              </div>
            </Win2kWindow>
          </section>

        </main>

        {/* ═══════════════ FOOTER ═══════════════ */}
        <footer style={{ backgroundColor: "#000080", color: "#ffffff", borderTop: "3px solid #0a246a", padding: "12px 16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }} className="grid-cols-1 md:grid-cols-3">
            <div>
              <div style={{ backgroundColor: "#ffffff", display: "inline-block", padding: 4, marginBottom: 8 }}>
                <img
                  style={{ height: 48, width: "auto", objectFit: "contain" }}
                  src="https://static.wixstatic.com/media/86befe_5b343736e3ec4e908a01349ffd887b0e~mv2.jpg/v1/fill/w_927,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/86befe_5b343736e3ec4e908a01349ffd887b0e~mv2.jpg"
                  alt="Kimble Inc"
                />
              </div>
              <p style={{ fontFamily: "Tahoma,sans-serif", fontSize: 10, color: "#c8d8ff", lineHeight: 1.5 }}>
                The established authority in mechanical contracting.<br />60+ years of proven results.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "Tahoma,sans-serif", fontWeight: "bold", fontSize: 11, color: "#ffffff", textTransform: "uppercase", marginBottom: 6, borderBottom: "1px solid #c8d8ff", paddingBottom: 3 }}>
                Contact Us
              </div>
              <div style={{ fontFamily: "Tahoma,sans-serif", fontSize: 10, color: "#c8d8ff", lineHeight: 1.8 }}>
                <div>Kimble Inc</div>
                <div>1004 Sullivan St</div>
                <div>Elmira, NY 14901</div>
                <div><a href="tel:6077344123" style={{ color: "#ffff99", textDecoration: "underline" }}>(607) 734-4123</a></div>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "Tahoma,sans-serif", fontWeight: "bold", fontSize: 11, color: "#ffffff", textTransform: "uppercase", marginBottom: 6, borderBottom: "1px solid #c8d8ff", paddingBottom: 3 }}>
                Service Regions
              </div>
              <div style={{ fontFamily: "Tahoma,sans-serif", fontSize: 10, color: "#c8d8ff", lineHeight: 1.8 }}>
                <div>Southern Tier, New York</div>
                <div>Northern Pennsylvania</div>
              </div>
              <div style={{ marginTop: 10, fontFamily: "Courier New,monospace", fontSize: 10, color: "#c8d8ff", border: "1px inset #808080", backgroundColor: "#000040", padding: "4px 8px", display: "inline-block" }}>
                Visitors: 0️⃣0️⃣4️⃣2️⃣6️⃣
              </div>
            </div>
          </div>
          <div style={{ marginTop: 12, paddingTop: 8, borderTop: "1px solid #4060a0", fontFamily: "Tahoma,sans-serif", fontSize: 10, color: "#8898cc", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4 }}>
            <span>© 2026 Kimble Inc. All rights reserved. Best viewed in Internet Explorer 6.0 at 1024×768.</span>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="#" style={{ color: "#8898cc", textDecoration: "underline" }}>Privacy Policy</a>
              <a href="#" style={{ color: "#8898cc", textDecoration: "underline" }}>Terms of Service</a>
            </div>
          </div>
        </footer>

        {/* Browser status bar */}
        <div className="win-statusbar" style={{ fontSize: 10 }}>
          <span className="win-statusbar-cell">Done</span>
          <span className="win-statusbar-cell">Internet zone</span>
          <span style={{ marginLeft: "auto" }}>
            <span className="win-statusbar-cell">🔒 SSL</span>
          </span>
        </div>

      </div>{/* end browser chrome */}

    </div>
  );
}
