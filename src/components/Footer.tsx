import { Github, Linkedin, Mail, Phone, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800">
          <div>
            <span className="text-lg font-bold text-white tracking-tight">
              Sachin K
            </span>
            <p className="text-xs text-stone-400 mt-1 max-w-sm">
              Computer Science student building clean code in Python, Java, C, and HTML. Based in Tamil Nadu, India.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href="https://github.com/sachin07asp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sachin-k-b2a942445"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 inline-flex items-center gap-1.5 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:sachin07asp@gmail.com"
              className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>sachin07asp@gmail.com</span>
            </a>
            <a
              href="tel:7339173344"
              className="hover:text-white inline-flex items-center gap-1.5 transition-colors font-mono tabular-nums"
            >
              <Phone className="w-4 h-4" />
              <span>7339173344</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Sachin K · Personal Portfolio Website.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-stone-300 inline-flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
