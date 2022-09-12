import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export const LearnMore = () => {
    const params = useParams();
    const [character, setCharacter] = useState("");
    const characterUrl = 'https://www.swapi.tech/api/people/'+params.theid;
    const imgUrl = "https://starwars-visualguide.com/assets/img/characters";

    useEffect(() => {
      fetch(characterUrl)
      .then(res => res.json())
      .then(data => setCharacter(data))
      .catch(err => err);
      console.log(character)
    },[])
    
    return (
    <div className='container'>
      {character === "" ? <h1>Cargando...</h1> :
      <div className='row'>
        <div className='col-12 col-md-8 col-lg-6'>
          <img src={`${imgUrl}/${character.result.uid}.jpg`}/>
        </div>
        <div className='col-12 col-md-4 col-lg-6'>
            <h1 id='name'>{character.result.properties.name}</h1>
            <section>
            <h3 className='item'>
                <p className='key'>Gender: </p><p className='value'>{character.result.properties.gender}</p>
              </h3>
              <article className='item'>
                <p className='key'>Height: </p><p className='value'>{character.result.properties.height}</p>
              </article>
              <article className='item'>
                <p className='key'>Mass: </p><p className='value'>{character.result.properties.mass}</p>
              </article>
              <article className='item'>
                <p className='key'>Skin color: </p><p className='value'>{character.result.properties.skin_color}</p>
              </article>
              <article className='item'>
                <p className='key'>Eye color: </p><p className='value'>{character.result.properties.eye_color}</p>
              </article>
              <article className='item'>
                <p className='key'>Birth year: </p><p className='value'>{character.result.properties.birth_year}</p>
              </article>
            </section>
        </div>
      </div>
      }
    </div>
    )
};

