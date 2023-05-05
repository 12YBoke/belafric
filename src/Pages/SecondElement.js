import React, { Component } from 'react'
import '../Styles/secondElement.scss'
import CountUp from 'react-countup'

export class SecondElement extends Component {

  render() {
    return (
			<div className='q_main_container'>
				<div className='q_child'>
					<div className='q_child_one'>
						Créée depuis les années 
						<CountUp
							end={2000}
							duration={3}
							separator=''
							delay={2}
							enableScrollSpy={true}
							className='count'
						/>
					</div>
					<div className='q_child_two'>
						<span className='_q_belafric_span'>
							Notre objectif est de devenir le préstataire numéro 1 des services pour les événements mondiaux aux quatre coins du globe en intégrant les quatre tendances les plus importantes qui ont eu un réel impact sur la logistique ces dernières années et qui vont également façonner l'industrie à l'avenir : La Mondialisation, la Digitalisation, le E-commerce et le Développement durable.<br/><br/>
							Grâce à l'expérience acquise depuis notre création jusqu'à ce jour, nous, Belafric, entretenons avec nos partenaires et collaborateurs, des relations humaines plus riches les unes que les autres afin de mettre a votre disposition des services repondant a des normes de qualité inégalée.
						</span>
					</div>
				</div>
			</div>
    )
  }
}

export default SecondElement