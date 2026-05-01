import { motion } from "framer-motion";

const steps = [
  {
    title: "Investigate",
    desc: "Frame ambiguous problems into testable hypotheses.",
  },
  {
    title: "Analyze",
    desc: "Interrogate signals and uncover patterns.",
  },
  {
    title: "Solve",
    desc: "Translate findings into reliable systems.",
  },
  {
    title: "Automate",
    desc: "Deploy pipelines with monitoring & feedback loops.",
  },
];

export default function Workflow() {
  return (
    <section className="relative px-10 py-28 bg-[#020617] overflow-hidden">

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(#3b82f6_1px,transparent_1px),linear-gradient(90deg,#3b82f6_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-white mb-2">
          Investigation Process
        </h2>
        <p className="text-gray-400 text-sm">
          From ambiguity to production systems
        </p>
      </div>

      {/* MAIN STRIP */}
      <div className="relative max-w-6xl mx-auto">

        {/* GLASS PANEL */}
        <div className="bg-[#0b1220]/60 backdrop-blur-xl border border-blue-500/10 rounded-2xl px-10 py-10 flex justify-between items-center">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="text-center flex-1 relative group"
            >
              {/* NUMBER */}
              <div className="text-blue-400 text-sm mb-2 opacity-60">
                0{i + 1}
              </div>

              {/* TITLE */}
              <h3 className="text-white font-semibold mb-2">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm px-4 leading-relaxed">
                {step.desc}
              </p>

              {/* DIVIDER */}
              {i !== steps.length - 1 && (
                <div className="absolute top-1/2 right-0 w-[1px] h-16 bg-blue-500/10 -translate-y-1/2" />
              )}

              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition" />
            </motion.div>
          ))}
        </div>

        {/* SUBTLE GLOW */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/10 blur-3xl" />
      </div>
    </section>
  );
}