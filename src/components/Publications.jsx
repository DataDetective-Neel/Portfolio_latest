import SectionWrapper from "./SectionWrapper";

const Publications = () => {
  return (
    <SectionWrapper id="publications">

      <h2 className="text-3xl font-bold mb-10">
        Research Evidence
      </h2>

      <div className="bg-white/5 border border-white/10 p-6 rounded-xl">

        <h3 className="font-semibold">
          Relative Aging Comparisons of Coherent Systems
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          Published in Foundations and Emerging Trends in Contemporary Multidisciplinary Science
        </p>

        <a
          href="https://doi.org/10.5281/zenodo.19692035"
          target="_blank"
          className="text-blue-400 text-sm mt-3 inline-block hover:underline"
        >
          View Publication →
        </a>

      </div>

    </SectionWrapper>
  );
};

export default Publications;