import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gradient-to-b from-green-950 via-emerald-950 to-black text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
 <div className="flex items-center gap-3 mb-5">
  <img
    src={logo}
    alt="Logo"
    className="h-10 w-10 md:h-12 md:w-12 object-contain drop-shadow-md"
  />

  <span className="font-serif text-lg md:text-xl font-bold">
    Suzanne Collins
  </span>
</div>
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

        <div className="border-t border-primary-foreground/10 mt-10 pt-8 pb-4 flex flex-col items-center gap-6 text-center">
          <div className="max-w-3xl">
            <h5 className="font-serif text-accent font-semibold mb-2">Educational Project Disclaimer</h5>
            <p className="text-primary-foreground/60 text-xs sm:text-sm leading-relaxed mb-4">
              This website is a student academic project created for Human Computer Interaction and Graphic Design coursework. All copyrights, trademarks, book titles, and related content belong to Suzanne Collins and respective copyright owners. This project is non-commercial and made purely for educational purposes.
            </p>
            <p className="text-primary-foreground/80 text-sm font-medium">
              Designed & Developed by [Fasih Ur Rehman & Abdullah Tanveer]
            </p>
            <p className="text-primary-foreground/50 text-xs mt-1">
              [University Of Gujrat] | Department of Computer Science | Academic Year 2026
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 mt-4 rounded-full bg-primary-foreground/5 hover:bg-primary-foreground/10 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
            aria-label="Back to top"
          >
            Back to top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
