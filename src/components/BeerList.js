import React, { Component } from 'react'
import axios from 'axios'   
import {
    Link
  } from "react-router-dom";

export default class BeerList extends Component {
    state = {
        beers: []
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then(res => {
            console.log(res.data)
            this.setState({beers: res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="list-of-beers">
            {this.state.beers.map((beer, index) => {
                return (<div className='single-beer' key={index}>
                <Link to={`/beer/${beer._id}`}>
                <img src={beer.image_url} height="100" alt="Beer" /><br />
                {beer.name}
                </Link>
                </div>)
            }
            )}    
            </div>
        )
    }
}
