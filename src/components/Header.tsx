import { useState } from "react";
import { NavLink } from "react-router-dom";
import { site } from "@/lib/siteContent";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="site-brand" onClick={() => setIsOpen(false)}>
          <img src={site.gallery[0].src} alt="" className="site-brand__mark" />
          <span>
            <strong>{site.name}</strong>
            <small>{site.tagline}</small>
          </span>
        </NavLink>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Menu</span>
        </button>
      </div>

      <nav
        id="site-navigation"
        className={`site-nav${isOpen ? " site-nav--open" : ""}`}
        aria-label="Main navigation"
      >
        {site.navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `site-nav__link${isActive ? " site-nav__link--active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
        <a className="site-nav__donate" href={site.donationUrl}>
          Donate
        </a>
      </nav>
    </header>
  );
}

