import stylepages from '../stylepages.module.scss';
import home  from './home.module.scss';

const Home = () => {
    return ( 
        <>
            <div className={stylepages.container}>
            <div className={`${home.banner} ${stylepages.banner}`}>
                 
                 </div>
                 <div className={`${stylepages.content} ${home.content}`}>
                     content
                 </div>
            </div>
        </>
     );
}

export default Home;