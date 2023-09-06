import Footer from "../../Footer"

const defaultLayout = ({children}) => {
    return (
        <>
            
            <div className="content-container"> 
                <div>{children}</div>
                
            </div>
            <Footer />
        </>
    )
}


export default defaultLayout