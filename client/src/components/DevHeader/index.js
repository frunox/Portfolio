import React from 'react'
import { Header } from 'semantic-ui-react'
import "./devHeader.css";

const DevHeader = () => (
    <div className="top">
        <Header as='h2'
            className="devHeader"
            textAlign='center'
            dividing>
            Welcome to your Dynamic Portfolio
        </Header>
        <Header as="h3" className="cText" textAlign='center'>
            Change which projects appear on your portfolio
        </Header>
    </div>
)

export default DevHeader;