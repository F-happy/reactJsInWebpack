/**
 * Created by fuhuixiang on 2/17/16.
 */
'use strict';

import React, {Component} from 'react';


class Hello extends Component {


    render(){
        return (
            <div>Hello, {this.props.name}!</div>
        );
    }
}
export default Hello;