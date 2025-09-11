// src/ErrorBoundary.tsx
import React from 'react'
import './ErrorBoundary.css'

export class ErrorBoundary extends React.Component<React.PropsWithChildren, { error?: Error }> {
  state = { error: undefined as Error | undefined }
  static getDerivedStateFromError(error: Error) {
    return { error }
  }
  render() {
    if (this.state.error) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <pre className="error-boundary__details">{String(this.state.error)}</pre>
        </div>
      )
    }
    return this.props.children
  }
}
