import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/Navbar.jsx";
import { CharacterCard } from "../component/CharacterCard.jsx" 
import { Planets } from "../component/Planets.jsx";

export const Home = () => (
	<div className="container">
		<div className="container-flex">
		<h1 className="display-1">Characters</h1>
			<div className="overflow-auto d-flex">
				<CharacterCard/>
			</div>
		</div>
		<div className="container-flex">
		<h1 className="display-1">Planets</h1>
			<div className="overflow-auto d-flex">
				<Planets/>
			</div>	
		</div>	
	</div>
);
