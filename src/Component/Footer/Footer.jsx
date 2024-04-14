import footer_icon from "../../assets/footer_logo.svg"
import "./Footer.css"
import user_icon from "../../assets/user_icon.svg"

export default function Footer(){
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_icon}/>
                    <p>I am frontend developer from USA with 10 years of experience in companies like Microsoft,Tesla and Apple.</p>
                </div>
               <div className="footer-top-right">
               <div className="footer-email-input">
                    <img src={user_icon}/>
                    <input type="email" placeholder="Enter your Email"></input>
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
               </div>             
            </div>
            <hr></hr>
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>@ 2023 Alex Bennet.All right reserved.</p>
                </div>
                <div className="footer-remain">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>        
                    <p>Connect With me</p>
                </div>
            </div>
        </div>
    )
}