import Carousel from "react-multi-carousel";
import "../../css/homepage.css";
import "react-multi-carousel/lib/styles.css";
import React, { Component } from 'react';
import Docphoto from "../../images/homepage/docphoto.png";


class Otherfacility extends React.Component {
    render() { 
        const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
      const { carouselState: { currentSlide } } = rest;
      return (
        <div className="carousel-button-group1"> 
          <button id="arrow-left" className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} ><i class="fas fa-angle-left"></i></button>
          <button id="arrow-right" onClick={() => next()} ><i class="fas fa-angle-right"></i></button>
          
        </div>
      );
    };
        return <div className={`home-otherfacility`}>
                {/* <h1 className={`home-head`}>Ui Ux Team</h1> */}
                
                <Carousel
                      swipeable={true}
                      arrows={false}
                      draggable={false}
                      showDots={false}
                      customButtonGroup={<ButtonGroup />}
                      renderButtonGroupOutside={true}
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
                    <div className={`item`}>
                    <div className="left">
                      <h3>Lorem, ipsum dolor.</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo error soluta molestiae magni odit, quo tempore. Commodi pariatur nihil cumque.</p>
                    </div>
                    <div className={`right flex-center`}>
                    <img src={Docphoto} alt="" />
                    </div>
                            
                    </div>
                    
                    
                    
                </Carousel>
                </div>
    }
}
 
export default Otherfacility;