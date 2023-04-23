import React, { Component } from 'react'
import '../Styles/AboutCEOVK.scss'
import MaxenceLando from '../Images/VillageKongo/MaxenceLando.png'

export class AboutCEOVK extends Component {
  render() {
    return (
      <div className='_abtceovk_main_container'>
        <div>
          <img src={MaxenceLando} alt="MaxenceLando"/>
          <span className='_abtceovk_nameRA'>
            Mr. Maxence LANDO
          </span>
          <span>
            Président de Village Kongo
          </span>
          <span>
            Encadreur et formateur, Mr. LANDO est titulaire d’un diplôme
            de Master en sciences commerciales
            depuis 1993, à Bruxelles.
          </span>
        </div>
        <div>
          <span>
          A son actif professionnel, il jouit d’un parcours
          riche d’expériences pour avoir occupé divers postes de
          responsabilité depuis 1995 jusqu’à ce jour.
          Il a été notamment : Assistant du conseiller
          privé du Chef de l’Etat (1996-1997),
          Délégué commercial à Auto Color Congo (2000-2004), Directeur du marketing
          opérationnel à Pygma (2004-2006). Et aujourd’hui, il est le Représentant congolais
          du Futsal (Fifa), fonction qu’il assuma avec brio depuis 2000,
          </span>
        </div>
        <div>
          <span>
            en même temps,
            Coordonnateur Général et Directeur Technique du Club et du Centre de formation
            de jeunes footballeurs Ujana depuis 2006.
          </span>
          <span>
            Fort de ses capacités managériales très poussées, et de sa longue et riche carrière
            professionnelle, Monsieur Maxence se révèle pour Village Kongo une providence et
            un bon mouillage. Tout le monde le dit et le pense, il est l’homme de la situation de
            Village Kongo.
          </span>
        </div>
        <div>
          <span>
            Fidèle à ses principes, rigoureux, charismatique
            et pointilleux, exempt de duplicité et ennemi de la cupidité, Monsieur Maxence est
            l’archétype des meneurs d’hommes.
          </span>
          <span>
          Sa vision pour Village Kongo est univoque : faire de celui-ci un hub d’émergence et
de développement, où les membres sont enrôlés dans une dynamique de travail
acharné pour leur essor personnel, et pour l’émergence de l’Association, considérée
entant qu’entité.
          </span>
        </div>
      </div>
    )
  }
}

export default AboutCEOVK