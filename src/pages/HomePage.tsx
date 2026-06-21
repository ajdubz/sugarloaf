import { Link } from "react-router-dom";
import { site } from "@/lib/siteContent";
import "./SitePages.css";

export default function HomePage() {
  const featuredImages = site.gallery.filter((image) => image.featured);

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${site.hero.image})` }}>
        <div className="hero__content">
          <p className="section-kicker">{site.tagline}</p>
          <h1>{site.hero.title}</h1>
          <p>{site.hero.subtitle}</p>
          <div className="button-row">
            <a className="button" href={site.donationUrl}>
              Donate Today
            </a>
            <Link className="button button--secondary" to="/pictures">
              Meet the Animals
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <p className="section-kicker">What We Do</p>
        <h2 className="section-title">Forever care for animals who need it most.</h2>
        <p className="section-lede">{site.mission}</p>
        <div className="feature-grid page-section--tight">
          <article className="feature-card">
            <h3>Rescue</h3>
            <p>{site.mission}</p>
          </article>
          <article className="feature-card">
            <h3>Rehabilitate</h3>
            <p>{site.education}</p>
          </article>
          <article className="feature-card">
            <h3>Support</h3>
            <p>{site.help}</p>
          </article>
        </div>
      </section>

      <section className="split-band">
        <div className="split-content">
          <img src={featuredImages[1]?.src} alt={featuredImages[1]?.alt} />
          <div>
            <p className="section-kicker">How You Can Help</p>
            <h2 className="section-title">Kindness keeps the gates open.</h2>
            <p className="section-lede">{site.help}</p>
            <div className="button-row">
              <a className="button" href={site.donationUrl}>
                Make a Donation
              </a>
              <Link className="button button--outline" to="/donors">
                Donor Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <p className="section-kicker">Around the Ranch</p>
        <h2 className="section-title">A working sanctuary, not a stock-photo shelter.</h2>
        <div className="gallery-grid page-section--tight">
          {featuredImages.map((image) => (
            <figure className="gallery-card" key={image.alt}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
        <Link className="button button--outline" to="/pictures">
          View More Photos
        </Link>
      </section>

      <section className="page-section">
        <p className="section-kicker">News</p>
        <h2 className="section-title">Recognition and ranch updates.</h2>
        <div className="news-grid page-section--tight">
          {site.news.slice(0, 3).map((item) => (
            <article className="news-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.href ? <a href={item.href}>Read more</a> : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
