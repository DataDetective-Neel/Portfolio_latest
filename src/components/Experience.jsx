import SectionWrapper from "./SectionWrapper";

const experience = [
  {
    role: "Sponsorship Core Member",
    org: "Entente 2026 – International Conference",
    time: "Dec 2025 – Apr 2026",
    desc: "Led structured outreach pipelines and managed high-value partnerships across multiple stakeholders.",
  },
  {
    role: "Sponsorship Lead",
    org: "siNUsoid – Tech Fest",
    time: "Apr 2025 – Dec 2025",
    desc: "Secured record-breaking sponsorships using data-driven targeting and coordinated cross-functional execution.",
  },
  {
    role: "Learning Assistant",
    org: "CoEET, NIIT University",
    time: "Jan 2025 – Mar 2025",
    desc: "Worked on research workflows, data analysis, and institutional decision-support systems.",
  },
];

const Experience = () => {
  return (
    <SectionWrapper id="experience">

      <h2 className="text-3xl font-bold mb-12">
        Case History Log
      </h2>

      <div className="space-y-6">
        {experience.map((e, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-blue-400/40 transition"
          >
            <p className="text-blue-400 text-xs mb-1">CASE 0{i + 1}</p>

            <h3 className="text-lg font-semibold">{e.role}</h3>

            <p className="text-gray-400 text-sm mb-2">
              {e.org} • {e.time}
            </p>

            <p className="text-gray-400 text-sm">
              {e.desc}
            </p>
          </div>
        ))}
      </div>

    </SectionWrapper>
  );
};

export default Experience;