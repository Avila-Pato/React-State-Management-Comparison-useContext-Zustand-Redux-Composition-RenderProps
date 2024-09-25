import { StrictMode } from 'react'
import App from './App'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './queryCliente'

ReactDOM.createRoot(document.getElementById('root') as 
HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </StrictMode>,
)
