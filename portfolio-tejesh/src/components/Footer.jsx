import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <section className='footer-block py-5 text-center'>
        <Container>
          <Row>
            <Col> <p>copyright &copy; 2024</p></Col>
            <Col>  <div className="social-icon">
              <a href="https://www.linkedin.com/in/tejesh-reddy-eanguwar-a08230296/"><img src='./images/nav-icon1.svg' alt="" /></a>
              <a href="#"><img src='./images/nav-icon2.svg' alt="" /></a>
              <a href="#" className='text-decoration-none text-light fs-4'><i className="fa-brands fa-square-github githubs"></i></a>
            </div></Col>
          
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer
