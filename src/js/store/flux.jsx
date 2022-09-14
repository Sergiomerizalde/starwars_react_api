const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			personaje: [],
			planets: [],
			planeta: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			traerPersonajes: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch('https://www.swapi.tech/api/people/')
				.then((response) => response.json())
				// .then(data => setStore({ "foo": data.bar }))
				.then(data => setStore({characters: data.results}))
				// console.log(getStore[])
			},
			traerPersonaje: (theid) => {
				fetch('https://www.swapi.tech/api/people/'+theid)
				.then((response) => response.json())
				.then(data => setStore({personaje: data.result.properties}));
				console.log(personaje);
			},
			traerPlanetas: () =>{
				fetch('https://www.swapi.tech/api/planets/')
				.then((response) => response.json())
				.then(data => setStore({planets: data.results}))
			},
			traerPlaneta: (theid) =>{
				fetch('https://www.swapi.tech/api/planets/'+theid)
				.then((response) => response.json())
				.then(data => setStore({planets: data.results}))
			},
			setearFavorite:(item) =>{
				const store = getStore();
				store.favorites.includes(item) ?  getActions.borrarFavorite(item) : setStore({favorites:([...store.favorites,item])})
			},
			borrarFavorite: (itemborrado) =>{
				const store = getStore();
				let nuevoFavorite = store.favorites.filter(item => itemborrado !== item)
					setStore({favorites: nuevoFavorite})
				},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
