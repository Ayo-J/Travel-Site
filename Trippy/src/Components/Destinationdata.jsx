
import "./Destination-style.css"

import React, { Component } from 'react'


export default class Destinationdata extends Component {
  render() {
    return (
      <div>
        <div className={this.props.className}>
      <div className='des-text'>
        <h2>{this.props.heading}</h2>
        <p>{this.props.text}</p>

      </div>


      <div className='image'>
        <img alt='img' src={this.props.image1}></img>
        <img alt='img' id='kandy2' src={this.props.image2}></img>
      </div>
     </div>


      </div>
    )
  }
}
