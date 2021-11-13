import "../../css/homepage.css";

const AppointmentBanner = () => {
    return ( 
        <div className={`appointment-banner `}>
            <div className="appointmentlogo">
                <img src="" alt="" />
            </div>
            <div className={`appbanner-content`}>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde consequuntur quo sed hic alias dolore.</p>
            </div>
            <button className={`font-col-white button`}>Book Appointment</button>

        </div>
     );
}
 
export default AppointmentBanner;