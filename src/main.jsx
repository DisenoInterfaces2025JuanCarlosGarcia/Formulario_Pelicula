/**
 * Entry point for the React application.
 *
 * Sets up and mounts the top-level React tree:
 * - Imports React StrictMode and react-dom's createRoot to initialize the React app.
 * - Wraps the application with BrowserRouter to enable client-side routing.
 * - Renders the App component into the DOM element with id "root".
 * - Adds an accessible "skip to main content" anchor that is visually hidden by default and becomes visible on focus,
 *   improving keyboard and screen-reader navigation. The skip link points to an element with id "main-content" which
 *   should be present in the rendered application.
 *
 * Side effects:
 * - Invokes createRoot(...).render(...) to mount the application on module import.
 *
 * @module main
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './assets/styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      {/* Enlace de salto accesible */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-700 text-white px-4 py-2 rounded z-50"
      >
        Saltar al contenido principal
      </a>
      
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  </StrictMode>,
)
