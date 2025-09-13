import "./Header.css";

export interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header id="header" className="header">
      <div className="site-info">
        <h1>{title}</h1>
      </div>
      <nav className="header-nav">
        <ul id="navigation">
          <li className="home-button current-menu-item">
            <a href="#"><i className="icons icon-home"></i></a>
          </li>
          <li>
            <span>Pages</span>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </li>
          <li>
            <span>Adopt a Pet</span>
            <ul>
              <li><a href="#">Available Pets List</a></li>
              <li><a href="#">Single Pet Page</a></li>
              <li><a href="#">Adoption Application</a></li>
            </ul>
          </li>
          <li>
            <span>Events</span>
            <ul>
              <li><a href="#">Calendar</a></li>
              <li><a href="#">Event Post Style 1</a></li>
            </ul>
          </li>
          <li>
            <span>Features</span>
            <ul>
              <li><a href="#">Typography</a></li>
              <li><a href="#">Shortcodes</a></li>
            </ul>
          </li>
          <li>
            <span>Blog</span>
            <ul>
              <li><a href="#">Blog Style 1</a></li>
              <li><a href="#">Blog Style 2</a></li>
            </ul>
          </li>
          <li>
            <span>Shop</span>
            <ul>
              <li><a href="#">Front page</a></li>
              <li><a href="#">Product page</a></li>
            </ul>
          </li>
          <li className="donate-button">
            <a href="#">Donate Today</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

