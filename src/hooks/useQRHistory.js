import { useState, useEffect } from 'react'

const STORAGE_KEY = 'quickqr_history'
const MAX_HISTORY = 5

export function useQRHistory() {
  const [history, setHistory] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
    } catch {
      // localStorage unavailable – silently ignore
    }
  }, [history])

  const addToHistory = (content) => {
    setHistory(prev => {
      // Remove duplicate if same content already exists
      const filtered = prev.filter(item => item.content !== content)
      const newItem = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        content,
        timestamp: new Date().toISOString(),
      }
      return [newItem, ...filtered].slice(0, MAX_HISTORY)
    })
  }

  const removeFromHistory = (id) => {
    setHistory(prev => prev.filter(item => item.id !== id))
  }

  const clearHistory = () => {
    setHistory([])
  }

  return { history, addToHistory, removeFromHistory, clearHistory }
}
