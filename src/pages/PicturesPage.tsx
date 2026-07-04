import { useState } from "react";
import { site } from "@/lib/siteContent";
import "./SitePages.css";

const INITIAL_GALLERY_COUNT = 6;

export default function PicturesPage() {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll
    ? site.gallery
    : site.gallery.slice(0, INITIAL_GALLERY_COUNT);
  const hasMoreImages = site.gallery.length > INITIAL_GALLERY_COUNT;

  return (
    <>
      <header className="page-hero">
        <section className="page-section">
          <p className="section-kicker">Pictures</p>
          <h1 className="section-title">Meet the animals and the ranch they call home.</h1>
          <p className="section-lede">
            A look at Sugarloaf residents, ranch spaces, and everyday sanctuary life.
          </p>
        </section>
      </header>
      <section className="page-section">
        <div className="gallery-grid">
          {visibleImages.map((image) => (
            <figure className="gallery-card" key={image.alt}>
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
        {hasMoreImages ? (
          <button
            className="button button--outline gallery-toggle"
            type="button"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
          >
            {showAll ? "Show Fewer Photos" : "Show More Photos"}
          </button>
        ) : null}
      </section>
    </>
  );
}
