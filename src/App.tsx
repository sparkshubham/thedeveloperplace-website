import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import Demos from './pages/Demos'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="demos" element={<Demos />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
