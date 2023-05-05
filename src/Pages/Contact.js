import React, { Component } from 'react'
import '../Styles/Contact.scss'

export class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
        <h2>ADRESSE</h2>
        <span>
          34, Avenue De la Paix,  
          <br/>Quartier Joli-parc, Commune de Ngaliema. 
          <br/>En face du camp Luano, derrière mont Fleury.  
          <br/>Arrêt : garage.
          <br/>KINSHASA/RD Congo
        </span>
      </div>
    )
  }
}

export default Contact