import "../../css/homepage.css";
import Hospitaldp from "../../images/homepage/hospital-dp.JPG";

const HomeBanner = () => {
    return ( 
        <div className="home-banner">
          <div class=" hb container">
           <div class="hb-img flex-center "><img src={Hospitaldp} alt="" /></div>
                <div className=" hb-right">
                    <div class="hb-h1">
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <div class="hb-h2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, magnam!
                    </div>
                    <div className="banner-btn">
                    <button class="hb-btn">LEARN MORE</button>
                    <button class="hb-btn">LEARN MORE</button>
                    </div>
                    
                  </div>
           </div>
        </div>
     );
}
 
export default HomeBanner;
