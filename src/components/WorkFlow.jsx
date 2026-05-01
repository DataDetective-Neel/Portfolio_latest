import { motion } from "framer-motion";

export default function Workflow() {
  return (
    <section className="relative px-10 py-28 bg-[#020617] overflow-hidden">

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#3b82f6_1px,transparent_1px),linear-gradient(90deg,#3b82f6_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* TOP LABELS */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-xs tracking-widest text-blue-400/60 flex gap-6">
        <span>ML SYSTEMS</span>
        <span>•</span>
        <span>DATA PIPELINES</span>
        <span>•</span>
        <span>ANALYTICS</span>
      </div>

      {/* TITLE */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-3xl font-semibold text-white mb-3">
          Investigation Process
        </h2>
        <p className="text-gray-400 text-sm">
          From ambiguity to production systems
        </p>
      </div>

      {/* MAIN PANEL */}
      <div className="relative max-w-6xl mx-auto">

        {/* PANEL BG */}
        <div className="absolute inset-0 bg-[#0b1220]/50 backdrop-blur-xl border border-blue-500/10 rounded-2xl" />

        {/* FLOW LINE */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blue-500/20" />

        {/* STEPS */}
        <div className="relative grid md:grid-cols-4 gap-6 p-10 z-10">

          {[
            {
              title: "Investigate",
              desc: "Frame problems into testable hypotheses.",
            },
            {
              title: "Analyze",
              desc: "Extract signals and uncover patterns.",
            },
            {
              title: "Solve",
              desc: "Build reliable, scalable systems.",
            },
            {
              title: "Automate",
              desc: "Deploy pipelines with feedback loops.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="relative text-center group"
            >
              {/* NODE */}
              <div className="mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-[#020617] border border-blue-500/20 text-blue-400 text-sm font-semibold relative">
                0{i + 1}

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* TITLE */}
              <h3 className="text-white font-semibold mb-2">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm leading-relaxed px-2">
                {step.desc}
              </p>

              {/* CONNECTOR DOT */}
              <div className="hidden md:block absolute top-[28px] left-[-50%] w-full h-[1px] bg-blue-500/20 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* CORNER GLOW */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 blur-3xl" />
      </div>
    </section>
  );
}