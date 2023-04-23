import React, { Component } from 'react'
import '../Styles/HeroBanner.scss'
import SecondElement from './SecondElement'

import { Link } from "react-router-dom"

export class HeroBanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <>
        <div className='_h_cover_container'>
          <div className='_h_belafric_presentation'>
            <span className='_h_belafric_presentation_slogan'>OTINDI, EKOMI</span>
            <span className='_h_belafric_presentation_baseline'>
              <span>BELAFRIC</span> est une agence de fret maritime et aérien spécialisée dans les échanges commerciaux entre la <span>Belgique</span> et la <span>RD Congo</span>.
            </span>
            
            <Link to={'/Belafric'} className='_h_call_to_action'>
              VOIR NOS TARIFS
            </Link>
          </div>
          <div className='_h_belafric_image_container'>
            <div className='_h_belafric_image_container_child'>
              
            </div>
          </div>
        </div>
      </>
    )
  }
}


export default HeroBanner