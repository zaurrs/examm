import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Basket from './pages/basket/Basket'
import Admin from './pages/admin/Admin'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Wish from './pages/basket/Wish'

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
  },
  {
    path:"/productdetail/:id",
    element:<Detail />
  },
  {
    path:"/wishlist",
    element:<Wish />
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
