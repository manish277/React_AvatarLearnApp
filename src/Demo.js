import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './Demo.css'


const Demo =(props)=>{
    return <div className='maindiv_style'>
           <h1>Hello {props.name}</h1>
           <p>Welcome to react Functional</p>
           </div>
}
// class Demo extends Component {
//    render(){
//        return <div className='maindiv_style'>
//            <h1>Hello {this.props.name}</h1>
//            <p>Welcome to react</p>
//            </div>
       
//    } 
// }

export default Demo;