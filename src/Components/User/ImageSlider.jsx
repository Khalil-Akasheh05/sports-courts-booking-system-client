import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../assets/ImageSlider1.jpg";
import image2 from "../../assets/ImageSlider2.webp";
import image3 from "../../assets/ImageSlider3.jpg";
import "./css/ImageSlider.css";
function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={image1} alt="" />
         <Carousel.Caption>
          <h3>Pro Grade Courts</h3>
          <p>Master your serve on our premium synthetic grass and hard courts.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt="" />
         <Carousel.Caption>
          <h3>Dream big, play hard</h3>
          <p>Full-court urban arenas equipped with professional hoops and night lightning.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="" />
         <Carousel.Caption>
          <h3>The champions field</h3>
          <p>High-performance turf designed for speed, precision, and ultimate control.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;