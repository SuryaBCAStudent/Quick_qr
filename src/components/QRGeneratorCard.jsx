import { useRef } from 'react'
import './QRGeneratorCard.css'

const MAX_CHARS = 2000

export default function QRGeneratorCard({
  inputText,
  setInputText,
  onGenerate,
  onClear,
  error,
  setError,
  isGenerating,
}) {
  const textareaRef = useRef(null)

  const handleInput = (e) => {
    const val = e.target.value
    if (val.length <= MAX_CHARS) {
      setInputText(val)
      if (error) setError('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      onGenerate()
    }
  }

  const handleCopy = async () => {
    if (!inputText.trim()) return
    try {
      await navigator.clipboard.writeText(inputText)
    } catch {
      // fallback – select all text
      textareaRef.current?.select()
    }
  }

  const charPct = (inputText.length / MAX_CHARS) * 100
  const charColor =
    charPct > 90 ? 'var(--color-error)' :
    charPct > 70 ? '#f59e0b' :
    'var(--color-text-muted)'

  return (
    <div className="gen-card card" role="region" aria-label="QR Code input">
      <div className="gen-card__header">
        <h2 className="gen-card__title">Create Your QR Code</h2>
        <p className="gen-card__subtitle">Enter any text, URL, email, phone, or note below</p>
      </div>

      <div className="gen-card__body">
        <div className={`gen-card__field${error ? ' gen-card__field--error' : ''}`}>
          <label htmlFor="qr-input" className="sr-only">QR Code content</label>
          <textarea
            id="qr-input"
            ref={textareaRef}
            className="gen-card__textarea"
            value={inputText}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Paste a link, note, Wi-Fi text, or any content…"
            aria-label="QR Code content"
            aria-describedby="qr-input-error qr-input-count"
            aria-invalid={!!error}
            rows={4}
            spellCheck={false}
          />
          <div className="gen-card__field-footer">
            {error ? (
              <p id="qr-input-error" className="gen-card__error" role="alert" aria-live="assertive">
                <span aria-hidden="true">⚠</span> {error}
              </p>
            ) : (
              <p id="qr-input-error" className="gen-card__hint">
                Tip: Press <kbd>Ctrl</kbd>+<kbd>Enter</kbd> to generate
              </p>
            )}
            <span
              id="qr-input-count"
              className="gen-card__count"
              style={{ color: charColor }}
              aria-label={`${inputText.length} of ${MAX_CHARS} characters used`}
            >
              {inputText.length}/{MAX_CHARS}
            </span>
          </div>
        </div>

        <div className="gen-card__actions">
          <button
            id="btn-generate"
            className="btn btn--primary btn--lg"
            onClick={onGenerate}
            disabled={isGenerating}
            aria-label="Generate QR code"
          >
            {isGenerating ? (
              <>
                <span className="btn__spinner" aria-hidden="true" />
                Generating…
              </>
            ) : (
              <>
                <span aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1"/>
                    <rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" rx="1"/>
                    <rect x="14" y="14" width="7" height="7" rx="1"/>
                  </svg>
                </span>
                Generate QR Code
              </>
            )}
          </button>

          {inputText && (
            <button
              id="btn-copy-input"
              className="btn btn--ghost"
              onClick={handleCopy}
              aria-label="Copy input content to clipboard"
              title="Copy input text"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              Copy
            </button>
          )}

          {(inputText || error) && (
            <button
              id="btn-clear"
              className="btn btn--ghost btn--danger"
              onClick={onClear}
              aria-label="Clear input and reset"
              title="Clear all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
