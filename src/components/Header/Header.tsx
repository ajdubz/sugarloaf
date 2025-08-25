import "./Header.css";
import logoUrl from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logoUrl} alt="Pet Rescue logo" />
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Adopt</a></li>
          <li><a href="#">Donate</a></li>
        </ul>
      </nav>
    </header>
  );
}
