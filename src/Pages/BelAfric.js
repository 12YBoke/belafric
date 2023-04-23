import React, { Component } from 'react'
import Promo from './Promo'
import SecondElement from './SecondElement'
import DetailsBelafric from './DetailsBelafric'
import '../Styles/Belafric.scss'

export class BelAfric extends Component {
  render() {
    return (
      <>
        <SecondElement/>
        <DetailsBelafric/>
        <Promo/>
      </>
    )
  }
}

export default BelAfric