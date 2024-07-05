import React from 'react'
import { useState , useEffect } from 'react'
import { Row,Container,Col} from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'


const Banner = () => {
    const [loopNum , setLoppNum] = useState(0)
    const [isDeleting , setIsDeleting] = useState(false)
    const toRotate = ["Front-End Developer" , "web Designer" , "UI/UX Designer"]
    const [text,setText] = useState('')
    const [delta,setDelta] = useState(300-Math.random()*100)
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return ()=> {clearInterval(ticker)};
    }, [text])
    const tick = ()=>{
        let i= loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0,text.length+1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoppNum(loopNum +1);
            setDelta(500);
        }
    }
  return (
    <div>
      <section className="banner" id="home">
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                <span className='tagline'>Welcome to My portfolio</span>
                <h1>{`Hi I'm Tejesh Reddy `} <span className='wrap'>{text}</span></h1>
                <p>Hi, I'm a passionate front-end developer with a knack for creating visually appealing and user-friendly websites. With 1 years of experience, I specialize in HTML, CSS, JavaScript, and there library like React js and Jquery, modern frameworks like Bootstarp.
                .</p>
                <button onClick={()=> console.log('connect')}> Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src="./images/header-img.svg" alt="Headder Tag" />
                </Col>
            </Row>
        </Container>

      </section>
    </div>
  )
}

export default Banner
