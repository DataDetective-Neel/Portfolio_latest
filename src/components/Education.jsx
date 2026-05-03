import SectionWrapper from "./SectionWrapper";

const Education = () => {
  return (
    <SectionWrapper id="education">

      <h2 className="text-3xl font-bold mb-10">
        Archived Records
      </h2>

      <div className="space-y-6">

        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h3 className="font-semibold">
            B.Tech in Computer Science & Engineering
          </h3>

          <p className="text-blue-400 text-sm">
            NIIT University • 2024 – 2028
          </p>

          <p className="text-gray-400 text-sm mt-2">
            CGPA: 9.24 / 10
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h3 className="font-semibold">KPS Udaan</h3>

          <p className="text-gray-400 text-sm">
            Senior Secondary: 92.8% • Secondary: 96.6%
          </p>
        </div>

      </div>

    </SectionWrapper>
  );
};

export default Education;