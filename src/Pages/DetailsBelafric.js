import React, { Component } from 'react'
import '../Styles/DetailsBelafric.scss'
import Logistique from '../Images/Belafric/logistique.jpg'
import Belafric from '../Images/Belafric/containerRed.jpg'
import Conteneur from '../Images/Belafric/Belafric.jpeg'
export class DetailsBelafric extends Component {
  render() {
    return (
      <div className='_dba_main_container'>
        <span className='title_des'>BELAFRIC</span>
        <span className='baseline_des'>FRET AERIEN ET MARITIME</span>
        <div className='_dba_main_container_child'>
          <div className='_dba_main_container_child_child'>
            <span className='_dba_main_container_child_child_content'>
              
              <span className='image_text'
                style={{     
                  backgroundImage: 'url(' + Conteneur + ')',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
              </span>
              <span className='title_text'>
                Qui sommes nous ?
              </span>
              <span className='content_text'>
                Nous sommes une agence spécialisée dans le transport de vos courriers et colis en toute sécurité et dans les délais depuis l'année 2001.
              </span>
            </span>
          </div>
          <div className='_dba_main_container_child_child'>
            <span className='_dba_main_container_child_child_content'>
              
              <span className='image_text'
                style={{     
                  backgroundImage: 'url(' + Belafric + ')',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
              </span>
              <span className='title_text'>
                Nos qualités
              </span>
              <span className='content_text'>
              Nos qualités se resument en deux points essentiels, qui sont : <br/>
              * Rapidité ;<br/>
              * Fiabilité. 
              </span>
            </span>
          </div>
          <div className='_dba_main_container_child_child'>
            <span className='_dba_main_container_child_child_content'>
              <span className='image_text'
                style={{     
                  backgroundImage: 'url(' + Logistique + ')',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
              </span>
              <span className='title_text'>
                Nos services
              </span>
              <span className='content_text'>
                Nous expédions vos courier et colis entre:<br/>
                * Bruxelles - Kinshasa par avion et bateau.<br/>
                * Kinshasa - Bruxelles par avion.<br/>
                * Kinshasa - vers les provinces par avion.<br/>
              </span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailsBelafric