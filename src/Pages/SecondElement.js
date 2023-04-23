import React, { Component } from 'react'
import '../Styles/secondElement.scss'

export class SecondElement extends Component {

	_count = () => {
		let counts = setInterval(updated)
		let start_one = 0
		let start_two = 0
		let start_three = 0

		function updated () {
			let element = document.querySelectorAll(["._q_belafric_span_count"])
		
			element[0].innerHTML = '+'+ ++start_one
			element[1].innerHTML = '+'+ ++start_two
			element[2].innerHTML = '+'+ ++start_three
		
			if(start_one === 20) {
				clearInterval(counts)
			}
		}
	}

	componentDidMount() {
		this._count()
	}


  render() {
    return (
			<div className='q_main_container'>
				<div>
					<span className='_q_belafric_span'>
						<span className='_q_belafric_span_count'>
							0
						</span>
						<span className='_q_belafric_span_stat'>
							+20 ans d'expérience pour satisfaire nos clients
						</span>
					</span>
					<span className='_q_belafric_span'>
						<span className='_q_belafric_span_count'>
							0
						</span>
						<span  className='_q_belafric_span_stat'>
							+20 ans de collaborations et de partenariats							
						</span>
					</span>
					<span className='_q_belafric_span'>
						<span className='_q_belafric_span_count'>
							0
						</span>
						<span  className='_q_belafric_span_stat'>
							+20 ans de relations humaines plus riches les unes que les autres.							
						</span>
					</span>
				</div>
			</div>
    )
  }
}

export default SecondElement