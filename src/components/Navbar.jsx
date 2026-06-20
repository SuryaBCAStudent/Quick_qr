import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="container navbar__inner">
        <a href="/" className="navbar__brand" aria-label="QuickQR – Home">
          <span className="navbar__logo" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="10" height="10" rx="2" fill="url(#logoGrad)" />
              <rect x="16" y="2" width="10" height="10" rx="2" fill="url(#logoGrad)" opacity="0.7" />
              <rect x="2" y="16" width="10" height="10" rx="2" fill="url(#logoGrad)" opacity="0.7" />
              <rect x="16" y="16" width="10" height="10" rx="2" fill="url(#logoGrad)" opacity="0.4" />
              <rect x="5" y="5" width="4" height="4" rx="1" fill="white" />
              <rect x="19" y="5" width="4" height="4" rx="1" fill="white" />
              <rect x="5" y="19" width="4" height="4" rx="1" fill="white" />
              <defs>
                <linearGradient id="logoGrad" x1="2" y1="2" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="navbar__wordmark">Quick<span className="navbar__wordmark-accent">QR</span></span>
        </a>

        <div className="navbar__right">
          <span className="navbar__badge">
            <span className="navbar__badge-dot" aria-hidden="true" />
            Free QR Generator
          </span>
        </div>
      </div>
    </header>
  )
}
