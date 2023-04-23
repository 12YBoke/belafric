import React, { Component } from 'react'
import '../Styles/secondElementVillageKongo.scss'
import drc from '../Images/VillageKongo/rdc.png'

export class SecondElementVillageKongo extends Component {
  render() {
    return (
			<div className='qVK_main_container'>
				<div>
					<span className='_qVK_belafric_title'>
						VILLAGE KONGO
					</span>
					<span className='_qVK_belafric_span'>
            L’événement village Kongo a deux
            versants : D’abord, il se veut un
            excellent cadre de développement
            des opportunités d’affaires en RDC
            et de financements des projets
            rentables, et ensuite, un cadre
            de revalorisation-rayonnement
            du paysage culturel congolais,
            dans la beauté de sa diversité.
          </span>
				</div>
				<div className='div_img'>
					<img src={drc} alt="drc"/>
				</div>
			</div>
    )
  }
}

export default SecondElementVillageKongo