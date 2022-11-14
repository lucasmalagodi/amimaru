import React from "react";
import { ReactComponent as Amimaru } from "../assets/amimaru.svg";
import "./Home.css";


const Home = () => {
    const handleClick = event => {
        event.currentTarget.classList.add('out');

        setTimeout(function() { //Start the timer
            // this.setState({render: true}) //After 1 second, set render to true
            // event.currentTarget.classList.remove('out');
            window.location.href ='/produtos'
        }.bind(this), 900)
         // 👇️ remove class on click
    }
    return (
        <div className="home" onClick={handleClick}>
                <div className="logo" >
                    <Amimaru  />
                </div>
                <div className="texto-home">
                    <p>Seja bem vindo!</p>
                </div>
        </div>
    );
}

export default Home;