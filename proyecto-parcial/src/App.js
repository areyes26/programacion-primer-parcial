import { Component } from 'react';
import Tarjeta from './components/Tarjeta'
import Header from './components/Header'
import Footer from './components/Footer'




export default class App extends Component {

  constructor(){
		super();
		this.state={
      item : [],
      widthoriginal: "100%",
      width: "100%",
      widthalt: "30%" ,


      error: null,
      isLoaded: false,
      numero: "",

		}
	};


  Cambiarwidth = (widthnuevo) => {
    
    if(this.state.width === this.state.widthoriginal)
		this.setState({
			width: widthnuevo
		})
		else{
			this.setState({
				width: this.state.widthoriginal
			})
		}
			}






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
    } else if (campoAfiltrar === "Apellido"){
      let resultado = this.state.item.filter( (item) => {
        return item.name.last.includes(dataAfiltrar)
      })  
      this.setState({item:resultado})
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

<label class="primary ghost" style={{fontWeight:"600", color:"424242"}} className="Filtrarpor">Filtrar por</label>
<select className="select"   id="selectDataFiltro">
  <option>Nombre</option>
  <option>Edad</option>
  <option>Apellido</option>
  </select>

  <input class="primary ghost"className="inputDataFiltro" name="filtroData" id="inputDataFiltro"/>

  <div className="div-botones">
  <button class="primary ghost" onClick={this.filtrarTarjetas.bind(this)}>Filtrar</button>
  <button  class="primary ghost" onClick={this.componentDidMount.bind(this)}>Reset</button>
  </div>
  </div>

      <button class="primary ghost" id="botonesS" onClick = { this.agregarTarjeta.bind(this)}>
        AGREGAR TARJETA
      </button>
   


      <button class="primary ghost" id="botonesS"  onClick = {() => this.Cambiarwidth(this.state.widthalt) }>
            CAMBIAR ORDEN
          </button>
       


        <div className="caja"  style= {{width: this.state.width }} >
          
        {this.state.item.map((unPersonaje)=>{
              return (<Tarjeta nombre={unPersonaje.name.first} apellido={unPersonaje.name.last} mail={unPersonaje.email} 
                fecha={unPersonaje.dob.date} edad={unPersonaje.dob.age} foto={unPersonaje.picture.large} 
                id={unPersonaje.login.uuid} id={this.props.id} onDelete={this.borrarTarjeta.bind(this)} personaje = {unPersonaje} id={unPersonaje.login.uuid} key={unPersonaje.login.uuid} widthorigina={{width: "10%"}}  />)
              }
            )}
        </div> 
  
       <Footer/>

  
  
      </div>     
  
    );
  }

}}



