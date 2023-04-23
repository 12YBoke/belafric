import React, { Component } from 'react'
import '../Styles/Promo.scss'

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
  render() {
    this.Promotion = this.state.Promotion
    this.PromotionWR = this.state.PromotionWR
    this.FretAerien = this.state.FretAerien
    return (
      <div className='_prom_main_container'>
        <div className='_prom_main'>
          <span className='_prom_intro'>
            FRET AERIEN
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
            FRET MARITIME PROMO<br/>
            2023 BOMBISA PLACE
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
            FRET MARITIME PROMO<br/>
            1 CARTON SANS RESERVATION
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
      </div>
    )
  }
}

export default Promo