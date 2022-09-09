import React from "react";
import { Link } from "react-router-dom";

export const Planets = () => {
	return (
    <div>
        <h1 className="display-1">Planets</h1>  
        <div className="container-fluid d-flex justify-content-evenly scrollable-div">
            <div className="card col-4" style={{width: "18rem"}}>
            <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1419477418l/24063078.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Earth 30IRX</h5>
                <p className="card-text">Population: 1020102</p>
                <p className="card-text">Terrain: Rocks</p>
                    <div className="d-flex justify-content-between">
                    <Link to={"/LearnMore"}>
                    <a href="#" className="btn btn-primary">Learn more!</a>
                    </Link>
                    <a href="#" className="btn btn-primary bg-dark">🤍</a>
                    </div>
                </div>
            </div>
            <div className="card col-4" style={{width: "18rem"}}>
            <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1419477418l/24063078.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Earth 30IRX</h5>
                <p className="card-text">Population: 1020102</p>
                <p className="card-text">Terrain: Rocks</p>
                    <div className="d-flex justify-content-between">
                    <Link to={"/LearnMore"}>
                    <a href="#" className="btn btn-primary">Learn more!</a>
                    </Link>
                    <a href="#" className="btn btn-primary bg-dark">🤍</a>
                    </div>
                </div>
            </div>
            <div className="card col-4" style={{width: "18rem"}}>
            <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1419477418l/24063078.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Earth 30IRX</h5>
                <p className="card-text">Population: 1020102</p>
                <p className="card-text">Terrain: Rocks</p>
                    <div className="d-flex justify-content-between">
                    <Link to={"/LearnMore"}>
                    <a href="#" className="btn btn-primary">Learn more!</a>
                    </Link>
                    <a href="#" className="btn btn-primary bg-dark">🤍</a>
                    </div>
                </div>
            </div>
            <div className="card col-4" style={{width: "18rem"}}>
            <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1419477418l/24063078.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Earth 30IRX</h5>
                <p className="card-text">Population: 1020102</p>
                <p className="card-text">Terrain: Rocks</p>
                    <div className="d-flex justify-content-between">
                    <Link to={"/LearnMore"}>
                    <a href="#" className="btn btn-primary">Learn more!</a>
                    </Link>
                    <a href="#" className="btn btn-primary bg-dark">🤍</a>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    )
    }