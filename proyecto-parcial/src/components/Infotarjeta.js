import React , {Component} from 'react'

class Infotarjeta extends Component {

	constructor(props){
		super(props);
		this.state={
			
		}
	};


	render(){
		return(
			<div
			className="infotarjeta"
			id={this.props.id}
			>
				<a href="http://google.com">
				<img src={this.props.personaje.picture.large} alt=""/>
				<h2> {this.props.personaje.location.street.name} {this.props.personaje.location.street.number} </h2>
				 
				<h2>{this.props.personaje.location.city} - {this.props.personaje.location.state}</h2> 
				<h2>{this.props.personaje.location.country}</h2>
                <h2>{this.props.personaje.location.postcode}</h2>
                <h2>{this.props.personaje.registered.date}</h2>
                <h2>{this.props.personaje.phone}</h2>
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

	export default Infotarjeta;
