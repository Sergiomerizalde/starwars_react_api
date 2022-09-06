import React from "react";
import { Link } from "react-router-dom";

export const CharacterCard = () => {
	return (
    <div className="container d-flex justify-content-evenly">
        <div className="card col-4" style={{width: "18rem"}}>
        <img src="https://media.timeout.com/images/103238263/750/562/image.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Name: Luke Skywalker</h5>
            <p className="card-text">Age: 200 Years</p>
            <p className="card-text">Hair Color: Red</p>
            <Link to={"/LearnMore"}>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </Link>
            </div>
        </div>
        <div className="card col-4" style={{width: "18rem"}}>
        <img src="https://media.timeout.com/images/103238263/750/562/image.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Name: Luke Skywalker</h5>
            <p className="card-text">Age: 200 Years</p>
            <p className="card-text">Hair Color: Red</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div className="card col-4" style={{width: "18rem"}}>
        <img src="https://media.timeout.com/images/103238263/750/562/image.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Name: Luke Skywalker</h5>
            <p className="card-text">Age: 200 Years</p>
            <p className="card-text">Hair Color: Red</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div className="card col-4" style={{width: "18rem"}}>
        <img src="https://media.timeout.com/images/103238263/750/562/image.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Name: Luke Skywalker</h5>
            <p className="card-text">Age: 200 Years</p>
            <p className="card-text">Hair Color: Red</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div className="card col-4" style={{width: "18rem"}}>
        <img src="https://media.timeout.com/images/103238263/750/562/image.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Name: Luke Skywalker</h5>
            <p className="card-text">Age: 200 Years</p>
            <p className="card-text">Hair Color: Red</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div className="card col-4" style={{width: "18rem"}}>
        <img src="https://media.timeout.com/images/103238263/750/562/image.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Name: Luke Skywalker</h5>
            <p className="card-text">Age: 200 Years</p>
            <p className="card-text">Hair Color: Red</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    )
    }