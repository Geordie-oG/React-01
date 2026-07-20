import { NavLink, Navigate, Route, Routes, useLocation } from "react-router-dom";

const pageContent = {
  "/greetings": {
    eyebrow: "Welcome",
    title: "Greetings!",
    description: "Hello, and welcome to my first routed React application.",
    icon: "👋",
    accent: "coral",
  },
  "/profiles": {
    eyebrow: "About me",
    title: "My Profile",
    description:
      "I am a web development student who enjoys turning ideas into useful, friendly experiences.",
    icon: "🧑‍💻",
    accent: "blue",
  },
  "/my-hobbies": {
    eyebrow: "After class",
    title: "My Hobbies",
    description:
      "In my free time, I enjoy coding small projects, listening to music, and exploring new places.",
    icon: "🎧",
    accent: "violet",
  },
};

const links = [
  { to: "/greetings", label: "Greetings" },
  { to: "/profiles", label: "Profiles" },
  { to: "/my-hobbies", label: "My Hobbies" },
];

function PageCard() {
  const { pathname } = useLocation();
  const content = pageContent[pathname] ?? pageContent["/greetings"];

  return (
    <article className={`page-card page-card--${content.accent}`}>
      <div className="page-card__icon" aria-hidden="true">
        {content.icon}
      </div>
      <p className="page-card__eyebrow">{content.eyebrow}</p>
      <h1>{content.title}</h1>
      <p className="page-card__description">{content.description}</p>
    </article>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#/greetings" aria-label="Home">
          RC
        </a>

        <nav aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/greetings" replace />} />
          <Route path="/greetings" element={<PageCard />} />
          <Route path="/profiles" element={<PageCard />} />
          <Route path="/my-hobbies" element={<PageCard />} />
          <Route path="*" element={<Navigate to="/greetings" replace />} />
        </Routes>
      </main>

      <footer>One component. Three routes. Built with React.</footer>
    </div>
  );
}
