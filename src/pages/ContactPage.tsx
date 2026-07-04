import { type FormEvent, useMemo, useState } from "react";
import { site } from "@/lib/siteContent";
import "./SitePages.css";

export default function ContactPage() {
  const [message, setMessage] = useState({
    name: "",
    subject: "",
    body: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = message.subject || "Sugarloaf Mountain Ranch inquiry";
    const bodyParts = [message.body];

    if (message.name) {
      bodyParts.push("", `From: ${message.name}`);
    }

    const body = bodyParts.join("\n");

    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [message]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <>
      <header className="page-hero">
        <section className="page-section">
          <p className="section-kicker">Contact Us</p>
          <h1 className="section-title">Get in touch with Sugarloaf Mountain Ranch.</h1>
          <p className="section-lede">
            The ranch is located on Sugarloaf Mountain in Clermont, Florida, one of
            Florida's highest points.
          </p>
        </section>
      </header>
      <section className="page-section contact-grid">
        <article className="contact-panel">
          <h2>Sanctuary Location</h2>
          <p>
            {site.address.line1}
            <br />
            {site.address.cityStateZip}
          </p>
          <p>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            Facebook: <a href={site.facebookUrl}>Sugarloaf Mountain Rescue</a>
          </p>
        </article>
        <article className="contact-panel">
          <h2>Message AnnMarie Roberts</h2>
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <label>
              Name
              <input
                name="name"
                type="text"
                value={message.name}
                onChange={(event) =>
                  setMessage((current) => ({
                    ...current,
                    name: event.target.value,
                  }))
                }
              />
            </label>
            <label>
              Subject
              <input
                name="subject"
                type="text"
                value={message.subject}
                onChange={(event) =>
                  setMessage((current) => ({
                    ...current,
                    subject: event.target.value,
                  }))
                }
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                required
                value={message.body}
                onChange={(event) =>
                  setMessage((current) => ({
                    ...current,
                    body: event.target.value,
                  }))
                }
              />
            </label>
            <button className="button" type="submit">
              Send by Email
            </button>
            <p className="contact-form__fallback">
              Prefer your email app directly?{" "}
              <a href={mailtoHref}>Open a prefilled email</a>
            </p>
          </form>
        </article>
      </section>
    </>
  );
}
