import { Component } from 'react';
import Tarjeta from './components/Tarjeta'
import Header from './components/Header'
import Footer from './components/Footer'



export default class App extends Component {

  constructor(props){
		super(props);
		this.state={
      item : [],
      widthoriginal: this.props.widthorigina ,
			width: "52%",
			widthsolo: []
     
		}
	};

  Cambiarwidth = (widthnuevo) => {
    if(this.state.widthsolo === this.state.widthoriginal)
		this.setState({
			widthsolo: widthnuevo
		})
		else{
			this.setState({
				widthsolo: this.state.widthoriginal
			})
		}
			}
		

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=20")
    .then(result => result.json())
    .then(data => {
      this.setState({
        item : data.results
      })
      console.log(data.results);})
  }

  agregarTarjeta(){
    fetch("https://randomuser.me/api/?results=")
    .then(result => result.json())
    .then(data => {
      this.state.item.push(data.results[0])
      this.setState({
        item : this.state.item
      })
    })
  }


	borrarTarjeta (idTarjeta){
		let resultados = this.state.item.filter((item)=>{
		  return item.login.uuid !== idTarjeta
		})
		this.setState({item:resultados})
		// console.log("Borramos la tarjeta con el ID " + idTarjeta);
		
	  }

    

  render (){
    return (



      <div className="todo">
  
        <Header/>
  
      <button onClick = { this.agregarTarjeta.bind(this)}>
        AGREGAR TARJETA
      </button>

      <button onClick = {() => this.Cambiarwidth("30%") } style= {{ 
        width: this.state.widthsolo }}>
        CAMBIAR DISPOSICION
      </button>
      
        <div className="caja"  >
        {this.state.item.map((unPersonaje)=>{
              return (<Tarjeta  id={this.props.id} onDelete={this.borrarTarjeta.bind(this)} personaje = {unPersonaje} id={unPersonaje.login.uuid} key={unPersonaje.login.uuid} widthorigina={"28%"}/>)
              }
            )}
        </div> 
  
        <footer>
          <h1>Created by: ArielReyes, Franco Mendelsohn & Nicolas Cappone </h1>
        </footer>

  
  
      </div>     
  
    );
  }

}



