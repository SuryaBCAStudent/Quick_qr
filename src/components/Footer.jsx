import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">

        <div className="footer__brand">
          <div className="footer__logo">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="2" y="2" width="10" height="10" rx="2" fill="url(#footerGrad)" />
              <rect x="16" y="2" width="10" height="10" rx="2" fill="url(#footerGrad)" opacity="0.7" />
              <rect x="2" y="16" width="10" height="10" rx="2" fill="url(#footerGrad)" opacity="0.7" />
              <rect x="16" y="16" width="10" height="10" rx="2" fill="url(#footerGrad)" opacity="0.4" />
              <rect x="5" y="5" width="4" height="4" rx="1" fill="white" />
              <rect x="19" y="5" width="4" height="4" rx="1" fill="white" />
              <rect x="5" y="19" width="4" height="4" rx="1" fill="white" />
              <defs>
                <linearGradient id="footerGrad" x1="2" y1="2" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
            <span className="footer__wordmark">Quick<span className="footer__accent">QR</span></span>
          </div>
          <p className="footer__tagline">
            Instant QR codes for everyone. Free, fast, and private.
          </p>
        </div>

        <div className="footer__divider" aria-hidden="true" />

        <div className="footer__meta">
          <div className="footer__author">
            <div className="footer__author-avatar" aria-hidden="true">SP</div>
            <div className="footer__author-info">
              <p className="footer__author-name">Surya Pratap Singh</p>
              <a
                href="mailto:harshitsingh17069@gmail.com"
                className="footer__author-email"
                aria-label="Email Surya Pratap Singh"
              >
                harshitsingh17069@gmail.com
              </a>
            </div>
          </div>

          <a
            id="btn-digital-heroes"
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__dh-btn"
            aria-label="Built for Digital Heroes – Visit digitalheroesco.com"
          >
            <span className="footer__dh-icon" aria-hidden="true">⚡</span>
            Built for Digital Heroes
          </a>
        </div>

        <div className="footer__divider" aria-hidden="true" />

        <div className="footer__bottom">
          <p className="footer__copy">
            © {currentYear} QuickQR · Made with ♥ · All rights reserved
          </p>
          <p className="footer__privacy">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            No data leaves your device
          </p>
        </div>

      </div>
    </footer>
  )
}
