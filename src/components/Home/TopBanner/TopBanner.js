
import React from 'react';
import { Carousel, Container, Jumbotron } from 'react-bootstrap';
const TopBanner = () => {
    return (
        <div>

<Jumbotron fluid>
  <Container>
    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 " style={{height:'750px'}}
      src='https://thumbs.dreamstime.com/b/mount-rysy-tatras-slovakia-woman-traveler-backpack-tracking-sticks-top-mountain-138514002.jpg'
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFowGVhWDuQULVXBGls6UB5PMhnJFvtmL38eLdx8TCbNvIrzbndzf9Qx61PMR5Ebn6yuM&usqp=CAU'
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkyytucR_is3aF7kAJXRvJP_Smi717dWIyf6e_8spy8744sfUsI7ZpNo9ASIV1ZgC8vhs&usqp=CAU"
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 " style={{height:'750px'}}
      src='https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000412267421/Kayaking%2520at%2520CamSur%2520Watersports%2520Complex-41490f6d-c60e-49d2-adf3-cad6c0aed42e.jpeg?_src=imagekit&tr=c-at_max,h-512,q-60,w-720'
      alt="First slide"
    />
  </Carousel.Item>
</Carousel>
  </Container>
</Jumbotron>


     
        </div>
    );
};

export default TopBanner;