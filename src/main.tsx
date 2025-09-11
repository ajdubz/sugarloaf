import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ErrorBoundary } from './ErrorBoundary'
import './main.css'

// Optional: enable API mocks in dev by setting VITE_ENABLE_MSW=true
if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MSW === 'true') {
  // Top-level await is supported by Vite
  const { worker } = await import('./mocks/browser')
  await worker.start({ onUnhandledRequest: 'bypass' })
}

// Surface otherwise-silent runtime errors early in dev
window.addEventListener('error', (e) => {
  // eslint-disable-next-line no-console
  console.error('Window error:', e.error ?? e.message)
})
window.addEventListener('unhandledrejection', (e) => {
  // eslint-disable-next-line no-console
  console.error('Unhandled promise rejection:', e.reason)
})

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Root element #root not found')

createRoot(rootEl).render(
  <ErrorBoundary>
    <StrictMode>
      <App />
    </StrictMode>
  </ErrorBoundary>,
)
