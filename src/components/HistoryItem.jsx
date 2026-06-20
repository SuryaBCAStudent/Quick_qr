import { useState, useCallback } from 'react'
import './HistoryItem.css'

function formatRelativeTime(isoString) {
  const now  = new Date()
  const then = new Date(isoString)
  const diff = Math.floor((now - then) / 1000)

  if (diff < 5)   return 'just now'
  if (diff < 60)  return `${diff}s ago`
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
  return `${Math.floor(diff / 86400)}d ago`
}

export default function HistoryItem({ item, index, onRegenerate, onDelete }) {
  const [deleting, setDeleting] = useState(false)

  const handleDelete = useCallback(() => {
    setDeleting(true)
    // brief animation before removing
    setTimeout(() => onDelete(item.id), 250)
  }, [item.id, onDelete])

  const truncated = item.content.length > 60
    ? item.content.slice(0, 60) + '…'
    : item.content

  return (
    <li
      className={`history-item${deleting ? ' history-item--deleting' : ''}`}
      style={{ animationDelay: `${index * 0.05}s` }}
      aria-label={`History item: ${truncated}`}
    >
      <div className="history-item__content">
        <div className="history-item__index" aria-hidden="true">{index + 1}</div>
        <div className="history-item__text-group">
          <p className="history-item__text" title={item.content}>{truncated}</p>
          <time
            className="history-item__time"
            dateTime={item.timestamp}
            title={new Date(item.timestamp).toLocaleString()}
          >
            {formatRelativeTime(item.timestamp)}
          </time>
        </div>
      </div>

      <div className="history-item__actions">
        <button
          className="history-item__btn history-item__btn--regen"
          onClick={() => onRegenerate(item.content)}
          aria-label={`Regenerate QR for: ${truncated}`}
          title="Generate QR again"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="1 4 1 10 7 10"/>
            <path d="M3.51 15a9 9 0 1 0 .49-4.95"/>
          </svg>
          <span>Regenerate</span>
        </button>

        <button
          className="history-item__btn history-item__btn--delete"
          onClick={handleDelete}
          aria-label={`Delete history item: ${truncated}`}
          title="Delete this item"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </li>
  )
}
