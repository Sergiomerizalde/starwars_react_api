import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export const Navbar = () => {
	const {store, actions} = useContext(Context); //consumir el contexto
	console.log(store.favorites);
	return (
		<nav className="navbar navbar-light bg-dark mb-3 justify-content-around">
			<Link to="/">
			<img style={{height:"50px", width:"50px"}}
			className="justify-content-center"
            src="https://cdn.worldvectorlogo.com/logos/star-wars-2.svg"
            alt="example"
          	/>
			</Link>
			<button
				className="btn btn-secondary dropdown-toggle"
				type="button"
				id="dropdownMenuButton1"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Favorites
			</button>
			<ul className="dropdown-menu p-2 dropdown-menu-end align-content-center" aria-labelledby="dropdownMenuButton1">
				{store.favorites.map((element, index) => {
				return (
					<li key={index}>
					{element}{" "}
					<button
						onClick={() => {
						actions.borrarFavorite(element);
						}}
					>
						X
					</button>
					</li>
				);
				})}
			</ul>	
		</nav>
	);
};
