import React from "react";

const CaseModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] max-w-3xl bg-[#020617] border border-blue-500/20 rounded-2xl p-6 shadow-[0_0_40px_rgba(59,130,246,0.2)] animate-[fadeIn_0.3s_ease]"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-400 hover:text-white text-lg"
        >
          ✕
        </button>

        {/* Image */}
        <div className="overflow-hidden rounded-lg mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-52 object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2 text-white">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.details}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
          >
            View GitHub
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 border border-white/20 rounded-lg hover:border-white/40 transition"
          >
            Close Case
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseModal;