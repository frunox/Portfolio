import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import './cardStyle.css'

const ProjectCard = props => {
  return (
    <Card.Group className="repoCard">
      <Card className="card">
        <Image src={props.repo.imageLink}
          as='a'
          wrapped
          ui={false}
          href={props.repo.deploymentLink}
          target='_blank' />
        <Card.Content>
          <Card.Header>{props.repo.repoName}</Card.Header>
          <Card.Description className='cardDescription'>{props.repo.repoDesc}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button color='blue' target={"_blank"} href={props.repo.html_url}>
              Code
            </Button>
            {props.repo.deploymentLink ? <Button color='green' target={"_blank"} href={props.repo.deploymentLink}>
              Website
          </Button> : <Button color='red' target={"_blank"} href={props.repo.deploymentLink}>
              Link
          </Button>}
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default ProjectCard;