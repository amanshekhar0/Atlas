import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Country from './Pages/Country'
import Home from './Pages/Home'
import Appalayout from './Components/Layout/Appalayout'
import ErrorPage from './Components/Layout/UI/ErrorPage'
import { CountryDetails } from './Components/Layout/UI/CountryDetails'


const router=createBrowserRouter([
  {
    path:"/",
    element:<Appalayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"country",
        element:<Country/>
      },
      {
        path:"country/:id",
        element:<CountryDetails/>
      }
    
    ]
  },

 
])
function App() {


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
