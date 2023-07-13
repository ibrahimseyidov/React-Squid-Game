import React, { Component } from 'react'
import circle from "../../icon/circle.svg";
import mid from "../../icon/mid.svg";
import high from "../../icon/high.svg";
import styles from "../../components/LeftPlayer/leftplayer.module.css"
import { toHaveStyle } from '@testing-library/jest-dom/matchers';


export default class LeftPlayer extends Component {

    constructor() {
        super()

        this.playGame = this.playGame.bind(this)
    }


    playGame() {
        const squidArr = ["circle", "high", "mid"];
        const randomSquid = Math.floor((Math.random() * squidArr.length));
        let randomSquidVal = squidArr[randomSquid]
        this.props.changeStateStatus(randomSquidVal)
        const squidArr2 = ["circle", "high", "mid"];
        const randomSquid2 = Math.floor((Math.random() * squidArr.length));
        let randomSquidVal2 = squidArr2[randomSquid2]
        this.props.changeStateStatus2(randomSquidVal2)
        this.props.whoWinner(randomSquidVal, randomSquidVal2)
    }

    render() {
      
        return (
            <>
                <div>
                    <img src={this.props.playerImg === "circle" ? circle :
                        this.props.playerImg === "mid" ? mid
                            : this.props.playerImg === "high" ? high : circle} alt="circle" style={{ width: "200px", marginBottom: "20px" }} />
                </div>
                <div>
                    <button className={styles["play-game-btn"]} onClick={this.playGame}>
                        Play
                    </button>
                </div>
            </>
        )
    }
}
