import { useState } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Phone, Copy, Check, GraduationCap, Code2, Globe } from 'lucide-react';

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sachin07asp@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Intro & Primary Information */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Unboxed subtle kicker metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-medium">
              <span>B.Sc. Computer Science</span>
              <span aria-hidden="true">·</span>
              <span>Tamil Nadu, India</span>
              <span aria-hidden="true">·</span>
              <span>Student Portfolio</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
                Hi, I'm <span className="text-stone-900 underline decoration-stone-300 decoration-2 underline-offset-4">Sachin K</span>.
              </h1>
              <p className="text-lg text-stone-700 leading-relaxed max-w-xl">
                Computer Science student passionate about software programming, core problem-solving, and practical development. Proficient in Python, Java, C, and HTML.
              </p>
            </div>

            {/* Secondary simple summary / languages */}
            <div className="text-sm text-stone-600 space-y-1.5 pt-1">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-stone-800">Spoken Languages:</span>
                <span>Tamil, English</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-stone-800">Primary Focus:</span>
                <span>Software development & foundational computing concepts</span>
              </p>
            </div>

            {/* Quick Action Links & Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-4 py-2.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                View Project
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/sachin07asp"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-sm font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-stone-700" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sachin-k-b2a942445"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-blue-700" />
                LinkedIn
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3.5 py-2.5 text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-stone-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Quick Contact Strip */}
            <div className="pt-2 border-t border-stone-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-600">
              <a
                href="mailto:sachin07asp@gmail.com"
                className="hover:text-stone-950 inline-flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                <span>sachin07asp@gmail.com</span>
              </a>
              <a
                href="tel:7339173344"
                className="hover:text-stone-950 inline-flex items-center gap-1.5 transition-colors font-mono tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-stone-400" />
                <span>+91 7339173344</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Text Profile Card (No photo) */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-full max-w-sm bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-5">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div>
                  <h3 className="font-bold text-stone-900 text-base">Profile Overview</h3>
                  <p className="text-xs text-stone-500">Sachin K · Student Summary</p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center font-bold text-sm">
                  SK
                </div>
              </div>

              {/* Key details list */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-stone-500 font-medium">Education</span>
                  <span className="text-stone-900 font-semibold text-right">B.Sc. Computer Science (Pursuing)</span>
                </div>
                
                <div className="flex items-center justify-between gap-2">
                  <span className="text-stone-500 font-medium">12th State Board</span>
                  <span className="text-stone-900 font-mono font-semibold">73% Aggregate</span>
                </div>

                <div className="flex items-start justify-between gap-2 pt-1 border-t border-stone-100">
                  <span className="text-stone-500 font-medium">Top Skills</span>
                  <span className="text-stone-800 font-mono text-right">Python (80%), Java (75%), C (70%), HTML (70%)</span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-stone-500 font-medium">Languages</span>
                  <span className="text-stone-800">Tamil, English</span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-stone-500 font-medium">Featured Repo</span>
                  <a
                    href="https://github.com/sachin07asp/Minipro.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-900 underline font-mono hover:text-stone-600"
                  >
                    Minipro.git
                  </a>
                </div>
              </div>

              {/* Actions inside card */}
              <div className="pt-2 border-t border-stone-100 space-y-2">
                {onOpenResume && (
                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="w-full py-2 px-3 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors text-center cursor-pointer"
                  >
                    View Quick Summary Card
                  </button>
                )}
                <a
                  href="#contact"
                  className="block w-full py-2 px-3 text-xs font-medium text-stone-600 hover:text-stone-900 border border-stone-200 rounded-lg transition-colors text-center"
                >
                  Get In Touch
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
