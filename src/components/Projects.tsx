import { useState } from 'react';
import { Github, ExternalLink, Copy, Check, Terminal, FolderGit2, BookOpen } from 'lucide-react';
import projectPreviewImg from '../assets/images/minipro_preview_1792645731133.jpg';

export default function Projects() {
  const [copiedClone, setCopiedClone] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'setup' | 'tech'>('overview');

  const cloneCommand = 'git clone https://github.com/sachin07asp/Minipro.git';
  const repoUrl = 'https://github.com/sachin07asp/Minipro.git';
  const githubProfileUrl = 'https://github.com/sachin07asp';

  const handleCopyClone = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <section id="projects" className="py-14 sm:py-20 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-10">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span>Portfolio Work</span>
            <span aria-hidden="true">·</span>
            <span>Software Development</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              Featured Project
            </h2>
            <a
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-stone-800 hover:text-stone-950 inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
            >
              <span>Explore all repos on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl">
            Practical application of programming concepts, structured code, and problem-solving.
          </p>
        </div>

        {/* Featured Project Showcase Card */}
        <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Thumbnail */}
            <div className="lg:col-span-6 relative aspect-video lg:aspect-auto bg-stone-100 overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-200">
              {!imgError ? (
                <img
                  src={projectPreviewImg}
                  alt="Minipro - Academic Programming Project"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full min-h-[260px] flex flex-col items-center justify-center p-8 bg-stone-900 text-stone-100 text-center">
                  <Terminal className="w-12 h-12 text-stone-400 mb-3" />
                  <h4 className="text-lg font-bold font-mono">Minipro.git</h4>
                  <p className="text-xs text-stone-400 mt-1 max-w-xs">
                    Academic Mini Project Repository by Sachin K
                  </p>
                </div>
              )}
            </div>

            {/* Project Details Panel */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-stone-500 font-mono mb-1">
                      <FolderGit2 className="w-3.5 h-3.5 text-stone-400" />
                      <span>sachin07asp / Minipro</span>
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900">
                      Minipro
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md">
                    Academic Mini Project
                  </span>
                </div>

                {/* Interactive View Tabs */}
                <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg text-xs font-medium w-fit">
                  <button
                    type="button"
                    onClick={() => setActiveTab('overview')}
                    className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'overview'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('setup')}
                    className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'setup'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Git Clone
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('tech')}
                    className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'tech'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Tech Focus
                  </button>
                </div>

                {/* Tab content 1: Overview */}
                {activeTab === 'overview' && (
                  <div className="space-y-3 text-sm text-stone-600 leading-relaxed">
                    <p>
                      <strong>Minipro</strong> is an academic mini project created by Sachin K to implement key programming logic, structured data handling, and algorithmic problem-solving.
                    </p>
                    <p>
                      Built as part of coursework in Computer Science, it demonstrates solid foundations in code cleanliness, modular functions, and step-by-step logic execution.
                    </p>
                  </div>
                )}

                {/* Tab content 2: Git Clone & Setup */}
                {activeTab === 'setup' && (
                  <div className="space-y-3">
                    <p className="text-xs text-stone-600">
                      You can clone this repository locally to inspect the source code and run the files:
                    </p>
                    <div className="p-3 bg-stone-900 text-stone-200 rounded-lg font-mono text-xs flex items-center justify-between gap-2 overflow-x-auto">
                      <span className="truncate select-all">{cloneCommand}</span>
                      <button
                        type="button"
                        onClick={handleCopyClone}
                        className="shrink-0 p-1.5 hover:bg-stone-800 rounded text-stone-300 hover:text-white transition-colors"
                        title="Copy command"
                      >
                        {copiedClone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    {copiedClone && (
                      <p className="text-xs text-emerald-700 font-medium">
                        ✓ Clone command copied to clipboard!
                      </p>
                    )}
                  </div>
                )}

                {/* Tab content 3: Tech Focus */}
                {activeTab === 'tech' && (
                  <div className="space-y-2 text-xs text-stone-600">
                    <div className="flex items-center gap-2 text-stone-700 font-medium">
                      <span>Key technologies & topics involved:</span>
                    </div>
                    <ul className="space-y-1.5 pl-4 list-disc text-stone-600">
                      <li>Algorithm design and functional modularization</li>
                      <li>Clean control flow, data validation, and console/file I/O</li>
                      <li>Version control tracking with Git & GitHub commits</li>
                    </ul>
                  </div>
                )}

                {/* Tech tags - Unboxed text style */}
                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-stone-500 font-mono">
                  <span>Git</span>
                  <span aria-hidden="true">·</span>
                  <span>Python / Java / C</span>
                  <span aria-hidden="true">·</span>
                  <span>Console Logic</span>
                  <span aria-hidden="true">·</span>
                  <span>Algorithms</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center gap-3">
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Open Minipro on GitHub</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyClone}
                  className="px-3.5 py-2 text-xs font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedClone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>Copy Clone URL</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
