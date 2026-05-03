export const projects = [
  {
    id: 1,
    title: "AeroSphinx (PM2.5 Prediction)",
    description:
      "Air quality prediction using satellite + ground data with ML models.",
    details:
      "Built a high-resolution PM2.5 prediction pipeline combining satellite data with ground observations. Used XGBoost for modeling and deployed via Streamlit dashboard.",
    tech: ["Python", "XGBoost", "Pandas", "Streamlit"],
    github: "https://github.com/your-link",
    image: "/earth.png",
  },
  {
    id: 2,
    title: "PipelineIQ",
    description:
      "CI/CD failure analysis using logs and ML-based insights.",
    details:
      "Developed an ML-assisted failure triage system analyzing CI/CD logs. Suggested root causes and automated debugging hints.",
    tech: ["FastAPI", "Docker", "PostgreSQL", "Kafka"],
    github: "https://github.com/thelegendaryarticuno/hacktofuture4-D02",
    image: "/code.png",
  },
  {
    id: 3,
    title: "DocuMentor",
    description:
      "RAG-based AI assistant for document understanding.",
    details:
      "Built a retrieval-augmented assistant using LangChain + FAISS. Enabled semantic search and contextual answers from documents.",
    tech: ["LangChain", "FAISS", "OpenAI"],
    github: "https://github.com/your-link",
    image: "/doc.png",
  },
];