import { motion } from "framer-motion";

export default function CaseModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center">

      {/* BACKDROP CLICK */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* MODAL */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-[#0b1220]/90 border border-blue-500/20 rounded-xl p-8 max-w-2xl w-full z-10"
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-white mb-2">
          {project.title}
        </h2>

        {/* DESC */}
        <p className="text-gray-400 mb-4">
          {project.description}
        </p>

        {/* TECH */}
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

        {/* ACTIONS */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10"
          >
            GitHub
          </a>

          <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
            Live Demo
          </button>
        </div>
      </motion.div>
    </div>
  );
}