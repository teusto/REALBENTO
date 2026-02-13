import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      setDeferredPrompt(null)
    }
  }

  return (
    <div className="pwa-container">
      <img src="/pwa-192x192.png" className="pwa-icon" alt="App Icon" />
      <h1>PWA Base</h1>
      {deferredPrompt && (
        <button className="install-button" onClick={handleInstallClick}>
          Install App
        </button>
      )}
      {!deferredPrompt && (
        <p className="install-hint">
          App is installed or not installable on this device.
        </p>
      )}
    </div>
  )
}

export default App
