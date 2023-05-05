import React, { Component } from 'react'
import '../Styles/HeroBanner.scss'

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
              BELAFRIC est une agence de fret maritime et aérien<br/>spécialisée dans les échanges commerciaux entre<br/>la Belgique et la RD Congo.
            </span>
          </div>
        </div>
      </>
    )
  }
}


export default HeroBanner