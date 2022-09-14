import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export const Navbar = () => {
	const {store, actions} = useContext(Context); //consumir el contexto

	return (
		<nav className="navbar navbar-light bg-dark mb-3 justify-content-around">
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
				{/* <ul className="dropdown-menu">
				<li><a className="dropdown-item" href="#">Favorite list</a></li>
				</ul> */}
				<div className="container col-6 text-center">
				<ul> 
				{store.favorites.map((item,index)=>{
					return (
						<li key={index}>
							{" "}
						 	{item.name} 
							<span> 
								<button
									type="button"
									className="btn"
									onClick={()=>actions.borrarFavorite(item)}
									>
									X 
								</button>	
							</span>
						</li>
					);
					})}
				</ul>
			</div>
			</li>
		</ul>	
		</nav>
	);
};
