import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const educationItems = [
    {
      degree: 'B.Sc. Computer Science',
      institution: 'Undergraduate Program',
      status: 'Currently Pursuing',
      period: 'Present',
      score: null,
      description:
        'Focused on fundamental computer science principles including Object-Oriented Programming, Data Structures, Operating Systems, Database Management, and Software Engineering.',
      highlights: [
        'Programming in Python, Java, and C',
        'Database concepts and Web basics (HTML)',
        'Core algorithmic problem solving',
      ],
    },
    {
      degree: 'Higher Secondary Certificate (12th Standard)',
      institution: 'State Board of School Examinations',
      status: 'Completed',
      period: 'Higher Secondary',
      score: '73%',
      description:
        'Completed higher secondary education under the State Board curriculum with 73% overall marks, building a strong base in science and mathematics.',
      highlights: [
        'State Board Examination',
        'Final Score: 73% aggregate',
        'Foundation in Computer Science & Mathematics',
      ],
    },
  ];

  return (
    <section id="education" className="py-14 sm:py-20 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-10">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span>Academic Background</span>
            <span aria-hidden="true">·</span>
            <span>Education History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Education
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl">
            My academic journey and qualifications in computer science and foundational studies.
          </p>
        </div>

        {/* Education List Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-stone-200 rounded-xl p-6 hover:border-stone-300 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="space-y-1">
                    <span className="text-xs text-stone-500 font-medium">
                      {item.institution}
                    </span>
                    <h3 className="text-lg font-bold text-stone-900">
                      {item.degree}
                    </h3>
                  </div>

                  {item.score ? (
                    <div className="text-right shrink-0">
                      <div className="text-xs text-stone-500">Score</div>
                      <div className="text-lg font-bold font-mono tabular-nums text-stone-900">
                        {item.score}
                      </div>
                    </div>
                  ) : (
                    <div className="text-right shrink-0">
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        {item.status}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key focus bullet list */}
                <ul className="space-y-1.5 text-xs text-stone-600 mb-4">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer status info */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-stone-400" />
                  {item.period}
                </span>
                {item.score && (
                  <span className="font-medium text-stone-700">
                    State Board Certified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
