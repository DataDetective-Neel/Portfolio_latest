import SectionWrapper from "./SectionWrapper";

const certs = [
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "Coursera (IBM)",
    link: "ADD_YOUR_LINK_HERE",
  },
  {
    title: "Python 3 Programming Specialization",
    issuer: "University of Michigan",
    link: "ADD_YOUR_LINK_HERE",
  },
];

const Certifications = () => {
  return (
    <SectionWrapper id="certifications" variant="center">

      <h2 className="text-3xl font-bold mb-10">
        Verified Evidence
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {certs.map((c, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-green-400/40 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] transition"
          >
            <p className="text-green-400 text-xs mb-2">
              ✔ VERIFIED
            </p>

            <h3 className="font-semibold mb-1">{c.title}</h3>

            <p className="text-gray-400 text-sm mb-3">
              {c.issuer}
            </p>

            <a
              href={c.link}
              target="_blank"
              className="text-blue-400 text-sm hover:underline"
            >
              View Certificate →
            </a>
          </div>
        ))}

      </div>

    </SectionWrapper>
  );
};

export default Certifications;