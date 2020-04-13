import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './Avtar.css';
import AvtarList from './Avtarlist'
// import 'tachyons';
import 'tachyons'
import { render } from '@testing-library/react';

// const Avtar = (props) => {


class Avtar extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Welcome to avatar app'
        }
    }
    namechange(){
        this.setState({name:'This is first app for learn'})
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
            <div className="mainpage tc" >
                <h1>{this.state.name}</h1>
                {arrayCard}
                <button className="pd4" onClick={() => this.namechange()}> Subscribe</button>
            </div >
        )
    }
}
export default Avtar;