import { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, Printer } from 'lucide-react';

interface QuickResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickResumeModal({ isOpen, onClose }: QuickResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const summaryText = `Sachin K - Computer Science Student
Email: sachin07asp@gmail.com
Phone: +91 7339173344
GitHub: https://github.com/sachin07asp
LinkedIn: https://www.linkedin.com/in/sachin-k-b2a942445

EDUCATION:
- Pursuing B.Sc. Computer Science
- 12th Standard State Board: 73%

TECHNICAL SKILLS:
- Python (80%)
- Java (75%)
- C Programming (70%)
- HTML (70%)

LANGUAGES:
- Tamil, English

FEATURED PROJECT:
- Minipro: https://github.com/sachin07asp/Minipro.git`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-2xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <div>
            <h3 className="text-base font-bold text-stone-900">
              Candidate Quick Summary
            </h3>
            <p className="text-xs text-stone-500">
              Condensed 1-page profile view for Sachin K
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
            aria-label="Close summary modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Summary Paper */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-stone-700 font-sans">
          
          {/* Header block */}
          <div className="pb-4 border-b border-stone-200">
            <h2 className="text-xl font-bold text-stone-900">
              Sachin K
            </h2>
            <p className="text-stone-600 text-xs mt-0.5">
              B.Sc. Computer Science Undergraduate · Tamil Nadu, India
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-stone-600">
              <span>Email: <strong>sachin07asp@gmail.com</strong></span>
              <span>·</span>
              <span>Phone: <strong>+91 7339173344</strong></span>
              <span>·</span>
              <a
                href="https://github.com/sachin07asp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 hover:underline"
              >
                github.com/sachin07asp
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/sachin-k-b2a942445"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] text-stone-500">
              Education
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-stone-900 text-sm">B.Sc. Computer Science</span>
                  <div className="text-stone-600">Core Computing, Programming & Algorithms</div>
                </div>
                <span className="font-semibold text-stone-800">Currently Pursuing</span>
              </div>
              <div className="flex justify-between items-baseline pt-1">
                <div>
                  <span className="font-bold text-stone-900 text-sm">12th Standard Higher Secondary</span>
                  <div className="text-stone-600">State Board Examination</div>
                </div>
                <span className="font-mono font-bold text-stone-900">73% Marks</span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] text-stone-500">
              Technical Proficiency
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
                <div className="text-stone-500 text-[10px]">Programming</div>
                <div className="font-bold text-stone-900 text-sm">Python</div>
                <div className="text-xs font-mono font-semibold text-stone-700">80%</div>
              </div>
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
                <div className="text-stone-500 text-[10px]">OOP Language</div>
                <div className="font-bold text-stone-900 text-sm">Java</div>
                <div className="text-xs font-mono font-semibold text-stone-700">75%</div>
              </div>
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
                <div className="text-stone-500 text-[10px]">Procedural / Core</div>
                <div className="font-bold text-stone-900 text-sm">C</div>
                <div className="text-xs font-mono font-semibold text-stone-700">70%</div>
              </div>
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
                <div className="text-stone-500 text-[10px]">Web Markup</div>
                <div className="font-bold text-stone-900 text-sm">HTML</div>
                <div className="text-xs font-mono font-semibold text-stone-700">70%</div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-1">
            <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] text-stone-500">
              Spoken Languages
            </h4>
            <p className="text-stone-800">
              <strong>Tamil</strong> (Native / Fluent) · <strong>English</strong> (Fluent / Professional)
            </p>
          </div>

          {/* Featured Project */}
          <div className="space-y-2">
            <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] text-stone-500">
              Academic Project
            </h4>
            <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-stone-900 text-sm">Minipro</span>
                <a
                  href="https://github.com/sachin07asp/Minipro.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 underline font-mono text-xs flex items-center gap-1"
                >
                  <span>Repository URL</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-stone-600 text-xs">
                Academic mini project exploring programming fundamentals, clean logic execution, and source control.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-stone-200 bg-stone-50">
          <button
            type="button"
            onClick={handleCopySummary}
            className="px-3.5 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-200 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Summary Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Text Summary</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-200 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
