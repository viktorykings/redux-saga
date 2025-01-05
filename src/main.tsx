import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { BrowserRouter, Routes, Route } from "react-router";
import LatestNews from './pages/latestNews.tsx'
import PopularNews from './pages/popularNews.tsx'
import Home from './pages/home.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="latest-news" element={<LatestNews />} />
            <Route path="popular-news" element={<PopularNews />} />
          </Routes>
        </App>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
