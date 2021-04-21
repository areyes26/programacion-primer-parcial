function Tarjeta (props) {
		return(
			<div className="tarjeta">
				<img src={props.personaje.picture.large} alt=""/>
				<h2> {props.personaje.name.first} {props.personaje.name.last} </h2>
				 
				<h3>{props.personaje.dob.date} ({props.personaje.dob.age} años)</h3> 
				<h3>{props.personaje.email}</h3>
				
				
			</div>
		);
	}

	export default Tarjeta;



