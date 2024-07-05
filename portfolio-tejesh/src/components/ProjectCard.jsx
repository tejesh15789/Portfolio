import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({title , desc, imgUrl,url}) => {
  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl} alt="" className='project-img' />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>Technologies Used :{desc}</span><br />
                <a href={url} className='project-url'>{url}</a>
            </div>

        </div>
    </Col>
  )
}

export default ProjectCard
