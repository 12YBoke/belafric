import React, { Component } from 'react'
import '../Styles/HeroBannerVillageKongo.scss'

import logoVillageKongo from '../Images/VillageKongo/logoVillageKongo.png'
import VillageKongoContainer from '../Images/VillageKongo/VillageKongoContainer.jpg' 
import facebook from '../Images/IconsSN/facebook.png'
import instagram from '../Images/IconsSN/instagram.png'
import linkedin from '../Images/IconsSN/linkedin.png'
import twitter from '../Images/IconsSN/twitter.png'

import { Link } from 'react-router-dom'

export class HeroBannerVillageKongo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contact_items : [
        {
          label : 
            <span className='_hbvk_contact_items_img_container'>
              <img src={facebook} alt="facebook"/>
              <span className='_hbvk_contact_items_img_container_info'>
                <span>
                  @facebook
                </span>
              </span>
            </span>,
          key : 'Facebook'
        },
        {
          label : 
            <span className='_hbvk_contact_items_img_container'>
              <img src={instagram} alt="instagram"/>
              <span className='_hbvk_contact_items_img_container_info'>
                <span>
                  @instagram
                </span>
              </span>
            </span>,
          key : 'Instagram'
        },
        {
          label : 
            <span className='_hbvk_contact_items_img_container'>
              <img src={linkedin} alt="linkedin"/>
              <span className='_hbvk_contact_items_img_container_info'>
                <span>
                  @linkedin
                </span>
              </span>
            </span>,
          key : 'Linkedin'
        },
        {
          label : 
            <span className='_hbvk_contact_items_img_container'>
              <img src={twitter} alt="twitter"/>
              <span className='_hbvk_contact_items_img_container_info'>
                <span>
                  @twitter
                </span>
              </span>
            </span>,
          key : 'Twitter'
        },
      ]
    }
  }

  render() {
    this.contact_items = this.state.contact_items
    return (
      <>
        <div className='_hbvk_cover_container'>
          <div className='_hbvk_villageKongo_image_container'>
            <div className='_hbvk_villageKongo_image_container'>
              <img src={VillageKongoContainer} alt="VillageKongoContainer"/>
            </div>
          </div>
          <div className='_hbvk_villageKongo_presentation'>
            <span className='_hbvk_villageKongo_presentation_logo'>
              <img src={logoVillageKongo} alt="logoVillageKongo"/>
            </span>
            <span className='_hbvk_villageKongo_presentation_baseline'>
              <span>VILLAGE KONGO</span>, premier partenaire de BELAFRIC, est une organisation non gouvernementale de développement,
              créée le 19 mai 2021.
            </span>
            <div className='_hbvk_contact_items_img'>
              {
                this.contact_items.map((item) => 
                <React.Fragment key={item.key}>
                  {item.label}
                </React.Fragment>
              )
              }
            </div>
            <Link to={'/VillageKongo'} className='_hbvk_call_to_action'>
              VOIR NOS SERVICES
            </Link>
          </div>
        </div>
      </>
    )
  }
}


export default HeroBannerVillageKongo