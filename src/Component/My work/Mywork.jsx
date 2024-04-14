import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import "./Mywork.css"

const Mywork = () => {
  return (
    <div className="Mywork">
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern}></img>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <img key={index} src={work.w_img} />
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <img src={arrow_icon} />
      </div>
    </div>
  );
};
export default Mywork;
