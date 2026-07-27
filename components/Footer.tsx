import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <Link className="brand" href="/">
              <Image
                className="brand__logo"
                src={logo}
                alt="DF Group logo"
                width={34}
                height={34}
              />
              <span className="brand__mark">DF Group</span>
            </Link>
            <p className="footer__blurb">
              Corporate advisory and investment, Hong Kong. Diligent in
              research, faithful to the companies we back.
            </p>
          </div>
          <div className="footer__col">
            <h4>Explore</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/reports">Reports &amp; Articles</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Connect</h4>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/df-group-diligentfaith/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/contact">Enquiries</Link>
              </li>
              <li>
                <a href="mailto:admin@diligentfaith.com">
                  admin@diligentfaith.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 DF Group · Diligent Faith. All rights reserved.</span>
          <span>Hong Kong SAR</span>
        </div>
      </div>
    </footer>
  );
}
