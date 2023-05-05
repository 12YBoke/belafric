import React, { Component } from 'react'
import '../Styles/HeroBannerVillageKongo.scss'

import logoVillageKongo from '../Images/VillageKongo/logoVillageKongo.png'
import VillageKongoContainer from '../Images/VillageKongo/VillageKongoContainer.jpg'

export class HeroBannerVillageKongo extends Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

  render() {
    return (
      <>
        <div className='_hbvk_cover_container'>
          <div className='_hbvk_villageKongo_presentation'>
            <span className='_hbvk_villageKongo_presentation_logo'>
              <img src={logoVillageKongo} alt="logoVillageKongo"/>
            </span>
            <span className='_hbvk_villageKongo_presentation_baseline'>
              Partenaire de BELAFRIC, VILLAGE KONGO est une organisation non gouvernementale de développement,
              créée le 19 mai 2021. <br/>
            </span>
            <span className='_hbvk_villageKongo_presentation_baseline'>
                <br/>Notre motivation a pour leitmotiv la grande difficulté qu’éprouve la population congolaise à
                créer et trouver de l’emploi. La vision que nous nourrissons, est celle de doter au marché de
                l’emploi d’un personnel qualifié à travers une insistance accrue sur l’éthique professionnelle.
            </span>
          </div>
          <div className='_hbvk_villageKongo_image_container'>
            <div className='_hbvk_villageKongo_image_container'>
              <img src={VillageKongoContainer} alt="VillageKongoContainer"/>
            </div>
          </div>
        </div>
      </>
    )
  }
}


export default HeroBannerVillageKongo