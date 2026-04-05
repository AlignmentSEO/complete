import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const SCAN_URL = "https://calendly.com/hello-alignmentseo/30min";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 px-6 py-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <Link to="/" className="font-heading text-xl tracking-tight text-foreground">
          Alignment<span className="text-accent">SEO</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:3134237225"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            313-423-7225
          </a>
          <a
            href={SCAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-accent transition"
          >
            Free Alignment Scan
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 rounded-lg bg-card border border-border p-4 space-y-3" style={{ boxShadow: "var(--shadow-card)" }}>
          <a href="tel:3134237225" className="block px-3 py-2 text-sm text-card-foreground hover:bg-muted rounded-md">
            313-423-7225
          </a>
          <a
            href={SCAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block text-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium"
          >
            Free Alignment Scan
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;