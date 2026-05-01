import { FaGithub, FaFileAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white bg-black">

      {/* DETECTIVE IMAGE */}
      <img
        src="/detective.png"
        alt="detective"
        className="absolute left-[-5%] top-0 h-full w-auto object-cover opacity-100"
      />
      
      {/* MOON GLOW */}
      <div className="absolute left-[5%] top-[10%] w-[600px] h-[600px] bg-blue-500/20 blur-[120px]" />


      {/* GLOBAL OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* RIGHT GRID */}
      <div className="absolute right-0 top-0 w-[45%] h-full 
        bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] 
        bg-[size:40px_40px] opacity-20">

        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent" />
      </div>

      {/* SYSTEM STATUS */}
      <div className="absolute left-5 top-5 hidden md:block">
        <div className="border border-blue-500/30 rounded-md p-3 bg-black/40 backdrop-blur">
          <p className="text-xs text-blue-400 mb-1">SYSTEM STATUS</p>
          <p className="text-green-400 text-xs">● All systems operational</p>
        </div>
      </div>

      {/* TOP TEXT */}
      <div className="absolute top-24 left-[45%] text-[10px] text-blue-400 opacity-40 tracking-widest hidden md:block">
        ML SYSTEMS • DATA PIPELINES • ANALYTICS
      </div>


      {/* MAIN GRID LAYOUT */}
      <div className="relative z-10 h-full w-full flex items-center">

        {/* LEFT (EMPTY FOR IMAGE BALANCE) */}
        <div className="w-[45%]" />

        {/* CENTER CONTENT */}
        <div className="w-[30%] space-y-6">

          <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full tracking-widest">
            DATA SCIENCE PORTFOLIO
          </span>

          <h1 className="text-7xl font-extrabold leading-tight">
            <span className="text-white">Indraneel</span><br />
            <span className="text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
              Chatterjee
            </span>
          </h1>

          <h2 className="text-yellow-400 font-semibold">Data Detective</h2>

          <p className="text-gray-300 max-w-md">
            Solving complex data problems using ML, systems, and intelligent pipelines.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-2 bg-blue-500 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              View Case Files
            </button>
            <button className="px-6 py-2 border border-gray-500 rounded-lg flex items-center gap-2">
              <FaFileAlt /> Resume
            </button>
            <button className="px-6 py-2 border border-gray-500 rounded-lg flex items-center gap-2">
              <FaGithub /> GitHub
            </button>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="w-[25%] flex justify-end pr-12">

          <div className="relative w-[440px] bg-[#0b1220]/40 backdrop-blur-2xl 
          border border-blue-500/50 rounded-xl p-6 
          shadow-[0_0_100px_rgba(59,130,246,0.35)]
          overflow-hidden">

            {/* ACCENT LINE */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-400/10 blur-[2px]" />

            {/* INNER GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />

            {/* GRID */}
            <div className="absolute inset-0 
            bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.08)_1px,transparent_1px)] 
            bg-[size:25px_25px]" />

            <div className="relative z-10">

              <p className="text-xs text-blue-400 mb-2">CASE NOTE</p>

              <p className="text-gray-300 text-sm mb-4">
                In a world full of data, I find the patterns others miss.  
                Let’s solve the next case.
              </p>

              {/* BAR GRAPH */}
              <div className="flex items-end gap-2 h-[60px] mb-4">
                <div className="w-2 h-8 bg-blue-500/60"></div>
                <div className="w-2 h-12 bg-blue-500/80"></div>
                <div className="w-2 h-6 bg-blue-500/50"></div>
                <div className="w-2 h-14 bg-blue-500"></div>
              </div>

              {/* LINE GRAPH */}
              <svg width="100%" height="80">
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  points="0,60 40,40 80,50 120,30 160,45 200,20"
                />
              </svg>

              <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-blue-300 opacity-70">
                <div>01</div>
                <div>02</div>
                <div>03</div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM COORDINATES */}
      <div className="absolute bottom-6 left-6 text-xs text-blue-400 opacity-40">
        51.5074° N, 0.1278° W
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs text-gray-400 tracking-widest opacity-60">
        SCROLL TO EXPLORE
        <div className="mt-2 w-4 h-4 border-b border-r border-gray-400 rotate-45 mx-auto"></div>
      </div>

    </section>
  );
}