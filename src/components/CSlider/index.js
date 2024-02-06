import React from 'react'
import Carousel from "react-multi-carousel";
import './styles.css'
import SliderDots from '../SliderDots';


const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  
const ImageSlider = ({children}) => {
  return (
    <Carousel
      partialVisbile={false}
      minimumTouchDrag={80}
      additionalTransfrom={0}
      arrows={false}
      centerMode={false}
      autoPlay={true}
      autoPlaySpeed={1000}
      draggable={true}
      swipeable={true}
      focusOnSelect={false}
      infinite={true}
      keyBoardControl
      renderButtonGroupOutside={false}
      containerClass="container-with-dots"
      itemClass="offerImgContainer"
      responsive={responsive}
      showDots={ true}
      customDot={<SliderDots />}
      dotListClass="sliderDots"
    >
     {images(children)}
    </Carousel>
  )
}

const images = (data) => {

    return data?.map((item) => (
      <div className="imgContainer" key={item}>
        <img
          className="offerImg"
          alt="main-offer"
          src={item}
        />
      </div>
    ));
  };


export default ImageSlider
