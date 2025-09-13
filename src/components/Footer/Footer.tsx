import "./Footer.css";
import placeholderData from "../../lib/placeholderData";

export interface FooterProps {
  copyright?: string;
}

export default function Footer({
  copyright = placeholderData.footer.copyright,
}: FooterProps) {
  return (
    <footer className="footer">
      <p>{copyright}</p>
    </footer>
  );
}
