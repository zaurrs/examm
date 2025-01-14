import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Basket from './pages/basket/Basket'
import Admin from './pages/admin/Admin'
import Home from './pages/Home'

const router = createBrowserRouter([
{
  path:"/",
  element:<Layout />,
  children:[{
    path:"/",
    element:<Home />
  },
  {
    path:"/basket",
    element:<Basket />
  },
  {
    path:"/admin",
    element:<Admin />
  }
]
}
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
