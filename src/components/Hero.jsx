export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center pt-20">

      {/* BACKGROUND IMAGE */}
      <img
        src="/detective.png"
        alt="detective"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK BASE OVERLAY */}
<div className="absolute inset-0 bg-black/30"></div>

{/* LEFT DARK GRADIENT (VERY IMPORTANT) */}
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

{/* BLUE GLOW */}
<div className="absolute inset-0 bg-blue-500/10 blur-3xl"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center px-10 md:px-24">

        <div className="max-w-xl">
          <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg shadow-blue-500/40 transition">
          <span className="text-xs px-3 py-1 bg-blue-500/20 rounded-full text-blue-300">
            DATA SCIENCE PORTFOLIO
          </span></button>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight drop-shadow-lg">
            Indraneel <br />
            <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">Chatterjee</span>
          </h1>

          <h2 className="text-xl mt-3 text-yellow-400 font-semibold drop-shadow">
            Data Detective
          </h2>
          
          <p className="mt-4 text-gray-300">
            Solving complex data problems using ML, systems, and intelligent pipelines.
          </p>

        </div>
      </div>
    </section>
  );
}