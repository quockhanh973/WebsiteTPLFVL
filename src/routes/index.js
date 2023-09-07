import WorkFromHome from "../pages/WorkFromHome";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import News from "../pages/News";
import Outsourcing from "../pages/Outsourcing";
import Solutions from "../pages/Solutions";
import PrivacyPolice from "../pages/PrivacyPolicy";

const  publicRoutes = [
    {path: '/', component: Home},
    {path: '/Home', component: Home},
    {path: '/AboutUs', component: AboutUs},
    {path: '/Outsourcing', component: Outsourcing},
    {path: '/Solutions', component: Solutions},
    {path: '/WorkFromHome', component: WorkFromHome},
    {path: '/News', component: News},
    {path: '/Careers', component: Careers},
    {path: '/Contact', component: Contact},    
    {path: '/PrivacyPolice', component: PrivacyPolice}
];
const  privateRoutes = [];

export  {publicRoutes, privateRoutes} 


