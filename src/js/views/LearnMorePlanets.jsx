import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext.jsx";

export const LearnMorePlanets = () => {
    const params = useParams();
    const [planet, setPlanet] = useState("");
    const planetUrl = 'https://www.swapi.tech/api/planets/'+params.theid;
    const imgUrl = "https://starwars-visualguide.com/assets/img/planets";

    useEffect(() => {
      fetch(planetUrl)
      .then(res => res.json())
      .then(data => setPlanet(data))
      .catch(err => err);
    },[])
    
    return (
    <div className='container'>
      {planet === "" ? <h1>Cargando...</h1> :
      <div className='row'>
        <div className='col-12 col-md-8 col-lg-6'>
          <img src={`${imgUrl}/${planet.result.uid}.jpg`}/>
        </div>
        <div className='col-12 col-md-4 col-lg-6'>
            <h1 id='name'>{planet.result.properties.name}</h1>
            <section>
            <h3 className='item'>
                <p className='key'>Diameter: </p><p className='value'>{planet.result.properties.diameter}</p>
              </h3>
              <article className='item'>
                <p className='key'>Population: </p><p className='value'>{planet.result.properties.population}</p>
              </article>
              <article className='item'>
                <p className='key'>Terrain: </p><p className='value'>{planet.result.properties.terrain}</p>
              </article>
              <article className='item'>
                <p className='key'>Orbital Period: </p><p className='value'>{planet.result.properties.orbital_period}</p>
              </article>
              <article className='item'>
                <p className='key'>Gravity: </p><p className='value'>{planet.result.properties.gravity}</p>
              </article>
              <article className='item'>
                <p className='key'>Climate: </p><p className='value'>{planet.result.properties.climate}</p>
              </article>
            </section>
        </div>
      </div>
      }
    </div>
    )
};

