import { Component } from 'react';
import Tarjeta from './components/Tarjeta'
import Header from './components/Header'
import Footer from './components/Footer'




export default class App extends Component {

  constructor(props){
		super(props);
		this.state={
      item : [],
      widthoriginal: this.props.widthorigina,
      width: "52%",
      widthsolo: [],
      value: "",
      copyValue: "",

      error: null,
      isLoaded: false,
      numero: "",

		}
	};

  filtrarTarjetas(){
    let dataAfiltrar = document.getElementById("inputDataFiltro").value
    let campoAfiltrar = document.getElementById("selectDataFiltro").value

    console.log(dataAfiltrar)
    console.log(campoAfiltrar)


    if (campoAfiltrar === "Edad"){
      let resultado = this.state.item.filter( (item) => {
        return item.dob.age == dataAfiltrar 
      }) 
      this.setState({item: resultado})
    } else if (campoAfiltrar === "Nombre"){
      let resultado = this.state.item.filter( (item) => {
        return item.name.first.includes(dataAfiltrar)
      })
      this.setState({item: resultado})
    } else if (campoAfiltrar === "Sexo"){
      let resultado = this.state.item.filter( (item) => {
        return item.gender === dataAfiltrar
      })  
      this.setState({items:resultado})
    }
  }


  
  abrirFormulario(){
    var x = document.getElementById("formulario");
     if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
      console.log(x.style.display)
  }










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
        item : data.results,
        isLoaded: true
      })
      console.log(data.results);
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
    
    )
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
    const {error, isLoaded, items} = this.state;

    if(error){
      return <div> Error: {error.message}</div>;
    } else {
  
    return (
        



      

      <div className="todo">
                  
        <Header/>

        <div className="filtros-div">

  <h2 className="filtros-title">Filtros</h2>

  <label style={{fontWeight:"600", color:"424242"}}>Filtrar por</label>
  <select id="selectDataFiltro">
  <option>Nombre</option>
  <option>Edad</option>
  <option>Sexo</option>
  </select>

  <input className="inputDataFiltro" name="filtroData" id="inputDataFiltro"/>

  <div className="div-botones">
  <button className="boton" onClick={this.filtrarTarjetas.bind(this)}>Filtrar</button>
  <button className="boton-secundario boton"onClick={this.componentDidMount.bind(this)}>Reset</button>
  </div>
  </div>

      <button onClick = { this.agregarTarjeta.bind(this)}>
        AGREGAR TARJETA
      </button>

      <button onClick = {() => this.Cambiarwidth("30%", "CENTER") }>
            CAMBIAR ORDEN
          </button>
      
        <div className="caja"  style= {{ 
        width: this.state.widthsolo }} >
          
        {this.state.item.map((unPersonaje)=>{
              return (<Tarjeta nombre={unPersonaje.name.first} apellido={unPersonaje.name.last} mail={unPersonaje.email} 
                fecha={unPersonaje.dob.date} edad={unPersonaje.dob.age} foto={unPersonaje.picture.large} 
                 onDelete={this.borrarTarjeta.bind(this)} personaje = {unPersonaje} id={unPersonaje.login.uuid} key={unPersonaje.login.uuid} widthorigina={"28%"} />)
              }
            )}
        </div> 
  
       <Footer/>

  
  
      </div>     
  
    );
  }

}}



