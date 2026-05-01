import CaseCard from "./CaseCard";

export default function Cases() {
  const data = [
    {
      title: "AeroSphinx",
      desc: "Air quality prediction using satellite AOD data",
      tech: ["Python", "Random Forest", "Power BI"]
    },
    {
      title: "PipelineIQ",
      desc: "CI/CD failure resolution using LLMs",
      tech: ["Kafka", "Docker", "LLM"]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mt-20">
      <h2 className="text-2xl font-bold mb-6">Featured Case Files</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((d, i) => (
          <CaseCard key={i} {...d} />
        ))}
      </div>
    </section>
  );
}