import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, NavLink } from 'react-router-dom';
import { publicRoutes } from '../../routes';
import DefaultLayout from '../Layout/DefaultLayout';
import styles from './style.module.scss';

const Header = () => {
  const navbarList = ['Home', 'AboutUs', 'Outsourcing', 'Solutions', 'WorkFromHome', 'News', 'Careers', 'Contact'];

  return (
    <BrowserRouter>
       <nav className={styles.nav}>
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
