import HistoryItem from './HistoryItem'
import './HistoryList.css'

export default function HistoryList({ history, onRegenerate, onDelete, onClearAll }) {
  return (
    <div className="history card" role="region" aria-label="Recent QR Code history">
      <div className="history__header">
        <div className="history__title-row">
          <div className="history__title-group">
            <svg className="history__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <h2 className="history__title">Recent QR History</h2>
          </div>
          <span className="history__count" aria-label={`${history.length} item${history.length !== 1 ? 's' : ''} in history`}>
            {history.length}/5
          </span>
        </div>
        <p className="history__subtitle">Your last {history.length === 1 ? 'generated code is' : `${history.length} generated codes are`} saved locally</p>
      </div>

      <ul className="history__list" role="list" aria-label="QR history items">
        {history.map((item, index) => (
          <HistoryItem
            key={item.id}
            item={item}
            index={index}
            onRegenerate={onRegenerate}
            onDelete={onDelete}
          />
        ))}
      </ul>

      <div className="history__footer">
        <button
          id="btn-clear-history"
          className="btn btn--ghost btn--danger"
          onClick={onClearAll}
          aria-label="Clear all QR code history"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <path d="M10 11v6M14 11v6"/>
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
          </svg>
          Clear All History
        </button>
        <p className="history__privacy-note">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Stored privately in your browser
        </p>
      </div>
    </div>
  )
}
