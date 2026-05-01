import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",
    title: "AeroSphinx (PM2.5 Prediction)",
    desc: "Built ML pipeline for air quality prediction using satellite + ground data.",
  },
  {
    year: "2025",
    title: "PipelineIQ",
    desc: "Designed CI/CD failure analysis system using logs + ML insights.",
  },
  {
    year: "2024",
    title: "DocuMentor",
    desc: "Developed RAG-based AI assistant for document understanding.",
  },
  {
    year: "2024",
    title: "Started Data Science Journey",
    desc: "Focused on ML, system design, and real-world problem solving.",
  },
];

export default function Timeline() {
  return (
    <section className="relative px-10 py-28 bg-[#020617] overflow-hidden">

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(#3b82f6_1px,transparent_1px),linear-gradient(90deg,#3b82f6_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* TITLE */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-semibold text-white mb-2">
          Experience Timeline
        </h2>
        <p className="text-gray-400 text-sm">
          My journey in building intelligent systems
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-4xl mx-auto">

        {/* LINE */}
        <div className="absolute left-4 top-0 w-[2px] h-full bg-blue-500/20" />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 6 }}
              className="relative flex items-start gap-6"
            >
              {/* DOT */}
              <div className="relative z-10">
                <div className="w-4 h-4 bg-blue-400 rounded-full" />
                <div className="absolute inset-0 w-4 h-4 bg-blue-400 blur-md opacity-60" />
              </div>

              {/* CARD */}
              <div className="bg-[#0b1220]/60 backdrop-blur-xl border border-blue-500/10 rounded-xl p-6 w-full">
                
                {/* YEAR */}
                <p className="text-blue-400 text-sm mb-1">
                  {item.year}
                </p>

                {/* TITLE */}
                <h3 className="text-white font-semibold mb-2">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* TOP LINE */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-blue-400/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}