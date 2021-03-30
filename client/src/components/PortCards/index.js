import React, { useContext } from "react";
import ProjectCard from "../Card";
import DevDataContext from '../../contexts/DevDataContext';
import { Grid } from 'semantic-ui-react';
import './portCards.css'

function PortCards() {
  const devCtx = useContext(DevDataContext);
  console.log('PORTCARDS dev', devCtx)
  return (
    <div className='portCards'>
      <div className='ui equal width stackable grid'>
        <Grid.Row className="rows">
          {devCtx.state.repositories
            .filter(repo => repo.activeFlag === 'true')
            .map((repo, index) => (

              <Grid.Column key={index} className="columns">
                <ProjectCard repo={repo} />
              </Grid.Column>

            ))}
        </Grid.Row>
      </div>
    </div>
  );
}

export default PortCards;
