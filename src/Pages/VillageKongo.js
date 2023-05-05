import React, { Component } from 'react'
import Services from './Services'
import HeroBannerVillageKongo from './HeroBannerVillageKongo'
import AboutCEOVK from './AboutCEOVK'
import VillageKongoContainer from '../Images/VillageKongo/Placei.jpeg'
import Details from './Details'
import Contact from './Contact'

export class VillageKongo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <HeroBannerVillageKongo/>
        <Details/>
        <Services/>
        <div className='Parallax'
          style={{
            background: 'url(' + VillageKongoContainer + ')',
            minHeight: '400px',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
        <AboutCEOVK/><div className='Parallax'
          style={{
            background: 'url(' + VillageKongoContainer + ')',
            minHeight: '400px',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
        <Contact/>
      </>
    )
  }
}

export default VillageKongo