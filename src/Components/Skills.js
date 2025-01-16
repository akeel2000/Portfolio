import React from 'react';

const SkillsPage = () => {
  // Define skills data
  const codingSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'PHP', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'C', level: 80 },
    { name: 'C#', level: 80 },
    { name: 'C++', level: 80 },
    { name: 'Java', level: 80 },
    { name: 'R', level: 80 },
    { name: 'sql', level: 80 },
    { name: 'Kotlin', level: 80 },
    

  ];

  const professionalSkills = [
    { name: 'Web Design', level: 95 },
    { name: 'Web Development', level: 87 },
    { name: 'Graphic Design', level: 75 },
    { name: 'App development', level: 75 },
    { name: 'Data analyst', level: 70},

    
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12 text-white shared-background">
      {/* Header */}
      <h1 className="text-5xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Skills</span>
      </h1>

      {/* Skills Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Coding Skills Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Coding Skills</h2>
          <div className="space-y-4">
            {codingSkills.map((skill, index) => (
              <div key={index} className="relative group">
                {/* Skill Title and Percentage */}
                <div className="flex justify-between mb-1">
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-lg font-medium">{skill.level}%</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-cyan-400 h-4 rounded-full transition-width duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                {/* Tooltip */}
                <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-cyan-400 text-black text-sm font-medium px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.level}% Proficiency
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Professional Skills</h2>
          <div className="space-y-4">
            {professionalSkills.map((skill, index) => (
              <div key={index} className="relative group">
                {/* Skill Title and Percentage */}
                <div className="flex justify-between mb-1">
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-lg font-medium">{skill.level}%</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-cyan-400 h-4 rounded-full transition-width duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                {/* Tooltip */}
                <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-cyan-400 text-black text-sm font-medium px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.level}% Proficiency
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
