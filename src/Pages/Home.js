import React, { Component } from 'react'
import '../Styles/Home.scss'

import HeroBanner from './HeroBanner'
import HeroBannerVillageKongo from './HeroBannerVillageKongo'
import SecondElementVillageKongo from './SecondElementVillageKongo'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quality : [
        
      ]
    }
  }
  render() {
    return (
      <>
        <HeroBanner/>
        <HeroBannerVillageKongo/>
        <SecondElementVillageKongo/>
      </>
    )
  }
}

export default Home