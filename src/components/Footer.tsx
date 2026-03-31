import { Link } from "react-router-dom";
import { BookOpen, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-accent" />
              <span className="font-serif text-xl font-bold">Suzanne Collins</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Author of The Hunger Games trilogy, The Underland Chronicles, and more. 
              Creating worlds that challenge, inspire, and endure.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-accent">Navigate</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/books", label: "Books" },
                { to: "/about", label: "About" },
                { to: "/news", label: "News" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-accent">Series</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <span>The Hunger Games Trilogy</span>
              <span>The Underland Chronicles</span>
              <span>Standalone Works</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Fan tribute site. Not officially affiliated with Suzanne Collins or her publishers.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-primary-foreground/40 hover:text-accent transition-colors text-xs"
            aria-label="Back to top"
          >
            Back to top <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
