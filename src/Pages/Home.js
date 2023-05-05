import React, { Component } from 'react'
import '../Styles/Home.scss'

import HeroBanner from './HeroBanner'
import SecondElement from './SecondElement'
import DetailsBelafric from './DetailsBelafric'
import AboutCEO from './AboutCEO'
import Conteneur from '../Images/Belafric/conteneur.jpg'
import { Link } from 'react-router-dom'
import Contact from './Contact'
export class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <HeroBanner/>
        <DetailsBelafric/>
        <SecondElement/>
        <div className='Parallax'
          style={{
            background: 'url(' + Conteneur + ')',
            minHeight: '400px',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <span className='text'>OTINDI, EKOMI</span>
          <Link to='/Promo' className='button'>Voir nos tarifs </Link>
        </div>
        <AboutCEO/>
        <div className='Parallax'
          style={{
            background: 'url(' + Conteneur + ')',
            minHeight: '400px',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <span className='text'>OTINDI, EKOMI</span>
          <Link to='/Promo' className='button'>Voir nos tarifs </Link>
        </div>
        <Contact/>
      </>
    )
  }
}

export default Home