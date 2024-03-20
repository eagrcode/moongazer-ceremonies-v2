import Link from "next/link";
import AOIC from "../../public/assets/images/AOIC-logo.jpg";
import CCL from "../../public/assets/images/CCL-logo.jpg";
import FCC from "../../public/assets/images/fcc-badge.png";
import Image from "next/image";
import Hare from "../../public/assets/images/Moon_Black.png";

export default function Footer() {
  return (
    <footer className="flex w-full justify-center bg-primary text-secondary px-4 py-12 text-sm">
      <div className="flex justify-between w-full max-w-screen-lg">
        <div className="flex flex-col">
          <div className="flex flex-col w-10 opacity-60">
            <Image alt="Hare" src={Hare} style={{ height: "auto", width: "100%" }} />
          </div>
          <div className="font-dancing text-secondary text-base font-bold">
            <p>MoonGazer</p>
            <p>Ceremonies</p>
          </div>
        </div>
        <nav className="footer-navbar">
          <h4 className="font-bold mb-2">Discover</h4>
          <ul className="flex flex-col">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#ceremoniesTag">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {/* <div className="footer-social-container">
            <Link
              rel="nofollow"
              target="_blank"
              href="https://www.instagram.com/moongazerceremonies/"
              aria-label="link href moongazer ceremonies instagram"
            ></Link>
            <Link
              rel="nofollow"
              target="_blank"
              href="https://www.facebook.com/moongazerceremonies"
              aria-label="link href moongazer ceremonies facebook"
            ></Link>
          </div> */}
        </nav>
        <nav className="footer-navbar">
          <h4 className="font-bold mb-2">Ceremonies</h4>
          <ul className="flex flex-col">
            <li>
              <Link href="/funeral">Funerals</Link>
            </li>
            <li>
              <Link href="#ceremoniesTag">Weddings</Link>
            </li>
            <li>
              <Link href="/contact">Naming</Link>
            </li>
            <li>
              <Link href="/contact">Vow Renewal</Link>
            </li>
            <li>
              <Link href="/contact">Commitment</Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col">
          <h4 className="font-bold mb-2">Social</h4>
          <ul className="flex flex-col">
            <li>
              <Link href={""}>Facebook</Link>
            </li>
            <li>
              <Link href={""}>Instagram</Link>
            </li>
          </ul>
        </div>
        {/* <div className="bothrefm-footer">
          <div className="hitched-container">
            <Link
              rel="nofollow"
              target="_blank"
              href="https://www.hitched.co.uk/wedding-celebrants/moon-gazer-ceremonies_322007.htm"
              title="Hitched.co.uk"
            ></Link>
          </div>
          <div className="aoic-container">
            <Image src={AOIC} alt="AOIC-certification" />
          </div>
          <div className="hitched-container">
            <span>Trained by</span>
            <Image alt="CCL cert" src={CCL} />
          </div>
          <div className="fcc-container">
            <Image alt="FCC cert" src={FCC} />
          </div>
        </div> */}
      </div>
    </footer>
  );
}
