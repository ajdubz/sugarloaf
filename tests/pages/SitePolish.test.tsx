import { fireEvent, render, screen } from "@testing-library/react";
import ContactPage from "@/pages/ContactPage";
import DonorsPage from "@/pages/DonorsPage";
import PicturesPage from "@/pages/PicturesPage";
import { site } from "@/lib/siteContent";

describe("site polish behavior", () => {
  it("builds a prefilled contact email from the form fields", () => {
    render(<ContactPage />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Pat" },
    });
    fireEvent.change(screen.getByLabelText("Subject"), {
      target: { value: "Volunteer question" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "I can help" },
    });

    expect(screen.getByRole("button", { name: "Send by Email" })).toHaveAttribute(
      "type",
      "submit",
    );
    expect(screen.getByRole("link", { name: "Open a prefilled email" })).toHaveAttribute(
      "href",
      `mailto:${site.email}?subject=Volunteer%20question&body=I%20can%20help%0A%0AFrom%3A%20Pat`,
    );
  });

  it("renders donation options as PayPal links", () => {
    render(<DonorsPage />);

    expect(screen.getByRole("link", { name: "Donate: $25 monthly" })).toHaveAttribute(
      "href",
      site.donationUrl,
    );
  });

  it("toggles additional gallery photos", () => {
    render(<PicturesPage />);

    expect(screen.getAllByRole("img")).toHaveLength(6);

    fireEvent.click(screen.getByRole("button", { name: "Show More Photos" }));

    expect(screen.getAllByRole("img")).toHaveLength(site.gallery.length);
    expect(screen.getByRole("button", { name: "Show Fewer Photos" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });
});
