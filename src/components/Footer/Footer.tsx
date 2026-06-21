import "./Footer.css";
import { site } from "@/lib/siteContent";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{site.name}</strong>
        <p>{site.tagline}</p>
      </div>
      <address>
        {site.address.line1}
        <br />
        {site.address.cityStateZip}
        <br />
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </address>
      <div className="site-footer__links">
        <a href={site.facebookUrl}>Facebook</a>
        <a href={site.donationUrl}>Donate</a>
      </div>
      <p className="site-footer__copyright">
        {site.name} © All rights reserved
      </p>
    </footer>
  );
}
