/* eslint-disable max-len */

import React, { Fragment } from 'react'
import { Header, List, Container } from 'semantic-ui-react'
import "./devContainer.css";

const DevContainer = () => (
    <Fragment>
        <div className='devContainer'>
            <ul className="bList">
                <li>Log in to make changes</li>
                <li>Sort projects by table headings or search using keywords</li>
                <li>Projects with Show = true will display on the home page</li>
                <li>Click on a project row to change the Show status, add an image link and/or search keywords</li>
                <li>Change user settings (name, email, resume/LinkedIn links) via the User link</li>
                <li>Use Sync to re-load your GitHub repos to update changes (Show status, image links and search keywords will reset)</li>
            </ul>
            <hr />
        </div>
    </Fragment>
)

export default DevContainer