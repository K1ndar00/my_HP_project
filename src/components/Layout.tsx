import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { site } from "../data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/works", label: "Works" },
  { to: "/diary", label: "Diary" },
];

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <NavLink to="/" className="brand">
            {site.name}
          </NavLink>
          <nav aria-label="メイン">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"}>
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} {site.name}</div>
      </footer>
    </>
  );
}
