import React, { Component } from 'react'
import '../Styles/AboutCEO.scss'
import RegineAssani from '../Images/Belafric/ra.png'

export class AboutCEO extends Component {
  render() {
    return (
      <div className='_abtceo_main_container'>
        <div className='part_one'>
          <img src={RegineAssani} alt="RegineAssani"/>
          <span className='_abtceo_nameRA'>
            Mme. Régine Assani
          </span>
          <span>
            CEO de Belafric<br/>
            1ere Vice Présidente de Village Kongo
          </span>
          <span className='pionniere'>
            PIONNIÈRE DANS LE SERVICE DE FRET ENTRE LA BELGIQUE ET LA RDC
          </span>
        </div>
        <div  className='part_two'>
          <span>
            Régine ASSANI, est une femme d’affaires talentueuse, pointilleuse et dynamique.
            Après un cursus académique en commerce extérieur et gestion
            d’entreprise, elle se lance dans l’auto-entreprenariat en 2001. 
          </span>
          <span>
            Mettant un point d’honneur à
            l’accueil et au conseil des clients,
            elle a travaillé durement
            pour élever BELAFRIC au rang des
            institutions crédibles dans le paysage 
            entrepreneurial belgo-congolais, et
            a réussi à fidéliser une clientèle de
            plus de 40 000 personnes.
          </span>
          <span>
          Son secret réside, entre autres, dans sa politique
            de proximité avec sa clientèle,
            toujours accessible pour écouter,
            comprendre leurs besoins, et répondre
            promptement et efficacement ; 
          </span>
          <span>dans
            la fixation de la grille tarifaire de ses
            services, dans un rapport prix-qualité
            hors toute concurrence et enfin, dans
            la fourniture d’un service impeccable
            et toujours apprécié, alors qu’elle ne
            se départit jamais de son air radieux,
            qu’importe la circonstance.
          </span>
          <span>
            Riche de ses expériences et de la
            longévité de son activité, Régine Assani
            offre, en outre, un service de conseil à
            toute personne qui désire investir en RD
            Congo, et y voir ses affaires florissantes.
            C’est d’ailleurs la raison pour laquelle,
            elle a décidé d’étendre les services de
            BELAFRIC à un appui aux membres de
            la diaspora qui souhaite lancer un projet
            en RD Congo.
          </span>
        </div>
      </div>
    )
  }
}

export default AboutCEO