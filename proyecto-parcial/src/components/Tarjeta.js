import React , {Component} from 'react'
import VerMas from './VerMas'

class Tarjeta extends Component {

	constructor(props){
		super(props);
		this.state={
			
		}
	};
		


	

	componentDidMount(){
		console.log(">>> se creo la tarjeta de " + this.props.personaje.name.first + " " + this.props.personaje.name.last );
	}

	componentDidUpdate(){
		console.log("=== se actualizo tarjeta de " + this.props.personaje.name.first + " " + this.props.personaje.name.last );
	}

	componentWillUnmount(){
		console.log("<<< se borro la tarjeta de " + this.props.personaje.name.first + " " + this.props.personaje.name.last );
	}


	render(){
		return(
			<div class="card-container">
			<span class="pro"
			onClick={()=>{this.props.onDelete(this.props.id)}}
			>X</span>

			<img src={this.props.personaje.picture.large} alt=""/>
			<h3>{this.props.personaje.name.first} {this.props.personaje.name.last}</h3>
			<h6>{this.props.personaje.dob.date} </h6> 
			<h6> ({this.props.personaje.dob.age} años)</h6> 
			<h6>{this.props.personaje.email}</h6>
			<div class="buttons">
			<VerMas/>
				{/* <button 
				class="primary ghost"
				onClick={()=>{this.props.onDelete(this.props.id)}}
				>
					Eliminar
				</button> */}
			</div>
			
		</div>
		
		);
	}
	}

	export default Tarjeta;



