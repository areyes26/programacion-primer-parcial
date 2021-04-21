import React , {Component} from 'react'

export default class Tarjeta extends Component {

	constructor(props){
		super(props);
		this.state={
			
		}
	};


	render(){
		return(
			<div class="card-container"
			id={this.props.id}>
			{/* <span class="pro">PRO</span> */}

			<img src={this.props.personaje.picture.large} alt=""/>
			<h3>{this.props.personaje.name.first} {this.props.personaje.name.last}</h3>
			<h6>{this.props.personaje.dob.date} </h6> 
			<h6> ({this.props.personaje.dob.age} años)</h6> 
			<h6>{this.props.personaje.email}</h6>
			{/* <p>User interface designer and <br/> front-end developer</p> */}
			<div class="buttons">
				{/* <button 
				class="primary"
				>
					Agregar
				</button> */}
				<button 
				class="primary ghost"
				onClick={()=>{this.props.onDelete(this.props.id)}}
				>
					Eliminar
				</button>
			</div>
			
			{/* <div class="skills">
				<h6>Skills</h6>
				<ul>
					<li>UI / UX</li>
					<li>Front End Development</li>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>React</li>
					<li>Node</li>
				</ul>
			</div> */}
		</div>
		
		);
	}
	}


/*			<div
			
			>
				<a href="/components/Infotarjeta.js">
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
			</div> */


