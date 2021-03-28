import arrayPersonajes from '../rickandmorty.json'
import Personaje from './personaje'

function Container(){
    return(
        <div className="container">
            {
                arrayPersonajes.map(function(unPersonaje,idx){
                    return(
                        <Personaje personajeAMostrar={unPersonaje} key={idx}/>
                    )
                })
            }
        </div>
    )
}

export default Container