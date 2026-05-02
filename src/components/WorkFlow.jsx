import React from "react";

const Workflow = () => {
  return (
    <section className="relative min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* ===== BACKGROUND GRID ===== */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(#1e293b_1px,transparent_1px),linear-gradient(90deg,#1e293b_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ===== SIDE GLOW ===== */}
      <div className="absolute left-0 top-0 w-[40%] h-full bg-gradient-to-r from-blue-900/10 to-transparent" />
      <div className="absolute right-0 top-0 w-[40%] h-full bg-gradient-to-l from-blue-900/10 to-transparent" />

      {/* ===== TOP BINARY STRIP ===== */}
      <div className="absolute top-0 left-0 w-full text-[10px] text-blue-500 opacity-10 whitespace-nowrap overflow-hidden pointer-events-none">
        0101011010010101010101010010101010101010101010101010010101010101
      </div>

      {/* ===== LEFT FINGERPRINT ===== */}
    <div className="absolute left-10 top-1/2 -translate-y-1/2 pointer-events-none">

  {/* Outer glow */}
  <div className="absolute w-[200px] h-[200px] rounded-full bg-blue-500/10 blur-3xl" />

  {/* Inner ring */}
  <div className="w-[160px] h-[160px] rounded-full border border-blue-500/20 flex items-center justify-center">

    {/* Scanner lines */}
    <div className="w-[120px] h-[120px] rounded-full border border-blue-500/10 relative">
      
      <div className="absolute inset-0 border border-blue-500/5 rounded-full scale-90" />
      <div className="absolute inset-0 border border-blue-500/5 rounded-full scale-75" />

      {/* scanning line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-blue-400/30 animate-pulse" />
    </div>

  </div>
</div>

      {/* ===== RIGHT DATA STREAM ===== */}
      <div className="absolute right-10 top-24 opacity-20 pointer-events-none">
        <svg width="200" height="60" viewBox="0 0 200 60">
          <polyline
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            points="0,40 20,30 40,35 60,20 80,30 100,25 120,15 140,20 160,10 180,15 200,8"
          />
        </svg>
        <p className="text-xs text-blue-400 mt-1">DATA STREAM</p>
      </div>

      {/* ===== LEFT STATUS ===== */}
      <div className="absolute left-6 top-20 border border-green-500/30 rounded-lg px-4 py-2 text-sm text-green-400 bg-green-500/5">
        <p className="text-xs opacity-60">CASE FLOW</p>
        <p>● Active Investigation</p>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">

        <p className="text-blue-400 text-xs tracking-widest mb-3">
          CASE PROTOCOL
        </p>

        <h2 className="text-4xl font-bold mb-2">
          Investigation Process
        </h2>

        <p className="text-gray-400 mb-12">
          From ambiguity to production systems
        </p>

        {/* ===== PROCESS CARD ===== */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-8 py-10 max-w-6xl w-full">

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-start">

    {/* STEP 1 */}
    <div className="group">
      <p className="text-blue-400 text-sm mb-2">01</p>
      <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition">
        Investigate
      </h3>
      <p className="text-gray-400 text-sm">
        Frame ambiguous problems into testable hypotheses.
      </p>
    </div>

    {/* STEP 2 */}
    <div className="group border-l border-white/10 md:border-l pl-6">
      <p className="text-blue-400 text-sm mb-2">02</p>
      <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition">
        Analyze
      </h3>
      <p className="text-gray-400 text-sm">
        Interrogate signals and uncover patterns.
      </p>
    </div>

    {/* STEP 3 */}
    <div className="group border-l border-white/10 md:border-l pl-6">
      <p className="text-blue-400 text-sm mb-2">03</p>
      <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition">
        Solve
      </h3>
      <p className="text-gray-400 text-sm">
        Translate findings into reliable systems.
      </p>
    </div>

    {/* STEP 4 */}
    <div className="group border-l border-white/10 md:border-l pl-6">
      <p className="text-blue-400 text-sm mb-2">04</p>
      <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition">
        Automate
      </h3>
      <p className="text-gray-400 text-sm">
        Deploy pipelines with monitoring & feedback loops.
      </p>
    </div>

  </div>
</div>

          </div>

    </section>
  );
};

export default Workflow;