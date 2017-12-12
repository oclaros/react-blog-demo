import React, { Component } from 'react';
import AsideContainer from './AsideContainer';
import BlogContainer from './BlogContainer';
import { Container, Row, Col } from 'reactstrap';

export default class MainContainer extends Component{
    render() {
        return (
            <Container>
                <Row>
                    <Col><BlogContainer /></Col>
                    <Col><AsideContainer /></Col>
                </Row>
            
            </Container>
        );
    }
}