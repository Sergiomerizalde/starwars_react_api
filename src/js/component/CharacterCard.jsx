import React, {useContext} from "react"; //importar estado
import {Context} from "../store/appContext.jsx"; //importar el contexto que tenemos
import { Link } from "react-router-dom";

export const CharacterCard = () => {
    // console.log(useContext(Context))
    const {store, actions}=useContext(Context); //consumir el contexto
	return (
     <>
    {store.characters.map((item,i) => { 
     return (  
    <div>
        <div className="container">
            <div className="card col-4 mx-auto" style={{width: "24rem"}}>
            <img src={"https://starwars-visualguide.com/assets/img/characters/"+ item.uid +".jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.gender}</p>
                <p className="card-text">{item.hair_color}</p>
                <p className="card-text">{item.eye_color}</p>
                    <div className="d-flex justify-content-between">   
                    <Link to={"/LearnMore/"+item.uid}>
                    <a href="#" className="btn btn-primary">Learn more!</a>
                    </Link>
                    <a href="#" className="btn btn-primary bg-dark">🤍</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
     )
    })} 
    </>   
    )
    }