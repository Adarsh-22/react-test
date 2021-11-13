import "../../css/homepage.css";
import Facility1 from "../../images/homepage/ICU1.jpg";
const Facility = () => {
    return (
        <div className="home-facility">
            <h1 className={`home-head`}>Top Facility</h1>
 <div class="container">
    <div class="part">
        <img src={Facility1} alt="" />
        <h1>Intensive Care Unit</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sed.
           
        </p>
    </div>
    <div class="part">
    <img src={Facility1} alt="" />

        <h1>Intensive Care Unit</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sed.
            
        </p>
    </div>
    <div class="part">
    <img src={Facility1} alt="" />

        <h1>Intensive Care Unit</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sed.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sed.
            
        </p>
    </div>
 </div>
        </div>
      );
}
 
export default Facility;