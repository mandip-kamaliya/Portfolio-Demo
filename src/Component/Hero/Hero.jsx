import profile from "../../assets/profile_img.svg";
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero">
      <img src={profile} />
      <div className="hero-section">
        <h1> <span>I'm Alex Bennet,</span> frontend developer based in USA.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sapiente maxime, distinctio non facere asperiores nam aliquid laudantium ad animi error odit, itaque accusamus perferendis aliquam, similique hic! Accusamus, ab.
        </p>
      </div>

      <div className="hero-action">
        <div className="hero-connect">connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}
