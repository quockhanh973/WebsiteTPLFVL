import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import {faLocationDot,faPhoneVolume,faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faFacebookF} from '@fortawesome/free-brands-svg-icons'
import footer from './footer.module.scss'
import { Link } from 'react-router-dom'
import turkeydash from '../../Image/Footer/turkeydash.jpg'
import isoLogo from '../../Image/Footer/iso27001.png'
const  Footer = () => {
    return (
        <>
        
            <div className={footer.colOne}>
                    <div className={footer.companyName}>First Virtue LLC & Transcend People LLC</div>
                    <div className={footer.address}><FontAwesomeIcon icon={faLocationDot} className={footer.addressIcon} />Address: 78/2A Binh Loi, Ward 13, Binh Thanh District, HCMC, Vietnam. </div>
                    <div className={footer.voIP}><FontAwesomeIcon icon={faPhoneVolume} className={footer.voIPicon} /> VoIP: +1 (650) 472 2233 (USA)</div>
                    <div className={footer.phone}><FontAwesomeIcon icon={faPhone} className={footer.phoneIcon} /> Phone: + (84) 28 3948 4086 (Vietnam)</div>
            </div>
            <div className={footer.colTwo}>
                    <div className={footer.ourCareers}>Our Careers</div>
                    <div className={footer.infoJob}>You can click button to apply your information for our jobs</div>
                    <div className={footer.buttonJob}><Link to='/careers' className={footer.linkApplyJob} >Apply Now</Link></div>
            </div>
            <div className={footer.colThree}>
                    <div className={footer.socialLink}>Social Network Link</div>
                    <div className={footer.linkFbFVL}>
                        <a href="https://www.facebook.com/1stvirtue.company/" target="_blank" rel="noopener noreferrer"> 
                        <FontAwesomeIcon icon={faFacebookF} className={footer.fbFVLicon} />First Virtue Limited 
                        </a>
                    </div>
                    <div className={footer.linkFbTPL}>
                        <a href="https://www.facebook.com/FVLTPL" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className={footer.fbTPLicon}/>Transcend People Limited
                        </a>
                    </div>
                    <div className={footer.turkeyDashLink}><a href="https://www.facebook.com/turkeydashvietnam" target="_blank" rel="noopener noreferrer"><img src={turkeydash} alt="turkeydash" /> Turkey Dash VietNam</a></div>
            </div>
            <div className={footer.colFour}>
                 <img src={isoLogo} alt="ISO 27001" />
            </div>
            <div className={footer.copyRight}><span>First Virtue Limited Liability Company & Transcend People Limited Liability Company Copyright © 2008 - 2023 •</span><Link to='/PrivacyPolicy'><span>Privacy Policy</span></Link></div>
        </>
    )

}

export default Footer