import theme_pattern from "../../assets/theme_pattern.svg"
import services_data from "../../assets/services_data.js"
import arrow from "../../assets/arrow_icon.svg"
import "./Services.css"


export default function Services(){
    return <div className="services">
        <div className="services-title">
            <h1> My Services</h1>
            <img src={theme_pattern}/>
        </div>
            <div className="services-container">
                {services_data.map((services,index)=>{
                    return <div className="services-format" key={index}>
                        <h3>{services.s_no}</h3>
                        <h2>{services.s_name}</h2>
                        <p>{services.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read more</p>
                            <img src={arrow}/>
                        </div>
                    </div>

                })}
        </div>
    </div>
}