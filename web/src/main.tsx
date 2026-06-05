import { Suspense, StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ScrollToTop from './ScrollToTop.tsx'

const AboutUsPage = lazy(() => import('./AboutUsPage.tsx'))
const ProductDetailPage = lazy(() => import('./ProductDetailPage.tsx'))
const WorkWithUsPage = lazy(() => import('./WorkWithUsPage.tsx'))
const ForDistributorsPage = lazy(() => import('./ForDistributorsPage.tsx'))
const ForRetailersPage = lazy(() => import('./ForRetailersPage.tsx'))
const GetApprovedPage = lazy(() => import('./GetApprovedPage.tsx'))
const BlogPage = lazy(() => import('./BlogPage.tsx'))
const BlogPostPage = lazy(() => import('./BlogPostPage.tsx'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-[hsl(220_18%_97%)]" />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/brand/:brandParam" element={<App />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/for-retailers" element={<ForRetailersPage />} />
          <Route path="/for-distributors" element={<ForDistributorsPage />} />
          <Route path="/get-approved" element={<GetApprovedPage />} />
          <Route path="/work-with-us" element={<WorkWithUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/v3" element={<Navigate to="/" replace />} />
          <Route path="/product/:ean" element={<ProductDetailPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
