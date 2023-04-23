import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom"
import '../Styles/Navigation.scss'

import Home from '../Pages/Home'
import BelAfric from '../Pages/BelAfric'
import VillageKongo from '../Pages/VillageKongo'
import APropos from '../Pages/APropos'
import Erreur from '../Pages/Erreur'

import House from '../Images/Icons/house.png'
import Info from '../Images/Icons/info.png'
import Place from '../Images/Icons/place.png'
import Synchronize from '../Images/Icons/synchronize.png'


import Menu from '../Images/Icons/menu.png'
import Cancel from '../Images/Icons/cancel.png'


import logoBelafric from '../Images/Belafric/logoBelafric.png'

export class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items : [
        {
          label : <NavLink exact="true" to="/">
                    <span className='_n_img_container'>
                      <img src={House} alt="House"/>
                    </span>
                    <span className='_n_text_container'>
                      <span>
                        Acceuil
                      </span>
                    </span>
                    </NavLink>,
          key : 'Home' 
        },
        {
          label : <NavLink exact="true" to="/Belafric">
                    <span className='_n_img_container'>
                      <img src={Synchronize} alt="Synchronize"/> 
                    </span>
                    <span className='_n_text_container'>
                      <span>
                        Belafric
                      </span>
                    </span>
                  </NavLink>,
          key : 'Belafric' 
        },
        {
          label : <NavLink exact="true" to="/VillageKongo">
                    <span className='_n_img_container'>
                      <img src={Place} alt="Place"/>
                    </span>
                    <span className='_n_text_container'>
                      <span>
                        Village Kongo
                      </span>
                    </span>
                  </NavLink>,
          key : 'VillageKongo' 
        },
        {
          label : <NavLink exact="true" to="/APropos"> 
                    <span className='_n_img_container'>
                      <img src={Info} alt="Info"/>
                    </span>
                    <span className='_n_text_container'>
                      <span>
                        A Propos
                      </span>
                    </span>
                  </NavLink>,
          key : 'APropos' 
        },
      ]
    }
  }

  _handleButton = () => {
    var button = document.querySelector(["nav"])
    button.style.right = '0'
  }

  _handleButtonClose = () => {
    var button = document.querySelector(["nav"])
    button.style.right = '-100vw'
  }

  componentDidMount() {
  }

  render() {
    this.items = this.state.items
    return (
      <Router>
        <header className="_n_header">
          <div className='_n_title_div'>
            <img src={logoBelafric} alt="logoBelafric"/>
          </div>
          <div className='_n_action_button' onClick={() => {this._handleButton()}}>
            <img src={Menu} alt="Menu"/>
          </div>
          <nav className='phone'>
            <div className='_n_action_button_cancel' onClick={() => {this._handleButtonClose()}}>
              <img src={Cancel} alt="Cancel"/>
            </div>
            <ul>
              {
                this.items.map((item) => 
                  <li key={item.key} onClick={() => {this._handleButtonClose()}}>
                    {item.label}
                  </li>
                )
              }
            </ul>
          </nav>
          <nav className='desktop'>
            <div className='_n_action_button_cancel' onClick={() => {this._handleButtonClose()}}>
              <img src={Cancel} alt="Cancel"/>
            </div>
            <ul>
              {
                this.items.map((item) => 
                  <li key={item.key}>
                    {item.label}
                  </li>
                )
              }
            </ul>
          </nav>
        </header>
        <Routes>
          <Route exact="true" path='/' element={<Home/>}/>
          <Route exact="true" path='/BelAfric' element={<BelAfric/>}/>
          <Route exact="true" path='/VillageKongo' element={<VillageKongo/>}/>
          <Route exact="true" path='/APropos' element={<APropos/>}/>
          <Route path="*" element={<Erreur/>}/>
        </Routes>
      </Router>
    )
  }
}

export default Navigation