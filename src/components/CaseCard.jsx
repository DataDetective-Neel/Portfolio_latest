export default function CaseCard({ title, desc, tech }) {
  return (
    <div className="bg-[#0b1220]/70 backdrop-blur-lg border border-gray-800 rounded-xl p-5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition">

      <p className="text-xs text-blue-400 mb-2">DD-001</p>

      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <p className="text-gray-400 mt-2 text-sm">{desc}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t, i) => (
          <span key={i} className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300">
            {t}
          </span>
        ))}
      </div>

      <button className="mt-4 text-blue-400 text-sm hover:underline">
        Open case →
      </button>
    </div>
  );
}