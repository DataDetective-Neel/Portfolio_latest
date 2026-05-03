import SectionWrapper from "./SectionWrapper";

const Contact = () => {
  return (
    <SectionWrapper id="contact" variant="center">

      <div className="text-center">

        <h2 className="text-3xl font-bold mb-6">
          Communication Channel
        </h2>

        <p className="text-gray-400 mb-6">
          Open to collaborations, research, and building impactful systems.
        </p>

        <div className="flex justify-center gap-6">

          <a href="mailto:datadetectiveneel@gmail.com" className="text-blue-400 hover:underline">
            Email
          </a>

          <a href="https://github.com/DataDetective-Neel" className="text-blue-400 hover:underline">
            GitHub
          </a>

          <a href="https://linkedin.com/in/indraneel-chatterjee007" className="text-blue-400 hover:underline">
            LinkedIn
          </a>

        </div>

      </div>

    </SectionWrapper>
  );
};

export default Contact;