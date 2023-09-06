import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, NavLink } from 'react-router-dom';
import { publicRoutes } from '../../routes';
import DefaultLayout from '../Layout/DefaultLayout';
import header from './header.module.scss';
import fvlLogo from '../../Image/Home/FVL_Logo.png'
import tplLogo from '../../Image/Home/TPL_Logo.png'

const Header = () => {
  const navbarList = ['Home', 'AboutUs', 'Outsourcing', 'Solutions', 'WorkFromHome', 'News', 'Careers', 'Contact'];

  return (
    <BrowserRouter>
       <nav className={header.nav}>
        <div className={header.logo}>
           <NavLink to='/'><img src={fvlLogo} alt="Logo FVL" className={header.logoFVL} /></NavLink>
           <NavLink to='/'><img src={tplLogo} alt="Logo FVL" className={header.logoTPL}/></NavLink>
        </div>
        
        <ul className={header.navbar}>
            {navbarList.map((navbarItem, index) => {
              return (
                <li key={index}>
                  <NavLink to={navbarItem} className={`${header.navLink}`}> {/* Thêm lớp CSS noUnderline */}
                    {navbarItem}
                  </NavLink>
                </li>
              );
            })}
          </ul>
       </nav>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout || DefaultLayout;
          const Page = route.component;
          return (
            <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          );
        })}
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
};

export default Header;
