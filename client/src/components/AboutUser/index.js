import React, { useContext, Fragment } from "react";
import DevDataContext from "../../contexts/DevDataContext"
import { Grid, Image, Container } from 'semantic-ui-react'
import './AboutUser.css'

function AboutUser() {
    const devCtx = useContext(DevDataContext);
    // console.log("ABOUTUSER devCtx", devCtx)
    return (
        <Container className="aboutUser">
            <h3>About {devCtx.state.fname} {devCtx.state.lname}</h3>
            <div className='ui middle aligned two column grid'>

                <Grid.Row className='aboutCard' style={{ padding: 0, }}>
                    <Grid.Column className="aboutSection1" width={15}>
                        <div>
                            <p className='sectionP'>I am a web developer with the following skills and certificates:</p>
                            <li className='cardLi'>Javascript, MongoDB, MySQL/Sequelize, ExpressJS, React, Node, HTML, CSS</li>
                            <li className='cardLi'>Full-Stack Web Developer Certificate, AWS Certified Cloud Practioner</li>
                            <li className='cardLi'>Courses in TypeScript, Ionic, Advanced JavaScript, GraphQL, Docker/Kubernetes</li>
                            <li className='cardLi'>Google Cloud, Firebase, Firestore</li>
                            <li className='cardLi'>Image Creation/Manipulation, GIMP</li>
                            <p className='sectionP'>See my <a className="links" href={devCtx.state.resumeLink} rel="noopener noreferrer" target="_blank"> Resume</a></p>

                        </div>
                        {/* <p><a className="links" href={devData.portfolioLink} rel="noopener noreferrer" target="_blank">Portfolio</a></p> */}
                    </Grid.Column>
                    <Grid.Column width={1}>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className='aboutCard row2' style={{ padding: 0, }}>
                    <Grid.Column width={1}>
                    </Grid.Column>
                    <Grid.Column className="aboutSection2" width={15}>
                        <p className="sectionP"> I am a former environmental engineer.  Many skills that transfer from that experience:</p>
                        <li className='cardLi'>Project Management, Planning, Budgeting, Marketing</li>
                        <li className='cardLi'>Technical Writing, Computer-Aided Design, Preparation of Plans and Specifications</li>
                        <li className='cardLi'>Coordination with Multidisciplinary Groups</li>
                        <li className='cardLi'>Budgeting, Cost Control, Soliciting Bids</li>
                        <li className='cardLi'>Liaison with Regulatory Agencies</li>
                        <li className='cardLi'>Construction Oversight and Certification</li>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row className='aboutCard'>
                    <Grid.Column width={15}>
                        <h3 className="title">About Dynamic Portfolio</h3>

                        <p>
                            My portfolio is built using <a className='links' href="https://github.com/frunox/dynamic-portfolio" rel="noopener noreferrer" target="_blank">Dynamic Portfolio</a>, an app that creates a portfolio from a developer's GitHub projects.  Select which projects to feature with a few clicks!  Originally conceived as <a className='links' href="https://github.com/frunox/jtsy" rel="noopener noreferrer" target="_blank">jtsy Portfolio</a> by <a className='links' href="https://www.linkedin.com/in/shawnhayes70/" rel="noopener noreferrer" target="_blank">Shawn Hayes</a> and co-developed with <a className='links' href="https://www.linkedin.com/in/tomvandeusen/" rel="noopener noreferrer" target="_blank">Tom Van Deusen</a> and <a className='links' href="https://www.linkedin.com/in/yeng-vang-b510a71a3/" rel="noopener noreferrer" target="_blank">Yeng Vang</a>, I've taken the template, made it more performant, and customized it to show my projects with my styling.
                         </p>
                    </Grid.Column>
                </Grid.Row>


                {/* <Grid.Row>
                        <Grid.Column width={5}>
                            <Image src='https://i.ibb.co/WGLz1Ws/Loon-Close-Up.jpg' />
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <p> I am also an avid photographer, concentrating on landscapes and wildlife. Some of my images are used in this application.</p>
                        </Grid.Column>
                    </Grid.Row> */}
            </div>
        </Container>
    )
}
export default AboutUser;