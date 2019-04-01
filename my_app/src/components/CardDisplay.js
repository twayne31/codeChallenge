import React, { Component } from 'react';
import { Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap'
import PostData from '../data/db.json'
import PostDetail from './PostDetail'

class cardDisplay extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
            <Card>
            <CardBody>   
                <CardTitle></CardTitle>
                <CardSubtitle></CardSubtitle>
            </CardBody>
            <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <CardLink href="#"></CardLink>
            </CardBody>
            </Card>
          </div>
        )
    }
}

export default cardDisplay;