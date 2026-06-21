import ranchSign from "@/assets/originals/logo_sugarloaf.jpeg";
import ranchCabin from "@/assets/originals/petImage_153.jpg";
import pasture from "@/assets/originals/petImage_041.jpg";
import rescueAnimal from "@/assets/originals/petImage_028.jpg";
import animalPortrait from "@/assets/originals/petImage_014.jpg";
import animalFriend from "@/assets/originals/petImage_148.jpg";
import barnLife from "@/assets/originals/petImage_160.jpg";
import farmFamily from "@/assets/originals/petImage_149.jpg";
import sanctuaryResident from "@/assets/originals/petImage_001.jpg";

export type NavItem = {
  path: string;
  label: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  featured?: boolean;
};

export type NewsItem = {
  title: string;
  description: string;
  href?: string;
};

export type DonationOption = {
  label: string;
  amount: number;
  cadence: "monthly" | "one-time";
};

export const site = {
  name: "Sugarloaf Mountain Ranch, inc.",
  tagline: "501c3 Non-Profit Farm Animal Rescue and Sanctuary",
  email: "sugarloafmountainrescue@gmail.com",
  facebookUrl: "https://www.facebook.com/SugarloafMountainRescue",
  address: {
    line1: "20308 Sugarloaf Mountain Rd",
    cityStateZip: "Clermont, FL 34715",
  },
  navItems: [
    { path: "/", label: "Home" },
    { path: "/pictures", label: "Pictures" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
    { path: "/donors", label: "Donors" },
    { path: "/news", label: "News" },
  ] satisfies NavItem[],
  donationUrl:
    "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=sugarloafmountainrescue%40gmail.com&currency_code=USD&item_name=Sugarloaf%20Mountain%20Ranch%20inc.",
  hero: {
    image: "/images/animals-banner.png",
    title: "Sugarloaf Mountain Ranch, inc.",
    subtitle: "A forever home for rescued farm animals in Clermont, Florida.",
  },
  mission:
    "We give a loving home to animals who have lost their home, became more than their owner could handle, were abused, unwanted, sick or disabled, or would have been put down because it seemed there was no other way.",
  education:
    "The animals help us educate new and prospective owners on what it takes to raise and care for them. Many have been rehabilitated from horrific situations and now live life to the fullest.",
  help:
    "With your kindness and donations, we can keep caring for our existing farm family and make room for future rescues.",
  about:
    "Sugarloaf Mountain Ranch is expanding pastures, adding fencing, trees, shelter, and planning a barn with medical space so more animals can be cared for safely.",
  donationOptions: [
    { label: "One-time donation", amount: 0, cadence: "one-time" },
    { label: "$5 monthly", amount: 5, cadence: "monthly" },
    { label: "$10 monthly", amount: 10, cadence: "monthly" },
    { label: "$25 monthly", amount: 25, cadence: "monthly" },
    { label: "$50 monthly", amount: 50, cadence: "monthly" },
    { label: "$100 monthly", amount: 100, cadence: "monthly" },
  ] satisfies DonationOption[],
  gallery: [
    { src: ranchSign, alt: "Sugarloaf Mountain Ranch entrance sign", featured: true },
    { src: ranchCabin, alt: "Ranch cabin and porch at Sugarloaf Mountain Ranch", featured: true },
    { src: pasture, alt: "Pasture and sanctuary grounds", featured: true },
    { src: rescueAnimal, alt: "Rescued animal at the ranch" },
    { src: animalPortrait, alt: "Animal portrait from Sugarloaf Mountain Ranch" },
    { src: animalFriend, alt: "Rescue animal being cared for" },
    { src: barnLife, alt: "Farm animal resident at Sugarloaf Mountain Ranch" },
    { src: farmFamily, alt: "Sugarloaf farm family resident" },
    { src: sanctuaryResident, alt: "Sanctuary resident at the ranch" },
  ] satisfies GalleryImage[],
  news: [
    {
      title: "Country Woman of the Year",
      description:
        'AnnMarie Roberts was named "Country Woman of the Year" in the 2016 June/July issue of Country Woman Magazine.',
    },
    {
      title: "WKMG News 6 Getting Results",
      description:
        "AnnMarie and Sugarloaf Mountain Ranch were recognized through WKMG News 6 Getting Results.",
      href: "https://www.clickorlando.com/getting-results-/abused-and-abandoned-farm-animals-find-forever-home-on-lake-county-farm",
    },
    {
      title: "Reader's Digest feature",
      description:
        "Sugarloaf Mountain Ranch has been featured for its work giving abused and abandoned farm animals a forever home.",
      href: "http://www.rd.com/true-stories/inspiring/sugarloaf-mountain-ranch/",
    },
    {
      title: "Tractor Supply Rescue Your Rescue finalist",
      description:
        "Sugarloaf Mountain Ranch was selected as a top 10 finalist out of 3,610 entries.",
    },
    {
      title: "GreatNonprofits profile",
      description:
        "Supporters can donate, review, and learn more through the Sugarloaf Mountain Ranch GreatNonprofits profile.",
      href: "https://greatnonprofits.org/org/sugarloaf-mountain-ranch-inc",
    },
  ] satisfies NewsItem[],
};
