import React from 'react'
import { Container, Row, Col, TabContent, Tab } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "BrightInfoTech",
            desc: "React JS ",
            imgUrl: './images/bright-screenshot.png',
            url: "https://bright-infotech.onrender.com/",
        },
        {
            title: "Chips",
            desc: "Javascript,CSS,HTML,Bootstrap",
            imgUrl: './images/chips-pro.png',
            url: "https://github.com/tejesh15789/Chips",
        },
        {
            title: "Drum-onClick",
            desc: "Javascript,CSS,HTML",
            imgUrl: './images/drum-stick.png',
            url: "https://github.com/tejesh15789/DRUM-KIT-PRO",
        },
        {
            title: "Simon Game",
            desc: "Javascript,CSS,HTML",
            imgUrl: './images/simon-game.png',
            url: "",
        },
        {
            title: "Mark Memo",
            desc: "Javascript,CSS,HTML",
            imgUrl: './images/mark-memo.png',
            url: "",
        },
        {
            title: "Fresh",
            desc: "Javascript,CSS,HTML,Bootstrap",
            imgUrl: './images/products-cards.png',
            url: "",
        }


    ]

    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = './images/tejesh_resume.pdf'; // Replace with the actual path to your PDF file
        // link.download = "Tejesh-Resume.pdf"; // Replace with the desired file name
        link.open = "Tejesh-Resume.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">About me </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Resume</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>

                                <Tab.Pane eventKey="first">
                                    <h2>Projects</h2>
                                    <p > Gained hands-on experience with React and Javascript, improved problem-solving skills, and learned the importance of performance optimization in front-end development.
                                    </p>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <Col className=''>
                                            <h3 className='about-me fw-bold text-center'>ABOUT ME</h3>
                                            <p>I am Tejesh Reddy Eanguwar, a passionate and dedicated Front-End Developer currently working at SoftGrid Info Pvt Ltd since August 2023. I graduated with a B.Sc. in Computer Science in 2023, achieving a 67% score. My intermediate education was completed at Akshara College, Hyderabad, where I secured 76%, and my schooling was at St. Joseph Convent High School, Adilabad, with an 80% score.</p>
                                            <p>
                                                In my current role, I specialize in developing user-friendly web interfaces using technologies such as React.js, JavaScript, HTML, CSS, Bootstrap, and SQL. My hands-on experience with these tools allows me to create responsive and dynamic web applications that meet client needs and enhance user experience.
                                            </p>
                                            <p>
                                                Beyond my professional life, I have a keen interest in playing cricket and swimming, which keep me active and refreshed. I also enjoy exploring various topics and tutorials on YouTube, continually seeking to expand my knowledge and stay updated with the latest trends in web development.
                                            </p>

                                        </Col>
                                        <Col className=' d-flex justify-content-center align-items-center'>
                                            <div className=' w-50 '>
                                                <img src="./images/tejesh-pht.jpg" alt="" className='border' />
                                            </div>

                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className='d-flex justify-content-center'>
                                    <button className='styled-btn' onClick={downloadPDF}>
                                        <span className="text">Resume</span>
                                        <span className="blob"></span>
                                        <span className="blob"></span>
                                        <span className="blob"></span>
                                        <span className="blob"></span>
                                    </button>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img src="./images/color-sharp2.png" alt="" /> */}
        </section>
    )
}

export default Projects
