import React, { Component } from 'react';
import About from './About';
import AsideLinks from './AsideLinks';

export default class AsideContainer extends Component{
    render(){
        return (
            <div>
                <About />
                <AsideLinks />
            </div>
        );
        
    }
}