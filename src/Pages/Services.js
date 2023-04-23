import React, { Component } from 'react'
import Formations from '../Images/VillageKongo/Formations.svg'
import Culture from '../Images/VillageKongo/Culture.svg'
import Place from '../Images/VillageKongo/Place.svg'
import Tourisme from '../Images/VillageKongo/Tourisme.svg'
import Professional from '../Images/VillageKongo/Professional.svg'
import Juridique from '../Images/VillageKongo/Juridique.svg'

import '../Styles/Services.scss'


export class Services extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Services : [
        {
          name : <span className='title'>Séries de formations</span>,
          content : <span>D’abord, Village Kongo, forme régulièrement les jeunes congolais en éthique et orientations professionnelles, techniques de recherche active d’emploi et rédaction des documents de travail. Ce programme de formation, réunit au cours de chaque session, une centaine de participants qui sont formés et suivis par une équipe de coachs expérimentés et compétents. Aussi, Village Kongo organise une série de formations en langues nationales, dont notamment ; KIKONGO, TSHILUBA, SWAHILI et LINGALA. L’identité culturelle recherchée, passe inéluctablement par la maîtrise des langues nationales. Bien plus, gardant son contact avec le monde extérieur, Village Kongo organise aussi des formations en langues étrangères, précisément en anglais, espagnol, néerlandais et français. Enfin, Village Kongo organise des séries de formations en artisanat et métiers, permettant à la jeunesse congolaise de s’adonner à l’entrepreneuriat et auto-emploi ; vecteur du développement et voie de sortie du chômage.</span>,
          image : <img src={Formations} alt="Formations"/>,
          key: 'Formations'
        },
        {
          name : <span className='title'>Ateliers professionnels</span>,
          content : <span>Fort de son partenariat naturel avec BELAFRIC, Village Kongo organise des importants moments d’échanges et de développement des relations d’affaires et/ou des opportunités de travail, entre les citoyens congolais et la diaspora.</span>,
          image : <img src={Professional} alt="Professional"/>,
          key: 'Professional'         
        },
        {
          name : <span className='title'>Activités culturelles</span>,
          content : <span>Engagé à faire connaître et rayonner l’identité culturelle de la République Démocratique du Congo, Village Kongo organise des activités culturelles tendant à revaloriser les traditions et les mythes fondateurs du Congo, à travers la découverte de ses ethnies.</span>,
          image : <img src={Culture} alt="Culture"/>,
          key: 'Culture'
        },
        {
          name : <span className='title'>Accompagnement touristique</span>,
          content : <span>Tourné vers le monde, Village Kongo offre à ses partenaires un service complet d’accompagnement des visites touristiques en RDC. (Obtention Passeports et Visa, démarches administratives et tourisme).</span>,
          image : <img src={Tourisme} alt="Tourisme"/>,
          key: 'Tourisme'
        },
        {
          name : <span className='title'>Services d'aide Juridique</span>,
          content : <span>Village Kongo organise un service de conseils juridiques, d’assistance et de représentation judiciaire. (Création d’entreprise et Absl, rédaction des statuts, établissements des actes de l’état civil, jugements supplétifs etc...).</span>,
          image : <img src={Juridique} alt="Juridique"/>,
          key: 'Juridique'
        },
        {
          name : <span className='title'>Location d'espace</span>,
          content : <span>Village Kongo œuvre aussi dans l’événementiel, il met à votre disposition public son espace polyvalent pour diverses activités.</span>,
          image : <img src={Place} alt="Place"/>,
          key: 'Place'
        },
      ]
    }
  }

  render() {
    this.Services = this.state.Services
    return (
      <div className='_serv_main_container'>
        <h3>En conformité de ses statuts constitutifs, Village Kongo organise des activités à caractère socio-culturel et professionnel variées, en l’occurrence :</h3>
        <div className='_serv_element'>
          {
            this.Services.map((item) =>
              <div key={item.key}>
                <div className='element'>
                  {item.image}
                </div>
                <div className='text'>
                  <div>
                    {item.name}
                    {item.content}
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Services