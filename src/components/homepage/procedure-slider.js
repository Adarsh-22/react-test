import Carousel from "react-multi-carousel";
import "../../css/homepage.css";
import "react-multi-carousel/lib/styles.css";
import React, { Component } from 'react';
import Docphoto from "../../images/homepage/docphoto.png";

class ProcedureSlider extends React.Component {
  render() { 
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
       
      },
      tablet: {
        breakpoint: { max: 1304, min: 464 },
        items: 2,
       
      },
      mobile: {
        breakpoint: { max: 664, min: 0 },
        items: 1,
        
      }
    };

    return <div className="procedure-slider ">
        <h1 className="home-head">Procedure</h1>
      <Carousel
         swipeable={true}
         arrows={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={ true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" 
        // centerMode={true}
      >
          <div class="procedure-item ">
            <img src={Docphoto} alt="" />
            <div className=" p-right">
              <span>procedure</span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, deleniti?</p>
            </div>  
          </div>
          <div class="procedure-item ">
            <img src={Docphoto} alt="" />
            <div className=" p-right">
              <span>procedure</span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, deleniti?</p>
            </div>  
          </div>
          <div class="procedure-item ">
            <img src={Docphoto} alt="" />
            <div className=" p-right">
              <span>procedure</span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, deleniti?</p>
            </div>  
          </div>
          <div class="procedure-item ">
            <img src={Docphoto} alt="" />
            <div className=" p-right">
              <span>procedure</span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, deleniti?</p>
            </div>  
          </div>
          <div class="procedure-item ">
            <img src={Docphoto} alt="" />
            <div className=" p-right">
              <span>procedure</span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, deleniti?</p>
            </div>  
          </div>
          
        
           
              
            
         

 </Carousel>
    </div>;
  }
}
 
export default ProcedureSlider;