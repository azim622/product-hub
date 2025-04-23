import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import AllProducts from './pages/AllProducts/AllProducts'

function App() {
  const router = createBrowserRouter([
    {path: '/', errorElement: <NotFound/>, element: <MainLayout />, children: [
      {path: '/', element: <Home />},
      {path: '/products', element: <AllProducts />},
      {path: '/products/product-details/:id', element: <ProductDetails />}
    ]}
  ])

  return <RouterProvider router={router} />
}

export default App
