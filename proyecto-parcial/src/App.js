import { Component } from 'react';
import Tarjeta from './components/Tarjeta'
import Header from './components/Header'
import Footer from './components/Footer'



export default class App extends Component {

  constructor(){
		super();
		this.state={
      item : []
		}
	};


  componentDidMount(){
    fetch("https://randomuser.me/api/?results=20")
    .then(result => result.json())
    .then(data => {
      this.setState({
        item : data.results
      })
      console.log(data.results);})
  }

	borrarTarjeta (idTarjeta){
		let resultados = this.state.item.filter((item)=>{
		  return item.login.uuid !== idTarjeta
		})
		this.setState({item:resultados})
		console.log("Borramos la tarjeta con el ID " + idTarjeta);
		
	  }

  render (){
    return (



      <div className="todo">
  
        <Header/>
  
  
        <div className="caja">
        {this.state.item.map((unPersonaje)=>{
              return (<Tarjeta  onDelete={this.borrarTarjeta.bind(this)} personaje = {unPersonaje} id={unPersonaje.login.uuid} key={unPersonaje.login.uuid}/>)
              }
            )}
        </div> 
  
        <Footer/>
  
  
      </div>     
  
    );
  }

}



