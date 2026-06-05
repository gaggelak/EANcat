import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AboutUsPage from './AboutUsPage.tsx'
import ProductDetailPage from './ProductDetailPage.tsx'
import WorkWithUsPage from './WorkWithUsPage.tsx'
import ForDistributorsPage from './ForDistributorsPage.tsx'
import ForRetailersPage from './ForRetailersPage.tsx'
import GetApprovedPage from './GetApprovedPage.tsx'
import ScrollToTop from './ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/brand/:brandParam" element={<App />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/for-retailers" element={<ForRetailersPage />} />
        <Route path="/for-distributors" element={<ForDistributorsPage />} />
        <Route path="/get-approved" element={<GetApprovedPage />} />
        <Route path="/work-with-us" element={<WorkWithUsPage />} />
        <Route path="/v3" element={<Navigate to="/" replace />} />
        <Route path="/product/:ean" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
