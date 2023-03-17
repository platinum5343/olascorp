import {
  createBrowserRouter,
  Outlet,
  RouterProvider, 
} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Landingpage from './pages/Landingpage/Landingpage';
import Products from './pages/Products';
import Project from './pages/Project';

const Layout = () =>{
  return (
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
{
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"/",
      element:<Landingpage/>
    },
    {
      path:"/products/:id",
      element:<Products/>
    },
    {
      path:"/product/:id",
      element:<Project/>
    },
  ]
},


])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;