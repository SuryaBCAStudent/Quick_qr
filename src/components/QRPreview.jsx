import { useRef, useState, useCallback } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import './QRPreview.css'

export default function QRPreview({ qrValue, onReset }) {
  const canvasRef = useRef(null)
  const [copied, setCopied]     = useState(false)
  const [downloading, setDownloading] = useState(false)

  const handleDownload = useCallback(() => {
    setDownloading(true)
    setTimeout(() => {
      // The QRCodeCanvas renders into a <canvas> element inside its container
      const container = document.getElementById('qr-canvas-container')
      const canvas = container?.querySelector('canvas')
      if (!canvas) return

      // Create a padded version for better aesthetics
      const padding = 24
      const size = canvas.width + padding * 2
      const offscreen = document.createElement('canvas')
      offscreen.width  = size
      offscreen.height = size
      const ctx = offscreen.getContext('2d')

      // White background
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, size, size)
      ctx.drawImage(canvas, padding, padding)

      const url  = offscreen.toDataURL('image/png')
      const link = document.createElement('a')
      link.href     = url
      link.download = 'quickqr-code.png'
      link.click()
      setDownloading(false)
    }, 100)
  }, [])

  const handleCopyContent = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(qrValue)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }, [qrValue])

  const truncated = qrValue.length > 80 ? qrValue.slice(0, 80) + '…' : qrValue

  return (
    <div className="qr-preview card" role="region" aria-label="QR Code preview" aria-live="polite">
      <div className="qr-preview__header">
        <div className="qr-preview__badge-row">
          <span className="badge badge--success" aria-label="QR Code ready">
            <span className="badge__dot" aria-hidden="true" />
            QR Ready
          </span>
          <span className="badge badge--muted">PNG available</span>
        </div>
        <h2 className="qr-preview__title">Your QR Code</h2>
      </div>

      <div className="qr-preview__body">
        <div className="qr-preview__canvas-wrap" id="qr-canvas-container">
          <div className="qr-preview__glow" aria-hidden="true" />
          <div className="qr-preview__canvas-inner">
            <QRCodeCanvas
              value={qrValue}
              size={220}
              level="M"
              includeMargin={false}
              ref={canvasRef}
            />
          </div>
        </div>

        <div className="qr-preview__content-label">
          <p className="qr-preview__content-text" title={qrValue}>{truncated}</p>
        </div>
      </div>

      <div className="qr-preview__actions">
        <button
          id="btn-download"
          className="btn btn--primary btn--lg"
          onClick={handleDownload}
          disabled={downloading}
          aria-label="Download QR code as PNG"
        >
          {downloading ? (
            <>
              <span className="btn__spinner" aria-hidden="true" />
              Preparing…
            </>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PNG
            </>
          )}
        </button>

        <button
          id="btn-copy-qr"
          className={`btn ${copied ? 'btn--success' : 'btn--ghost'}`}
          onClick={handleCopyContent}
          aria-label={copied ? 'Copied!' : 'Copy QR content to clipboard'}
        >
          {copied ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              Copy Content
            </>
          )}
        </button>

        <button
          id="btn-reset"
          className="btn btn--ghost btn--danger"
          onClick={onReset}
          aria-label="Reset and generate a new QR code"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="1 4 1 10 7 10"/>
            <path d="M3.51 15a9 9 0 1 0 .49-4.95"/>
          </svg>
          Generate Again
        </button>
      </div>
    </div>
  )
}
