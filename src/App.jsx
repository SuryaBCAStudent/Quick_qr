import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QRGeneratorCard from './components/QRGeneratorCard'
import QRPreview from './components/QRPreview'
import HistoryList from './components/HistoryList'
import Footer from './components/Footer'
import { useQRHistory } from './hooks/useQRHistory'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('')
  const [qrValue, setQrValue]     = useState('')
  const [error, setError]         = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const { history, addToHistory, removeFromHistory, clearHistory } = useQRHistory()

  const handleGenerate = useCallback(() => {
    const trimmed = inputText.trim()
    if (!trimmed) {
      setError('Please enter some text or a URL to generate a QR code.')
      return
    }
    setError('')
    setIsGenerating(true)

    // Tiny delay for the animation feel
    setTimeout(() => {
      setQrValue(trimmed)
      addToHistory(trimmed)
      setIsGenerating(false)
    }, 300)
  }, [inputText, addToHistory])

  const handleClear = useCallback(() => {
    setInputText('')
    setQrValue('')
    setError('')
  }, [])

  const handleRegenerateFromHistory = useCallback((content) => {
    setInputText(content)
    setQrValue(content)
    setError('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Hero />
        <section className="app__generator" aria-label="QR Code Generator">
          <div className="container">
            <QRGeneratorCard
              inputText={inputText}
              setInputText={setInputText}
              onGenerate={handleGenerate}
              onClear={handleClear}
              error={error}
              setError={setError}
              isGenerating={isGenerating}
            />

            {qrValue && (
              <QRPreview
                qrValue={qrValue}
                onReset={handleClear}
              />
            )}

            {history.length > 0 && (
              <HistoryList
                history={history}
                onRegenerate={handleRegenerateFromHistory}
                onDelete={removeFromHistory}
                onClearAll={clearHistory}
              />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
