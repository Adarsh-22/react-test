import Navbar from "./components/navbar/navbar";
import Facility from "./components/homepage/facility";
import HomeBanner from "./components/homepage/homebanner.js";
import AppointmentBanner from "./components/homepage/appointmentbanner"
import Drslider from "./components/homepage/drslider.js";
import Otherfacility from "./components/homepage/otherfacility.js";
import HomeProcedure from "./components/homepage/procedure-slider.js";
import Footer from "./components/footer.js";
import NavTop from "./components/navbar/navbartop";



function App() {
  return (
    <div className="App">
       
         <NavTop />
      
        <Navbar />
        <HomeBanner />
        <header className="container">
        <HomeProcedure />
        <AppointmentBanner />
        
        <Facility />
        <Drslider />
        <Otherfacility />
        
        
        
        </header>
        {/* <Footer /> */}

    </div>
  );
}

export default App;
