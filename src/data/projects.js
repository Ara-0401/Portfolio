// ─────────────────────────────────────────────────────────────
// projects.js  –  Add a new project here; the UI updates itself.
// ─────────────────────────────────────────────────────────────

export const featuredProjects = [
  {
    id: 1,
    title: "Mumble Chat",
    description:
      "Full-stack chat app with Socket.IO real-time messaging, DM rooms, typing indicators, online-status tracking, and read-receipts.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS"],
    github: "https://github.com/Ara-0401/Mumble-chat",
    live: "",
  },
  {
    id: 2,
    title: "Chatter Space",
    description:
      "Real-time group chat application with room-based messaging, user registration and login, and a REST API backend.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Ara-0401/Chatter-Space",
    live: "",
  },
  {
    id: 3,
    title: "Meal Tracker",
    description:
      "Full-stack food dashboard to log meals with name, type, location, calories, and cost. Visualises intake data with Recharts charts.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Recharts", "Tailwind CSS"],
    github: "https://github.com/Ara-0401/Food-Tracker",
    live: "",
  },
  {
    id: 4,
    title: "Recipe Finder",
    description:
      "Upload recipes with an image (stored in Supabase), title, description and ingredients. Browse and delete recipes from a MongoDB-backed REST API.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Supabase Storage", "Tailwind CSS"],
    github: "https://github.com/Ara-0401/Recipe-Finder",
    live: "",
  },
  {
    id: 5,
    title: "Expense Tracker",
    description:
      "Frontend expense tracker that logs income and expense transactions, computes a running balance, and displays live totals — pure React state, no backend.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "",
    live: "",
  },
  {
    id: 6,
    title: "Gallery",
    description:
      "Fetches photos from the Lorem Picsum API and displays them in a responsive masonry grid with previous/next page pagination.",
    tech: ["React", "Vite", "Tailwind CSS", "Axios"],
    github: "",
    live: "",
  },
];

export const otherProjects = [
  { id: 7, title: "Amazon Clone", tech: ["HTML", "CSS"], github: "", live: "" },
  { id: 8, title: "Eatfit Clone",  tech: ["HTML", "CSS"], github: "", live: "" },
];
