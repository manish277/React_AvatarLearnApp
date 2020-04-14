import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './Avtar.css';
import AvtarList from './Avtarlist'
// import 'tachyons';
import 'tachyons'
import { render } from '@testing-library/react';
// import Menu from './Menu'
// import About from './About'
// import Contact from './Contact'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// const Avtar = (props) => {


class Avtar extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Welcome to avatar app'
        }
    }
    namechange() {
        this.setState({ name: 'This is first app for learn' })
    }
    render() {
        const AvtarListArray = [
            {
                id: 1,
                name: 'Manish',
                work: 'Web Developer'
            },
            {
                id: 2,
                name: 'joan',
                work: 'Django '
            },
            {
                id: 3,
                name: 'Swarit',
                work: 'Data Analyst'
            },
            {
                id: 4,
                name: 'Priya',
                work: 'Database admin'
            }
        ]

        const arrayCard = AvtarListArray.map((avatarcard, i) => {
            return <AvtarList key={i} id={AvtarListArray[i].name}
                name={AvtarListArray[i].name}
                work={AvtarListArray[i].work}
            />
        })
        return (
            // <BrowserRouter>
                <div className="mainpage tc" >
                    <h1>{this.state.name}</h1>
                    {/* <Menu />
                    <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/" exact component={About} />
                    <Route path="/contact" component={Contact} />
                    </Switch> */}
                    {arrayCard}
                    <button className="pd4" onClick={() => this.namechange()}> Subscribe</button>
                </div >
            // </BrowserRouter>
        )
    }
}
export default Avtar;