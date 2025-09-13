import "./Footer.css";

interface FooterProps {
  text?: string;
}

export default function Footer({ text = "© 2025 Pet Rescue. All rights reserved." }: FooterProps) {
  return (
    <footer className="footer">
      <p>{text}</p>
    </footer>
  );
}
