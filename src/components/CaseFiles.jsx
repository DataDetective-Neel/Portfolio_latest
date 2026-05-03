import React, { useState } from "react";
import CaseModal from "./CaseModal";
import { projects } from "../data/portfolioData";

const CaseFiles = () => {
  const [selected, setSelected] = useState(null);

  return (
    <SectionWrapper id="cases" variant="center">
    <section className="relative bg-[#020617] text-white py-24 px-6 overflow-hidden">

      {/* ===== BACKGROUND LAYERS ===== */}

      {/* grid */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(#1e293b_1px,transparent_1px),linear-gradient(90deg,#1e293b_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-600/10 blur-[140px]" />

      {/* side fades */}
      <div className="absolute left-0 top-0 w-[25%] h-full bg-gradient-to-r from-[#020617] to-transparent" />
      <div className="absolute right-0 top-0 w-[25%] h-full bg-gradient-to-l from-[#020617] to-transparent" />

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="flex justify-between items-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Case Files
          </h2>

          <p className="text-blue-400 cursor-pointer hover:underline">
            View all cases →
          </p>
        </div>

        {/* ===== CARDS GRID ===== */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >

              {/* image */}
              <img
                src={p.image}
                alt={p.title}
                className="h-44 w-full object-cover"
              />

              {/* content */}
              <div className="p-5">

                <p className="text-xs text-blue-400 mb-2">
                  DD-00{p.id}
                </p>

                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition">
                  {p.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {p.description}
                </p>

                <button
                  onClick={() => setSelected(p)}
                  className="text-blue-400 text-sm hover:underline"
                >
                  Open Case →
                </button>
              </div>

              {/* glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl"></div>
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ===== MODAL ===== */}
      <CaseModal project={selected} onClose={() => setSelected(null)} />

    </section>
    </SectionWrapper>
  );
};

export default CaseFiles;