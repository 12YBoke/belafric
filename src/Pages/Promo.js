import React, { Component } from 'react'
import '../Styles/Promo.scss'
import Conteneur from '../Images/Belafric/conteneur.jpg'
import Contact from './Contact'

export class Promo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      FretAerien : [
        {
          name : <span>FRET AERIEN AVEC RESERVATION</span>,
          price: <span>9.9€/Kg <span>(effets personnels en bagage accompagné)</span></span>,
          delay: <span>Dépôt Lundi - Retrait Vendredi<br/>Dépôt Mercredi - Retrait Lundi</span>,
          key: 'FA1'
        },
        {
          name : <span>FRET AERIEN SANS RESERVATION</span>,
          price: <span>13€/Kg <span>(effets personnels en bagage accompagné)</span></span>,
          delay: <span>1 semaine à 10 jours (sauf imprévus)</span>,
          key: 'FA2' 
        },
        {
          name : <span>FRET AERIEN EXPRESS</span>,
          price: <span>15€/Kg <span>(effets personnels en bagage accompagné)</span></span>,
          delay: <span>Plus ou moins 3 jours (sauf imprévus)</span>,
          key: 'FA3'
        },
        {
          name : <span>FRET AERIEN CARGO</span>,
          price: <span>A partir de 13€/Kg <span>(Colis lourd et volumineux avec valeur marchandise)</span></span>,
          delay: <span>Dépôt chaque Lundi - Retrait plus ou moins 1 semaine à 10 jours</span>,
          key: 'FA4'
        },
      ],
      Promotion : [
        {
          name : <span>CUBAGE</span>,
          price : <span>599€</span>,
          reservation : <span>100€</span>,
          key: 'PR1'
        },
        {
          name : <span>GRAND CARTON</span>,
          dimension : <span>(66 x 56 x 41)</span>,
          price : <span>299€</span>,
          description : <span> 3 grands cartons + 1 (Gratuit)</span>,
          reservation : <span>50€</span>,
          key: 'PR2'
        },
        {
          name : <span>CARTON MOYEN OU GLACIERE</span>,
          dimension : <span>(60 x 40 x 40)</span>,
          price : <span>199€</span>,
          description : <span> 3 cartons moyens ou glacières + 1 (Gratuit)</span>,
          reservation : <span>50€</span>,
          key: 'PR3'
        },
        {
          name : <span>CARTON BANANE</span>,
          dimension : <span>(28 x 48 x 40)</span>,
          price : <span>115€</span>,
          description : <span> 3 cartons banane + 1 (Gratuit)</span>,
          reservation : <span>50€</span>,
          key: 'PR4'
        },
      ],
      PromotionWR : [
        {
          dimension : <span></span>,
          price : <span>650€</span>,
          description : <span>1 mètre cube</span>,
          key: 'PWR1'
        },
        {
          dimension : <span>(66 x 56 x 41)</span>,
          price : <span>89€</span>,
          description : <span> 1 grands cartons</span>,
          key: 'PWR2'
        },
        {
          dimension : <span>(60 x 40 x 40)</span>,
          price : <span>59€</span>,
          description : <span> 1 cartons moyens ou glacières</span>,
          key: 'PWR#'
        },
      ]
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    this.Promotion = this.state.Promotion
    this.PromotionWR = this.state.PromotionWR
    this.FretAerien = this.state.FretAerien
    return (
      <div className='_prom_main_container'>
        <div className='_prom_main'>
          <span className='_prom_intro'>
          <div className='Parallax'
            style={{
              background: 'url(' + Conteneur + ')',
              minHeight: '400px',
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span className='text'>
              FRET AERIEN
            </span>
          </div>
          
          </span>
          <div>
            <table>
            <thead>
              <tr>
                <th>Mode</th>
                <th>Prix par Kilo</th>
                <th>Delai</th>
              </tr>
            </thead>
              {
                this.FretAerien.map((item) =>
                  <React.Fragment key={item.key}>
                  <tbody>
                    <tr>
                      <td>
                      {item.name}
                      </td>
                      <td>
                        {item.price}
                      </td>
                      <td>
                        {item.delay}
                      </td>
                    </tr>
                  </tbody>
                  </React.Fragment>
                )
              }
            </table>
          </div>
        </div>
        <div className='_prom_main'>
          <span className='_prom_intro'>
          <div className='Parallax'
            style={{
              background: 'url(' + Conteneur + ')',
              minHeight: '400px',
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span className='text'>
              FRET MARITIME PROMO<br/>
              2023 BOMBISA PLACE
            </span>
          </div>
          </span>
          <div>
            <table>
              <thead>
              <tr>
                <th>Promotion</th>
                <th>Dimension</th>
                <th>Prix</th>
                <th>Description</th>
                <th>Réservation</th>
              </tr>
              </thead>
              {
                this.Promotion.map((item) =>
                  <React.Fragment key={item.key}>
                    <tbody>
                    <tr>
                      <td>
                      {item.name}
                      </td>
                      <td>
                        {item.dimension}
                      </td>
                      <td>
                        {item.price}
                      </td>
                      <td>
                        {item.description}
                      </td>
                      <td>
                        {item.reservation}
                      </td>
                    </tr>
                    </tbody>
                  </React.Fragment>
                )
              }
            </table>
          </div>
        </div>
        <div className='_prom_main'>
          <span className='_prom_intro'>
            <div className='Parallax'
              style={{
                background: 'url(' + Conteneur + ')',
                minHeight: '400px',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span className='text'>
                FRET MARITIME PROMO<br/>
                1 CARTON SANS RESERVATION
              </span>
            </div>
          </span>
          <div>
            <table>
              <thead>
              <tr>
                <th>Description</th>
                <th>Dimension</th>
                <th>Prix</th>
              </tr>
              </thead>
              {
                this.PromotionWR.map((item) =>
                  <React.Fragment key={item.key}>
                    <tbody>
                    <tr>
                      <td>
                      {item.description}
                      </td>
                      <td>
                        {item.dimension}
                      </td>
                      <td>
                        {item.price}
                      </td>
                    </tr>
                    </tbody>
                  </React.Fragment>
                )
              }
            </table>
          </div>
        </div>
        <div className='q_main_container'>
				<div className='q_child'>
					<div className='q_child_two'>
						<span className='_q_belafric_span'>
            <h2>CONDITION GENERALE</h2>
            Lorsque vous faites appel aux prestations de BELAFRIC, vous acceptez, en qualité d'Expéditeur, pour votre compte et pour le compte du destinataire de l’Envoi (le « Destinataire ») et de toute autre personne ayant un intérêt dans l’Envoi, que les présentes Conditions Générales s’appliquent.
            Le terme “Envoi” désigne tout document ou colis transporté sous une lettre de transport, et qui pourra être transporté par tout moyen choisi par BELAFRIC, y compris par avion, par route ou par tout autre mode de transport. Chaque Envoi sera transporté sur la base d’une responsabilité limitée conformément aux dispositions des présentes. Si l’Expéditeur souhaite une protection accrue, une assurance pourra être mise en place moyennant un coût supplémentaire. 


            Concernant les colis fragiles, Belafric décline toutes responsabilités en cas de casse. Nous vous conseillons de vous adresser à un emballeur agrée. 
            Belafric n’étant pas une entreprise de garde meubles, tout colis non en ordre de paiement paiera 5 euro par semaine de frais de magasinage et dépassé le délai d’un mois, Belafric se débarrasse de toutes responsabilités d’entreposages de ce dernier. Un colis est considéré perdu au bout de 6 mois à partir de la date de dépôt.
            Sans aucune souscription d’assurance préalable de vos colis, Belafric considère que les effets personnels usagés que vous nous aviez confié n’ont aucune valeur commerciale donc valeur zéro. En outre vous pouvez assurer la valeur de votre marchandise an raison de 10% de la valeur d’achat. Sinon sans souscription d’assurance par bateau et par avion, en cas de sinistre (veut dire : dégâts des eaux, incendies, naufrages, pertes…) Belafric ne vous rembourse que les frais d’expédition plus de 3% du même montant qui est considéré comme étant la valeur globale de la marchandise.

            </span>
					</div>
          <div className='q_child_one' style={{marginLeft: '2%'}}>
						<span className='_q_belafric_span'>
            <h2>RECLAMATION</h2>
            Toutes les réclamations devront être formulées par écrit et soumises à BELAFRIC dans les trente (30) jours de la date de l’acceptation par BELAFRIC de l’Envoi, faute de quoi la responsabilité de BELAGFRIC ne sera nullement engagée. Les réclamations sont limitées à une réclamation par Envoi, et le règlement de ladite réclamation constituera le règlement définitif de toute perte ou de tout préjudice en relation avec ladite réclamation.
            </span>
						<span className='_q_belafric_span'>
            <h2>ASSURANCE EXPEDITION</h2>
            BELAFRIC pourra mettre en place une assurance pour toute perte ou tout dommage affectant l’Envoi, et couvrant la pleine valeur des biens, à condition que l’Expéditeur en instruise .L’assurance ne couvre pas les pertes ou les préjudices indirects ni les pertes ou les préjudices causés par des retards.
            </span>
					</div>
				</div>
			</div>
        <Contact/>
      </div>
    )
  }
}

export default Promo