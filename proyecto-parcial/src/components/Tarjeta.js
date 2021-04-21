import React , {Component} from 'react'

class Tarjeta extends Component {

	constructor(props){
		super(props);
		this.state={
			
		}
	};


	render(){
		return(
			<div
			className="tarjeta"
			id={this.props.id}
			>
				<a href="http://google.com">
				<img src={this.props.personaje.picture.large} alt=""/>
				<h2> {this.props.personaje.name.first} {this.props.personaje.name.last} </h2>
				 
				<h3>{this.props.personaje.dob.date} ({this.props.personaje.dob.age} años)</h3> 
				<h3>{this.props.personaje.email}</h3>
				<button>Agregar</button>
				<br/>
				<button
				onClick={()=>{this.props.onDelete(this.props.id)}}
				>Eliminar
				</button>
				</a>
			</div>
		);
	}
	}

	export default Tarjeta;



