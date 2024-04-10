import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home.jsx'
import { ChakraProvider } from "@chakra-ui/react"
import Payment from './components/Payment.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
   

  },
  {
    path:"/paymentsuccess",
    element:<Payment/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <ChakraProvider>
      <RouterProvider router={router} >
        <App />

      </RouterProvider>


    </ChakraProvider>



)
