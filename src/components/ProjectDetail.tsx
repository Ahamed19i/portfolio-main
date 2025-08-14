

import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects, Project } from "../data/ProjectsData";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project: Project | undefined =
    id !== undefined ? projects.find((p) => p.id === parseInt(id)) : undefined;

  if (!project)
    return (
      <p className="p-10 text-center text-red-500 font-bold">
        Projet introuvable
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto p-10 space-y-6">
      {/* Titre */}
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        {project.title}
      </h1>

      {/* Images (taille moyenne) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-xl shadow-lg"
        />
        {/* Si tu veux plusieurs images par projet, tu peux dupliquer cette balise img ici */}
      </div>

      {/* Description détaillée */}
      <div className="text-white text-base space-y-4 leading-relaxed">
        {project.description.split("\n").map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Technologies utilisées */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-white mb-2">
          Technologies utilisées :
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="badge badge-accent text-white bg-accent py-1 px-3 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bouton retour à la fin */}
      <div className="mt-6">
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md font-semibold transition"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
