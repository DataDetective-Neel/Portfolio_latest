import SectionWrapper from "./SectionWrapper";

const Skills = () => {
  const skills = [
    "Python", "SQL", "FastAPI", "Docker",
    "Kafka", "LangChain", "Pandas", "XGBoost"
  ];

  return (
    <SectionWrapper id="skills" variant="right">

      <h2 className="text-3xl font-bold mb-10">Investigation Toolkit</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((s) => (
          <div
            key={s}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-blue-400/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition"
          >
            {s}
          </div>
        ))}
      </div>

    </SectionWrapper>
  );
};

export default Skills;