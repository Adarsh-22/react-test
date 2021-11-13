import Carousel from "react-multi-carousel";
import "../../css/homepage.css";
import "react-multi-carousel/lib/styles.css";
import React, { Component } from 'react';
import Docphoto from "../../images/homepage/docphoto.png";


class Drslider extends React.Component {
 
  render() { 
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
      const { carouselState: { currentSlide } } = rest;
      return (
        <div className="carousel-button-group"> 
          <button id="arrow-left" className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} ><i class="fas fa-angle-left"></i></button>
          <button id="arrow-right" onClick={() => next()} ><i class="fas fa-angle-right"></i></button>
          
        </div>
      );
    };
    
    return <div className={`home-drslider`}>
                <h1 className={`home-head`}>Ui Ux Team</h1>
                
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
                            <img src={Docphoto} alt="" />
                            <div className={`content-below`}>
                            <div>
                            <h3>Dr Mushya</h3>
                            <p className={`degree`}>MBBS</p>
                            </div>
                            <p className={`docspecality`}>Orthopedics</p>
                            </div>
                    </div>
                    <div className={`item`}>
                            <img src={Docphoto} alt="" />
                            <div className={`content-below`}>
                            <div>
                            <h3>Dr Mushya</h3>
                            <p className={`degree`}>MBBS</p>
                            </div>
                            <p className={`docspecality`}>Orthopedics</p>
                            </div>
                    </div>
                    <div className={`item`}>
                            <img src={Docphoto} alt="" />
                            <div className={`content-below`}>
                            <div>
                            <h3>Dr Mushya</h3>
                            <p className={`degree`}>MBBS</p>
                            </div>
                            <p className={`docspecality`}>Orthopedics</p>
                            </div>
                    </div>
                    <div className={`item`}>
                            <img src={Docphoto} alt="" />
                            <div className={`content-below`}>
                            <div>
                            <h3>Dr Mushya</h3>
                            <p className={`degree`}>MBBS</p>
                            </div>
                            <p className={`docspecality`}>Orthopedics</p>
                            </div>
                    </div>
                    
                    
                </Carousel>
                </div>
            
  }
}
 
export default Drslider;
