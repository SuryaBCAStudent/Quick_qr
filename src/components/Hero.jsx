import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="container hero__inner">
        <div className="hero__eyebrow">
          <span className="hero__tag">✦ Instant &amp; Free</span>
        </div>
        <h1 className="hero__heading">
          Generate QR Codes{' '}
          <span className="hero__heading-accent">Instantly</span>
        </h1>
        <p className="hero__subheading">
          Turn text, links, contact info, or notes into clean QR codes in seconds.
        </p>
        <p className="hero__support">
          Save time sharing content across devices — no apps, no sign-up, just paste and generate.
        </p>
        <div className="hero__stats" aria-label="App statistics">
          <div className="hero__stat">
            <span className="hero__stat-value">100%</span>
            <span className="hero__stat-label">Free</span>
          </div>
          <div className="hero__divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-value">Instant</span>
            <span className="hero__stat-label">Generation</span>
          </div>
          <div className="hero__divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-value">Any</span>
            <span className="hero__stat-label">Content Type</span>
          </div>
        </div>
      </div>
    </section>
  )
}
