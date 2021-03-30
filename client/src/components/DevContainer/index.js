/* eslint-disable max-len */

import React, { Fragment } from 'react'
import { Header, List, Container } from 'semantic-ui-react'
import "./devContainer.css";

const DevContainer = () => (
    <Fragment>
        <div className='devContainer'>
            <Header as="h3" className="cText" textAlign='center'>
                Change which projects appear on your portfolio
        </Header>
            <ul className="bList">
                <li>Review your projects in the table below</li>
                <li>Projects with Display = true will display on the home page</li>
                <li>Click on a project row to change the Display status or add an image link and search keywords</li>
            </ul>
            <hr />
        </div>
    </Fragment>
)

export default DevContainer