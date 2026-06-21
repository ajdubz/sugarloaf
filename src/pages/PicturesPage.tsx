import { site } from "@/lib/siteContent";
import "./SitePages.css";

export default function PicturesPage() {
  return (
    <>
      <header className="page-hero">
        <section className="page-section">
          <p className="section-kicker">Pictures</p>
          <h1 className="section-title">Meet the animals and the ranch they call home.</h1>
          <p className="section-lede">
            A first pass at the Sugarloaf gallery using local ranch and animal photos.
          </p>
        </section>
      </header>
      <section className="page-section">
        <div className="gallery-grid">
          {site.gallery.map((image) => (
            <figure className="gallery-card" key={image.alt}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
