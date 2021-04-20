
import database from "./database.json"
import Tarjeta from './components/Tarjeta'
import Header from './components/Header'


function App (){
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

export default App;

