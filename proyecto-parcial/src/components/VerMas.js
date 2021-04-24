import React, { Component } from 'react';


class VerMas extends Component{
    constructor() {
        super()
        this.title = React.createRef()
        this.verInfo = this.verInfo.bind( this )
        this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
    }
    verInfo() {
        console.log(this.title)
        // this.title.current.style.display = 'block'
        if(this.title.current.style.display === "none"){
            this.title.current.style.display = "block";
        } else{
            this.title.current.style.display = "none";
        }
    }
    componentDidMount() {
        fetch("https://randomuser.me/api/?results=12")  
        .then(res => 
          res.json())
        .then(
          (data) => {
            console.log(data);
    
              this.setState({
                isLoaded: true,
                items: data.results,
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
      render() {
        const {error, isLoaded, items} = this.state;
        return (
            <div className="App">
                 <button class="primary ghost" onClick = { this.verInfo }>Ver Mas</button>
                 {items.map(item=> (
                    <div ref = { this.title } style={{display: 'none'}}>
                        <li><b>Direccion: </b>{item.location.street.name}, {item.location.street.number}</li>
                        <li><b>Ciudad: </b>{item.location.city}, {item.location.state}</li>
                        <li><b>Codigo Postal: </b> {item.location.postcode} </li>
                        <li><b>Pais: </b> {item.location.country}</li>
                        <li><b>Registrado: </b>{item.registered.date.substring(0,10)}</li>
                        <li><b>Contacto: </b> {item.phone}</li>
                    </div>
                 ))}
            </div>
        );
    }
}

export default VerMas