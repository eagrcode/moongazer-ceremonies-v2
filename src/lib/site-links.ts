import { Commitment, Funeral, Naming, Renewal } from "@/lib/s3StaticImages";

export const ceremonyLinks = [
  { title: "Funeral", href: "/funeral" },
  { title: "Naming", href: "/naming" },
  { title: "Vow Renewal", href: "/renewal" },
  { title: "Commitment", href: "/commitment" },
] as const;

export const ceremonyCards = [
  {
    title: "Funeral",
    tag: "A celebration of life",
    from: "From £235",
    img: Funeral,
    href: "/funeral",
    alt: "funeral",
  },
  {
    title: "Naming",
    tag: "Welcome a new arrival",
    from: "From £250",
    img: Naming,
    href: "/naming",
    alt: "naming",
  },
  {
    title: "Vow Renewal",
    tag: "Relive the love",
    from: "From £300",
    img: Renewal,
    href: "/renewal",
    alt: "renewal",
  },
  {
    title: "Commitment",
    tag: "Committed in love & life",
    from: "From £450",
    img: Commitment,
    href: "/commitment",
    alt: "commitment",
  },
] as const;

export const discoverLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/#about" },
  { title: "Remedies & Rituals", href: "/remedies-rituals" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
] as const;

export const navbarLinks = [
  { title: "Home", href: "/" },
  { title: "Remedies & Rituals", href: "/remedies-rituals" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
] as const;

export const socialLinks = [
  { title: "Facebook", href: "https://www.facebook.com/moongazerceremonies" },
] as const;
