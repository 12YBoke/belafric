import React, { Component } from 'react'
import Details from './Details'
import Services from './Services'
import SecondElementVillageKongo from './SecondElementVillageKongo'

export class VillageKongo extends Component {
  render() {
    return (
      <>
        <SecondElementVillageKongo/>
        <Details/>
        <Services/>
      </>
    )
  }
}

export default VillageKongo