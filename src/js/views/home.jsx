import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/Navbar.jsx";
import { CharacterCard } from "../component/CharacterCard.jsx" 
import { Planets } from "../component/Planets.jsx";

export const Home = () => (
	<div className="container p-1 mb-4 bg-secondary">
		<h1 className="display-1">Characters</h1>
		<div className="container-flex">
			<div className="overflow-auto d-flex">
				<CharacterCard/>
			</div>
		</div>
		<h1 className="display-1">Planets</h1>
		<div className="container-flex">
			<div className="overflow-auto d-flex">
				<Planets/>
			</div>	
		</div>	
	</div>
);
