import { motion } from "framer-motion";

const cases = [
  {
    id: "DD-001",
    title: "AeroSphinx",
    subtitle: "Air Quality Prediction (PM2.5)",
    description:
      "Built a high-resolution air quality forecasting system using satellite AOD data and ground observations.",
    tech: ["Python", "XGBoost", "Pandas", "Streamlit"],
  },
  {
    id: "DD-002",
    title: "PipelineIQ",
    subtitle: "CI/CD Failure Resolution System",
    description:
      "Engineered an ML-assisted failure triage system that identifies root causes from CI/CD logs and suggests fixes.",
    tech: ["FastAPI", "Docker", "PostgreSQL", "Kafka"],
  },
  {
    id: "DD-003",
    title: "DocuMentor",
    subtitle: "AI Document Assistant",
    description:
      "Developed a retrieval-augmented assistant for long-form technical documents with citation-first responses.",
    tech: ["RAG", "LangChain", "FAISS", "OpenAI"],
  },
];

export default function CaseFiles() {
  return (
    <section className="relative px-10 py-24 bg-[#020617] overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#3b82f6_1px,transparent_1px),linear-gradient(90deg,#3b82f6_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* HEADER */}
      <div className="flex justify-between items-center mb-12 relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Featured Case Files
        </h2>

        <span className="text-blue-400 text-sm cursor-pointer hover:underline">
          View all cases →
        </span>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 relative z-10">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="relative bg-[#0b1220]/60 backdrop-blur-xl border border-blue-500/10 rounded-xl p-6 overflow-hidden group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-300" />

            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-blue-400/20 group-hover:bg-blue-400/40 transition" />

            {/* ID */}
            <p className="text-xs text-blue-400 mb-2 tracking-wider">
              {item.id}
            </p>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-1">
              {item.title}
            </h3>

            {/* Subtitle */}
            <p className="text-sm text-gray-400 mb-3">
              {item.subtitle}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              {item.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bottom link */}
            <span className="text-sm text-blue-400 hover:underline cursor-pointer">
              Open case →
            </span>

            {/* Subtle Corner Glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}