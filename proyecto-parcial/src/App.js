
import { Component } from 'react';
import database from "./database.json"
import Tarjeta from './components/Tarjeta'
import Header from './components/Header'

console.log(database)

class App extends Component {

  constructor(){
		super();
		this.state={
      item:database
		}
	};

  render (){
    return (



      <div className="todo">
  
        <Header/>
  
  
        <div className="caja">
        {this.state.item.map((unPersonaje)=>{
              return (<Tarjeta personaje = {unPersonaje} id={unPersonaje.login.uuid} key={unPersonaje.login.uuid}/>)
              }
            )}
        </div> 
  
        <footer>
          <h1>Created by: Franco Mendelsohn</h1>
        </footer>
  
  
      </div>     
  
    );
  }

}

export default App;

