import { useEffect, useState } from "react";

const navigation = [
  { label: "About", href: "#about", active: true },
  { label: "Products", href: "https://about.google/products/" },
  { label: "Company Info", href: "https://about.google/company-info/" },
  { label: "News", href: "https://about.google/press/" },
];

function GoogleWordmark() {
  return (
    <span className="google-wordmark" aria-label="Google">
      <span className="google-blue">G</span>
      <span className="google-red">o</span>
      <span className="google-yellow">o</span>
      <span className="google-blue">g</span>
      <span className="google-green">l</span>
      <span className="google-red">e</span>
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header" id="top">
      <a className="brand-link" href="#top" aria-label="Google About home">
        <GoogleWordmark />
      </a>
      <button
        className={`menu-toggle${menuOpen ? " is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        className={`primary-navigation${menuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        {navigation.map(({ label, href, active }) => (
          <a
            className={`navigation-link${active ? " is-active" : ""}`}
            href={href}
            key={label}
            aria-current={active ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
