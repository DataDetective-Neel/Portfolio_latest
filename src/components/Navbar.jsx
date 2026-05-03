import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "workflow", label: "Process" },
  { id: "cases", label: "Case Files" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Toolkit" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) {
            current = sec.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-lg font-semibold text-blue-400">
          DataDetective
        </h1>

        {/* LINKS */}
        <div className="flex gap-6 text-sm">

          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className={`transition ${
                active === sec.id
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {sec.label}
            </a>
          ))}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;