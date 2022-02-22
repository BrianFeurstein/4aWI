import React, { Component } from "react";
import styles from './Button.module.css';

export default class Button extends Component{
    render(){
        return(
            <div className={styles.button}>
                <h1>Button</h1>
                <button>Sendar</button>
            </div>
        )}
}