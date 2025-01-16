import React from 'react';
import '../App.css'; // Ensure the shared background styles are available

const EducationPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12 text-white shared-background">
      {/* Header */}
      <h1 className="text-5xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Journey</span>
      </h1>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center gap-16 w-full max-w-6xl">
        {/* Education Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-6">Bachelor of Science degree</h2>
          <div className="space-y-6">
            {/* Single Education Card */}
            <div className="shared-background p-6 rounded-lg border-2 border-cyan-400 shadow-md">
              <h3 className="text-2xl font-bold">BSc (HONS) In Information Technology Specializing InformationTechnology - SLIIT</h3>
              <p className="text-gray-300">July 2022 - Present</p>
              <p className="mt-2 text-gray-400">
                
              <br/>
                I specialized in InformationTechnology, focusing on full-stack development and scalable systems.


                <br/>
              </p>
            </div>
          </div>
        </div>


{/* Education Section */}
<div className="flex-1">
          <h2 className="text-3xl font-semibold mb-6">G.C.E Advanced Level</h2>
          <div className="space-y-6">
            {/* Single Education Card */}

            <div className="shared-background p-6 rounded-lg border-2 border-cyan-400 shadow-md">
              <h3 className="text-2xl font-bold">G.C.E Advanced Level 2020 Physical Science-
              Polonnaruwa Muslim National School</h3>
              <p className="text-gray-300">2016-2019</p>
              <p className="mt-2 text-gray-400"> 
              <br/>
                Null
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default EducationPage;

