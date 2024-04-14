import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
              repellendus dicta.{" "}
            </p>
            <p>
              Enim eaque quidem totam ipsam suscipit soluta voluptatum maiores
              reprehenderit iure atque cumque repudiandae ex, accusantium,
              quibusdam eveniet nemo.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
            <div className="about-skill">
              <p>REACTJS</p>
              <hr style={{ width: "60%" }}></hr>
            </div>
            <div className="about-skill">
              <p>NEXTJS</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
          </div>
        </div>

      </div>
      
      
        
      <div className="about-achivements">
          <div className="about-achivement">
          <h1>10+</h1>
          <p>YEARS OF EXPERINCE</p>
          </div>
         <hr/> <div className="about-achivement">
          <h1>90+</h1>
          <p>PROJECT COMPLETED</p>
          </div>
         <hr/>
         
         <div className="about-achivement">
          <h1>50+</h1>
          <p>HAPPY CLIENTS</p>
          </div>
        </div>
      
    </div>
  );
}
