import "./Header.css";

export default function Header() {
  return (
    <header className="header">
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
