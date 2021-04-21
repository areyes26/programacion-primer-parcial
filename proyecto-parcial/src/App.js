
import { Component } from 'react';
import database from "./database.json"
import Tarjeta from './components/Tarjeta'
import Header from './components/Header'


class App extends Component {

  constructor(){
		super();
		this.state={
      
		}
	};

  render (){
    return (



      <div className="todo">
  
  
        <Header/>
  
  
        <div className="caja">
            {database.map(function(unPersonaje, idx){
              return (<Tarjeta 
                      personaje = {unPersonaje} 
                      key={idx}
                       />)
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

