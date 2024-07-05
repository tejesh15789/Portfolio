import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
  return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <div >
                            <p><ul><li><b> Programming Languages:</b> JavaScript ,Core Python</li>
                                    <li><b>Frameworks and Libraries:</b>React Js ,Bootstrap , Basics in Jquery</li>
                                    <li><b>Databases:</b>SQL</li>
                                </ul></p>
                           
                            </div>
                           
                            <Carousel className='skill-slider' responsive={responsive} infinite={true}>
                                <div className="item">
                                    <img src="./images/meter1.svg" alt="images" />
                                    <h5>REACT JS</h5>
                                </div>
                                <div className="item">
                                    <img src="./images/meter1.svg" alt="images" />``
                                    <h5>JAVASCRIPT</h5>
                                </div>
                                <div className="item">
                                    <img src="./images/meter1.svg" alt="images" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src="./images/meter1.svg" alt="images" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src="./images/meter1.svg" alt="images" />
                                    <h5>BOOTSTRAP</h5>
                                </div>
                                <div className="item">
                                    <img src="./images/meter3.svg" alt="images" />
                                    <h5>JQUERY</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src="./images/color-sharp.png" alt="simple img" className='background-image-left' />
        </section>
  )
}

export default Skills
