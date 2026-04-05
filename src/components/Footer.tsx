import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="px-6 py-10 border-t border-border">
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <Link to="/" className="font-heading text-foreground text-lg">
            Alignment<span className="text-accent">SEO</span>
          </Link>
          <p className="text-muted-foreground text-xs mt-1">Grosse Pointe, St. Clair Shores, Metro Detroit</p>
        </div>
        <a href="tel:3134237225" className="text-sm text-muted-foreground hover:text-foreground transition">
          313-423-7225
        </a>
      </div>
      <div className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} AlignmentSEO. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;