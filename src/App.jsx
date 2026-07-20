import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const pageContent = {
  "/greetings": {
    title: "Greetings Page",
  },
  "/profiles": {
    title: "Profiles Page",
  },
  "/my-hobbies": {
    title: "My Hobbies Page",
  },
};

function PageCard() {
  const { pathname } = useLocation();
  const content = pageContent[pathname] ?? pageContent["/greetings"];

  return (
    <div className="page-card">{content.title}</div>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Navigate to="/greetings" replace />} />
        <Route path="/greetings" element={<PageCard />} />
        <Route path="/profiles" element={<PageCard />} />
        <Route path="/my-hobbies" element={<PageCard />} />
        <Route path="*" element={<Navigate to="/greetings" replace />} />
      </Routes>
    </div>
  );
}
