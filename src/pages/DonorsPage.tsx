import { site } from "@/lib/siteContent";
import "./SitePages.css";

export default function DonorsPage() {
  return (
    <>
      <header className="page-hero">
        <section className="page-section">
          <p className="section-kicker">Donors</p>
          <h1 className="section-title">Your kindness keeps the sanctuary moving.</h1>
          <p className="section-lede">
            Thank you for helping Sugarloaf provide loving, safe, forever homes for
            existing and future farm family members.
          </p>
        </section>
      </header>
      <section className="page-section donation-grid">
        <article className="donation-panel">
          <h2>Donate Online</h2>
          <p>Choose a one-time gift or a monthly support amount.</p>
          <div className="donation-option-list" aria-label="Donation options">
            {site.donationOptions.map((option) => {
              const primaryLabel = option.amount > 0 ? `$${option.amount}` : option.label;
              const detailLabel = option.amount > 0 ? "Monthly" : "Any amount";

              return (
                <a
                  className="donation-option"
                  href={site.donationUrl}
                  key={option.label}
                  aria-label={`Donate: ${option.label}`}
                >
                  <span>{primaryLabel}</span>
                  <small>{` ${detailLabel}`}</small>
                </a>
              );
            })}
          </div>
          <div className="button-row">
            <a className="button" href={site.donationUrl}>
              Donate with PayPal
            </a>
          </div>
        </article>
        <article className="donation-panel">
          <h2>Donate by Check</h2>
          <p>
            Checks can be made out and sent to:
            <br />
            <strong>Sugarloaf Mountain Ranch Inc.</strong>
            <br />
            {site.address.line1}
            <br />
            {site.address.cityStateZip}
          </p>
        </article>
      </section>
    </>
  );
}
