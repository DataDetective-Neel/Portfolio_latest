import React, { useState } from "react";
import CaseModal from "./CaseModal";
import { projects } from "../data/portfolioData";

const CaseFiles = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative bg-[#020617] text-white py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(#1e293b_1px,transparent_1px),linear-gradient(90deg,#1e293b_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px]" />
      <div className="absolute left-0 top-0 w-[30%] h-full bg-gradient-to-r from-[#020617] to-transparent" />
<div className="absolute right-0 top-0 w-[30%] h-full bg-gradient-to-l from-[#020617] to-transparent" />
<div className="relative z-10">
  {/* your entire CaseFiles content */}

      {/* Title */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Featured Case Files</h2>
        <p className="text-blue-400 cursor-pointer">
          View all cases →
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-blue-500/30 transition"
          >
            <img
              src={p.image}
              className="rounded mb-3 h-40 w-full object-cover"
            />

            <p className="text-xs text-blue-400 mb-1">
              DD-00{p.id}
            </p>

            <h3 className="font-semibold text-lg mb-2">
              {p.title}
            </h3>

            <p className="text-gray-400 text-sm mb-3">
              {p.description}
            </p>

            <button
              onClick={() => setSelected(p)}
              className="text-blue-400 text-sm"
            >
              Open Case →
            </button>
          </div>
        ))}

      </div>

      {/* Modal */}
      <CaseModal project={selected} onClose={() => setSelected(null)} />
    </div></section>
  );
};

export default CaseFiles;