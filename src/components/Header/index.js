import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, NavLink } from 'react-router-dom';
import { publicRoutes } from '../../routes';
import DefaultLayout from '../Layout/DefaultLayout';
import styles from './style.module.scss';
import fvlLogo from '../../Image/Home/FVL_Logo.png'
import tplLogo from '../../Image/Home/TPL_Logo.png'

const Header = () => {
  const navbarList = ['Home', 'AboutUs', 'Outsourcing', 'Solutions', 'WorkFromHome', 'News', 'Careers', 'Contact'];

  return (
    <BrowserRouter>
       <nav className={styles.nav}>
        <div className={styles.logo}>
           <NavLink to='/'><img src={fvlLogo} alt="Logo FVL" className={styles.logoFVL} /></NavLink>
           <NavLink to='/'><img src={tplLogo} alt="Logo FVL" className={styles.logoTPL}/></NavLink>
        </div>
        
        <ul className={styles.navbar}>
            {navbarList.map((navbarItem, index) => {
              return (
                <li key={index}>
                  <NavLink to={navbarItem} className={`${styles.navLink}`}> {/* Thêm lớp CSS noUnderline */}
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
