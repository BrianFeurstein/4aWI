import React, { Component } from "react";
import styles from './Card.module.css';


export default class Card extends Component{
    render(){
        return(
            
            <div className={styles.div}>
                <div><h1>Card</h1></div>
                <div className={styles.image}>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" width="130px" height="150px"></img>
                </div>
                <div className={styles.name}>
                    <h3>John Doe</h3>

                    <p>Engineer</p>

                </div>
                
                
            </div>
        )
    }
}