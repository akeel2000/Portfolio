import React from 'react';
import Coffee from '../Assets/Coffee.png';
import Vehicle from '../Assets/VehicleService.png';
import Inventory from '../Assets/Inventory.png';


const ProjectPage = () => {
  // List of projects
  const projects = [
    {
      title: "Coffe Shop Website",
      description: "Null",
      image: Coffee,  // Replace with your actual image path
      link: "https://coffeeakee.netlify.app/",
    },
    {
      title: "Vehicle Service Center Website",
      description: "Null",
      image: Vehicle, // Replace with your actual image path
      link: "https://github.com/akeel2000/Vehicle_Service_next_gen_html_css_js_php_mysql",
    },
    {
      title: "Inventory Managment System",
      description: "Null",
      image:Inventory, // Replace with your actual image path
      link: "https://github.com/akeel2000/Vehicle-management-system-MERN-project",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12 text-white shared-background">
      {/* Header */}
      <h1 className="text-5xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Projects</span>
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-shared p-6 rounded-lg border-2 border-cyan-400 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            {/* Project Title */}
            <h2 className="text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h2>
            {/* Project Description */}
            <p className="text-gray-300 mb-4">{project.description}</p>
            {/* Project Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;

