import { Code2, Globe, Languages, Terminal, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const technicalSkills = [
    {
      name: 'Python',
      percentage: 80,
      description: 'Core syntax, problem solving, data structures, automation scripts, and algorithmic challenges.',
      topics: ['Data Structures', 'File Handling', 'Algorithm Practice', 'OOP Concepts'],
    },
    {
      name: 'Java',
      percentage: 75,
      description: 'Object-Oriented Programming (OOP), class hierarchies, encapsulation, collections, and modular programming.',
      topics: ['Classes & Objects', 'Inheritance', 'Exception Handling', 'Collections'],
    },
    {
      name: 'C Programming',
      percentage: 70,
      description: 'Procedural programming fundamentals, pointers, memory allocation, arrays, and low-level logic.',
      topics: ['Pointers & Memory', 'Functions', 'Structures', 'Control Flow'],
    },
    {
      name: 'HTML',
      percentage: 70,
      description: 'Semantic markup, accessible web document structuring, forms, tables, and clean layout foundations.',
      topics: ['Semantic Tags', 'Web Forms', 'Layout Elements', 'Accessibility Basics'],
    },
  ];

  const spokenLanguages = [
    {
      language: 'Tamil',
      proficiency: 'Native Language',
      level: 'Full Professional Proficiency',
      description: 'Mother tongue, fluent in reading, writing, and verbal communication.',
    },
    {
      language: 'English',
      proficiency: 'Professional Working',
      level: 'Fluent Working Proficiency',
      description: 'Strong technical reading, documentation, and verbal communication skills.',
    },
  ];

  return (
    <section id="skills" className="py-14 sm:py-20 border-b border-stone-200 bg-stone-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-10">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span>Core Competencies</span>
            <span aria-hidden="true">·</span>
            <span>Technical & Spoken</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Skills & Proficiency
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl">
            Self-assessed proficiency ratings based on academic projects, coursework, and practical coding exercises.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {technicalSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs space-y-4"
            >
              {/* Skill Title & Percentage */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="p-1.5 rounded-md bg-stone-100 text-stone-800">
                    <Terminal className="w-4 h-4" />
                  </span>
                  <h3 className="font-bold text-stone-900 text-base">
                    {skill.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-base font-bold font-mono tabular-nums text-stone-900">
                    {skill.percentage}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-stone-800 h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>

              {/* Summary Description */}
              <p className="text-xs text-stone-600 leading-relaxed">
                {skill.description}
              </p>

              {/* Topics checked */}
              <div className="pt-2 border-t border-stone-100 flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-500">
                {skill.topics.map((topic, i) => (
                  <span key={i} className="inline-flex items-center gap-1">
                    <span className="text-stone-400">·</span>
                    <span>{topic}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Spoken Languages Sub-section */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
            <span className="p-2 rounded-lg bg-stone-100 text-stone-800">
              <Languages className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-stone-900">
                Languages Known
              </h3>
              <p className="text-xs text-stone-500">
                Languages for collaboration, technical discussions, and documentation
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {spokenLanguages.map((lang) => (
              <div
                key={lang.language}
                className="p-4 rounded-lg bg-stone-50 border border-stone-200/80 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-stone-900 text-base">
                    {lang.language}
                  </h4>
                  <span className="text-xs font-medium text-stone-600">
                    {lang.proficiency}
                  </span>
                </div>
                <p className="text-xs text-stone-600">
                  {lang.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 pt-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{lang.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
