const SectionWrapper = ({ id, children, variant = "default" }) => {
  return (
    <section
      id={id}
      className="relative bg-[#020617] text-white py-24 px-6 overflow-hidden"
    >
      {/* ===== GRID (GLOBAL CONSISTENCY) ===== */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(#1e293b_1px,transparent_1px),linear-gradient(90deg,#1e293b_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ===== VARIANT GLOW ===== */}
      {variant === "center" && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-600/10 blur-[140px]" />
      )}

      {variant === "left" && (
        <div className="absolute left-0 top-0 w-[50%] h-full bg-gradient-to-r from-blue-900/10 to-transparent" />
      )}

      {variant === "right" && (
        <div className="absolute right-0 top-0 w-[50%] h-full bg-gradient-to-l from-blue-900/10 to-transparent" />
      )}

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;