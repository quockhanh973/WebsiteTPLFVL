import { BrowserRouter, Routes, Route, Outlet, Link, NavLink} from "react-router-dom"
import { publicRoutes } from '../../routes';
import DefaultLayout from '../Layout/DefaultLayout';
const Header = () => {

  const navbarList = ['Home', 'AboutUs', 'Outsourcing', 'Solutions', 'WorkFromHome', 'News', 'Careers', 'Contact']

  return (
    <>
         <BrowserRouter>
        <nav>
              <ul>
              {navbarList.map((navbarItem, index) => {
                  return (
                  <li key={index}>
                      <NavLink to={navbarItem}>{navbarItem}</NavLink>
                  </li>
                  )
              })}
              </ul>
          </nav>
        <Routes>
              {
                publicRoutes.map((route, index) => 
                  {
                    const  Layout = route.layout || DefaultLayout;
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={
                                                                      <Layout><Page /></Layout>                    
                                                                } />
                  })
                }
          </Routes>
          <Outlet />
      </BrowserRouter>
        
    </>
    

  )
}

export default Header
