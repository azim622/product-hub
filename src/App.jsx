import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home/Home/Home'
import NotFound from './pages/NotFound/NotFound'

function App() {
  const router = createBrowserRouter([
    {path: '/', errorElement: <NotFound/>, element: <MainLayout />, children: [
      {path: '/', element: <Home />}
    ]}
  ])

  return <RouterProvider router={router} />
}

export default App
