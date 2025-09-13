import "./Header.css";
import placeholderData, { type NavItem } from "../../lib/placeholderData";

export interface HeaderProps {
  navItems?: NavItem[];
}

export default function Header({
  navItems = placeholderData.header.navItems,
}: HeaderProps) {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
