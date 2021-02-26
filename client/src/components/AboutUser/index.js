import React, { useContext, Fragment } from "react";
import DevDataContext from "../../contexts/DevDataContext"
import { Grid, Image, Container } from 'semantic-ui-react'
import './AboutUser.css'

function AboutUser() {
    const devCtx = useContext(DevDataContext);
    // console.log("ABOUTUSER devCtx", devCtx)
    return (
        <Fragment>
            <Container className="grid">
                <div className='ui middle aligned two column grid'>
                    <h3>About {devCtx.state.fname} {devCtx.state.lname}</h3>
                    <Grid.Row className='aboutCard' style={{ padding: 0, }}>
                        <Grid.Column className="aboutSection1" width={12}>
                            <div>
                                <p className='sectionP'>A web developer with the following skills:</p>
                                <li className='cardLi'>Javascript, MongoDB, MySQL/Sequelize, ExpressJS, React, Node, HTML, CSS</li>
                                <li className='cardLi'>Full-Stack Web Developer Certificate, AWS Certified Cloud Practioner</li>
                                <li className='cardLi'>Courses in TypeScript, Ionic, Advanced JavaScript, GraphQL, Docker/Kubernetes</li>
                                <li className='cardLi'>Google Cloud, Firebase, Firestore</li>
                                <li className='cardLi'>Image Creation/Manipulation, GIMP</li>
                                <p>See my <a className="links" href={"https://drive.google.com/file/d/1126gWTyAZ6ycD46EI_B44Gy3IBwgyNw8/view?usp=sharing"} rel="noopener noreferrer" target="_blank"> Resume</a></p>

                            </div>
                            {/* <p><a className="links" href={devData.portfolioLink} rel="noopener noreferrer" target="_blank">Portfolio</a></p> */}
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Image className="aboutImage" src='https://i.ibb.co/bW5z1PX/Vermilion-Sunset-1-crop.jpg' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='aboutCard row2' style={{ padding: 0, }}>
                        <Grid.Column width={5}>
                            <Image className='aboutImage' src='https://i.ibb.co/10QLhFw/Waterfall-crop.jpg' />
                        </Grid.Column>
                        <Grid.Column className="aboutSection2" width={11}>
                            <p className="sectionP"> I am a former environmental engineer who has re-trained myself.  There are many skills that transfer from that experience:</p>
                            <li className='cardLi'>Project Management, Planning, Budgeting, Marketing</li>
                            <li className='cardLi'>Technical Writing, Computer-Aided Design, Preparation of Plans and Specifications</li>
                            <li className='cardLi'>Coordination with Multidisciplinary Groups</li>
                            <li className='cardLi'>Liaison with Regulatory Agencies</li>
                            <li className='cardLi'>Construction Management and Certification</li>
                        </Grid.Column>
                    </Grid.Row>

                    {/* <Grid.Row>
                        <Grid.Column width={11}>
                            <p>Having worked with firms with 2 to 80,000 employees, I am used to working both on my own and with multidisciplinary groups.  Self-learning is key to my development as an engineer.</p>
                            <p>My skills include technical writing, project management and computer-aided design.</p>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Image src='https://i.ibb.co/jz9q1Gb/IMGP9237.jpg' />
                        </Grid.Column>
                    </Grid.Row> */}


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
        </Fragment >
    )
}
export default AboutUser;