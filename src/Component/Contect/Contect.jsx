import theme_pattern from "../../assets/theme_pattern.svg";
import call_icon from "../../assets/call_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import "./Contect.css";

export default function Contect() {
  return (
    <div className="contect">
      <div className="contect-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} />
      </div>
      <div className="contect-section">
        <div className="contect left">
          <h1>Let's talk</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quia velit placeat, nostrum, suscipit veritatis atque maxime dolorem
            omnis repellat neque rerum quod, itaque fugit excepturi vitae
          </p>
          <div className="contect-details">
            <div className="contect-detail">
              <img src={call_icon} />
              <p>+770-887-897</p>
            </div>
            <div className="contect-detail">
              <img src={mail_icon} />
              <p>alex23@gmail.com</p>
            </div>
            <div className="contect-detail">
              <img src={location_icon} />
              <p>CA,United States</p>
            </div>
          </div>
        </div>
        <form className="contect-right">
          <label>Your name</label>
          <input type="text" placeholder="Enter your name"></input>
          <label>Your Email</label>
          <input placeholder="Enter email" type="email"></input>
          <label>Write your message here</label>
          <textarea placeholder="Enter your message" rows="8"></textarea>
          <div className="contect-button">
            Submit
          
          </div>
        </form>
      
      </div>
    </div>
  );
}
