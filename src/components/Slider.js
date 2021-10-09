import React from "react";
import { Carousel } from "react-bootstrap";

function Slider(props) {
    return ( 
        <Carousel interval={30000} className="d-block" >
          {props.images.map((image, index) => {
            return(
              <Carousel.Item key={index} className="text-dark">
                <img className="d-flex w-100" src={image.imageUrl} alt={image.imageTitle} />
                <Carousel.Caption className="text-dark">
                  {/* <h5>{image.imageTitle}</h5> */}
                  {/* <p>{image.imageDescription}</p> */}
                </Carousel.Caption>
              </Carousel.Item>  
            );
          })}
        </Carousel>
    )
}

export default Slider;