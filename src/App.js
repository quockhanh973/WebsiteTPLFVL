import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Link, NavLink} from "react-router-dom"
import { publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import Header from './components/Header';
function App() {
  const navbarList = ['Home', 'AboutUs', 'Outsourcing', 'Solutions', 'WorkFromHome', 'News', 'Careers', 'Contact'];
  return (
    <div className="App">
          <Header />
    </div>
  );
}

export default App;
