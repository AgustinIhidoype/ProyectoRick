function Personaje(props){
    console.log(props);
    return(
        <div className="personaje">
            <h2>{props.personajeAMostrar.name}</h2>
            <img className="imgPersonaje" src={props.personajeAMostrar.image}/>
            <p>Estatus: {props.personajeAMostrar.status}</p>
            <p>Especie: {props.personajeAMostrar.species}</p>
            <p>Origen: {props.personajeAMostrar.origin.name}</p> 
        </div>
    )
}

export default Personaje;