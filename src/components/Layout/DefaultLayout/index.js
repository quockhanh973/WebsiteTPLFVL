import Banner from "../../Banner"
import Footer from "../../Footer"


const defaultLayout = ({children}) => {
    return (
        <>
            <Banner />
            <div className="content-container"> 
                <div>{children}</div>
            </div>
            <Footer />
        </>
    )
}


export default defaultLayout