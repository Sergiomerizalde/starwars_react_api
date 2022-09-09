// import { MoreInfo } from "../component/MoreInfo.jsx";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";


export const LearnMore = () => {
	const {store, actions} = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.traerPersonaje(params.theid);
	}, []);
	console.log(store.personaje);

	return (
		<div>
		</div>
	  ); 
};

