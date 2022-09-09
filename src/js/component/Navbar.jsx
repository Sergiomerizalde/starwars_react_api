import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 justify-content-around">
			<Link to="/">
			<img style={{height:"50px", width:"50px"}}
			className="justify-content-center"
            src="https://cdn.worldvectorlogo.com/logos/star-wars-2.svg"
            alt="example"
          	/>
			</Link>
		<ul>
			<li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites
				</a>
				<ul className="dropdown-menu">
				<li><a className="dropdown-item" href="#">Favorite list</a></li>
				</ul>
			</li>
		</ul>	
		</nav>
	);
};
