import stylepages from '../stylepages.module.scss';
import styles  from './style.module.scss';

const Home = () => {
    return ( 
        <>
            <div className={`${styles.banner} ${stylepages.banner}`}>
                 
            </div>
            <div className={`${stylepages.content} ${styles.content}`}>
                content
            </div>
        </>
     );
}

export default Home;