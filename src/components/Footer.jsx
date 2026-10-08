const footerLinks = [
  { label: "About", href: "https://about.google/" },
  { label: "Products", href: "https://about.google/products/" },
  { label: "Company Info", href: "https://about.google/company-info/" },
  { label: "News", href: "https://about.google/press/" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="https://about.google/" aria-label="Google About">
        Google
      </a>
      <nav className="footer-navigation" aria-label="Footer navigation">
        {footerLinks.map(({ label, href }) => (
          <a href={href} key={label}>
            {label}
          </a>
        ))}
      </nav>
      <p>© Google</p>
    </footer>
  );
}
