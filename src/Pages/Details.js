import React, { Component } from 'react'
import '../Styles/DetailsBelafric.scss'

export class Details extends Component {
  render() {
    return (
      
      <div className='_dba_main_container'>
        <span className='title_des'>VILLAGEKONGO</span>
        <span className='baseline_des'></span>
        <div className='_dba_main_container_child'>
          <div className='_dba_main_container_child_child'>
            <span className='_dba_main_container_child_child_content'>
              <span className='title_text'>
                Pourquoi nous choisir ?
              </span>
              <span className='content_text'>
                VillageKongo asbl est une entité sérieuse qui place en avant plan la 
                compétitivité, la méritocratie et le souci d’assainir le milieu congolais de l’emploi.<br/>
                Nous faire confiance, c’est croire en un Congo fort, uni et prospère.         
              </span>
            </span>
          </div>
          <div className='_dba_main_container_child_child'>
            <span className='_dba_main_container_child_child_content'>
              <span className='title_text'>
                Nos qualités
              </span>
              <span className='content_text'>
                Nous sommes une association caractérisée par :<br/>
                * la fraternité ;<br/>
                * la rigueur ;<br/>
                * le travail ;<br/>
                * le patriotisme. 
              </span>
            </span>
          </div>
          <div className='_dba_main_container_child_child'>
            <span className='_dba_main_container_child_child_content'>
              <span className='title_text'>
                Objectifs poursuivis
              </span>
              <span className='content_text'>
                La promotion du travail pour tous et des conditions descente des traitements des travailleurs,
                la réduction des inégalités sociales, le soutien et le développement du tourisme culturel et patrimonial en RDC,
                la promotion et l’accompagnement des activités sportives (football, natation, basket, hand ball, volley).
              </span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Details