import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { name: "About Me", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <nav className="border-b bg-secondary/70 border-secondary">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex items-center flex-shrink-0">
              <h1 className="text-xl font-bold text-foreground">
                Rachael Charewicz
              </h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors",
                    location.pathname === item.path ||
                      (location.pathname === "/" && item.path === "/portfolio")
                      ? "border-primary text-primary"
                      : "border-transparent text-foreground-muted hover:text-primary hover:border-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center h-16 gap-x-4">
            <a
              target="_blank"
              className="hover:text-secondary"
              href="/files/resume.pdf"
            >
              <img src="/images/cv-icon.png" className="max-w-8" alt="Resume" />
            </a>
            <a
              target="_blank"
              className="hover:text-secondary"
              href="https://www.linkedin.com/in/rachaelcharewicz"
            >
              <img
                src="/images/circle-linkedin-512.webp"
                className="max-w-8"
                alt="LinkedIn"
              />
            </a>
            <a
              target="_blank"
              className="hover:text-secondary"
              href="https://github.com/rachaelchar"
            >
              <img
                src="/images/github-mark.png"
                className="max-w-8"
                alt="GitHub"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
