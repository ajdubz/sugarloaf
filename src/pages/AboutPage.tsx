import { site } from "@/lib/siteContent";
import "./SitePages.css";

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <section className="page-section">
          <p className="section-kicker">About Us</p>
          <h1 className="section-title">A working farm sanctuary with room to grow.</h1>
          <p className="section-lede">{site.about}</p>
        </section>
      </header>
      <section className="split-band">
        <div className="split-content">
          <img src={site.gallery[2].src} alt={site.gallery[2].alt} />
          <div>
            <p className="section-kicker">Expansion Goals</p>
            <h2 className="section-title">More pasture, better care, safer shelter.</h2>
            <p className="section-lede">
              Expanding under-utilized land with fencing, trees, and structures will help
              the ranch house more animals safely. A new barn with medical space would
              improve care for sick animals and support the surrounding community.
            </p>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="feature-grid">
          <article className="feature-card">
            <h3>Rescue</h3>
            <p>{site.mission}</p>
          </article>
          <article className="feature-card">
            <h3>Education</h3>
            <p>{site.education}</p>
          </article>
          <article className="feature-card">
            <h3>Forever Home</h3>
            <p>{site.help}</p>
          </article>
        </div>
      </section>
    </>
  );
}
