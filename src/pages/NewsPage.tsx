import { site } from "@/lib/siteContent";
import "./SitePages.css";

export default function NewsPage() {
  return (
    <>
      <header className="page-hero">
        <section className="page-section">
          <p className="section-kicker">News</p>
          <h1 className="section-title">Recognition, features, and ranch milestones.</h1>
          <p className="section-lede">
            Selected highlights from Sugarloaf Mountain Ranch's current website.
          </p>
        </section>
      </header>
      <section className="page-section">
        <div className="news-grid">
          {site.news.map((item) => (
            <article className="news-card" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {item.href ? <a href={item.href}>Read more</a> : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
