
import Carousel from 'react-bootstrap/Carousel';

// Define the ExampleCarouselImage component
const ExampleCarouselImage = ({ text }) => {
  return (
    <div>
      <img src={text} alt="Carousel slide" style={{ height: '580px', width: '1300px', objectFit: 'cover' }} />
    </div>
  );
};

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="nature4.jpg" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nature is a beautiful</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="nature3.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nature holds a balance between diverse ecosystems for smooth functioning..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="nature2.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nature is everything present around us. Human beings depend on nature for fulfilling their needs. It provides the humans, animals, and all the living beings on the earth a place to survive..</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
