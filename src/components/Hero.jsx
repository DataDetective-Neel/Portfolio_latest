import { FaGithub, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white bg-black">

      {/* DETECTIVE IMAGE */}
      <motion.img
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        src="/detective.png"
        alt="detective"
        className="absolute left-[-5%] top-0 h-full w-auto object-cover opacity-100"
        style={{ filter: "brightness(1.2) contrast(1.1)" }}
      />

      {/* MOON GLOW */}
      <div className="absolute left-[5%] top-[10%] w-[600px] h-[600px] bg-blue-500/20 blur-[120px]" />

      {/* GLOBAL OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* RIGHT GRID */}
      <div className="absolute right-0 top-0 w-[45%] h-full 
        bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] 
        bg-[size:30px_30px] opacity-30">
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

      {/* EXTRA UI DETAILS */}
      <div className="absolute top-20 right-20 text-[10px] text-blue-400 opacity-50 tracking-widest">
        STATUS: ACTIVE • MODE: DETECT
      </div>

      <div className="absolute top-24 right-20 w-40 h-[1px] bg-blue-400 opacity-30 animate-pulse" />

      <div className="absolute top-20 right-40 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-ping" />

      {/* MAIN GRID */}
      <div className="relative z-10 h-full w-full flex items-center">

        {/* LEFT SPACE */}
        <div className="w-[40%]" />

        {/* CENTER CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[35%] space-y-6"
        >

          <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full tracking-widest">
            DATA SCIENCE PORTFOLIO
          </span>

          <h1 className="text-7xl font-extrabold leading-tight">
            <span className="text-white">Indraneel</span><br />
            <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.9)]">
              Chatterjee
            </span>
          </h1>

          <h2 className="text-yellow-400 font-semibold">Data Detective</h2>

          <p className="text-gray-300 max-w-md">
            Solving complex data problems using ML, systems, and intelligent pipelines.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-2 bg-blue-500 rounded-lg 
            hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]
            transition-all duration-300">
              View Case Files
            </button>

            <button className="px-6 py-2 border border-gray-500 rounded-lg flex items-center gap-2 
            hover:bg-white/10 transition-all">
              <FaFileAlt /> Resume
            </button>

            <button className="px-6 py-2 border border-gray-500 rounded-lg flex items-center gap-2 
            hover:bg-white/10 transition-all">
              <FaGithub /> GitHub
            </button>
          </div>

        </motion.div>

        {/* RIGHT PANEL */}
        <div className="w-[25%] flex justify-end pr-16">

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ y: -8 }}
            className="relative w-[460px] 
            bg-[#0b1220]/60 backdrop-blur-3xl
            border border-blue-500/40 rounded-xl p-8 
            shadow-[0_0_140px_rgba(59,130,246,0.5)]
            overflow-hidden
            hover:shadow-[0_0_180px_rgba(59,130,246,0.7)]
            transition-all duration-500"
          >

            {/* ACCENT LINE */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-400/60 blur-[2px]" />

            {/* GRID */}
            <div className="absolute inset-0 
            bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.04)_1px,transparent_1px)] 
            bg-[size:25px_25px]" />

            {/* EXTRA SOFT BLUR */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

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
          </motion.div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="absolute bottom-6 left-6 text-xs text-blue-400 opacity-40">
        51.5074° N, 0.1278° W
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs text-gray-400 tracking-widest opacity-60">
        SCROLL TO EXPLORE
        <div className="mt-2 w-4 h-4 border-b border-r border-gray-400 rotate-45 mx-auto"></div>
      </div>

    </section>
  );
}