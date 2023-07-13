import React, { Component } from 'react';
import styles from "../GameArea/gamearea.module.css";
import rectangle from "../../icon/rectangle.svg"
import LeftPlayer from '../LeftPlayer/LeftPlayer';
import RightPlayer from '../RightPlayer/RightPlayer';
import Header from "../Header/Header";

export default class GameArea extends Component {

    constructor() {
        super()

        this.state = {
            playerStatusOne: {
                playerImg: "",
            },

            playerStatusTwo: {
                playerImg: "",
            },

            myScore: 0
        }

        this.changeStateStatus = this.changeStateStatus.bind(this)
        this.changeStateStatus2 = this.changeStateStatus2.bind(this)
        this.whoWinner = this.whoWinner.bind(this)
    }


    changeStateStatus(randomSquid) {
        console.log(randomSquid);
        this.setState({
            playerStatusOne: {
                playerImg: randomSquid,
                playerScore: null
            },
        })

    }

    changeStateStatus2(randomSquid) {
        this.setState({
            playerStatusTwo: {
                playerImg: randomSquid,
                playerScore: ""
            }
        })
    }

    whoWinner(player1Result, player2Result) {

        console.log(player1Result, player2Result);

        if (player1Result === player2Result) {

        } else if ((player1Result === "circle" && player2Result !== "circle")
            || (player1Result === "mid" && player2Result === "high")) {
            console.log("oyuncu 1 uduzdu");
        } else if ((player1Result === "high" && player2Result !== "high")
            || (player1Result === "mid" && player1Result === "circle")) {
            this.setState(prevState => ({
                myScore: prevState.myScore + 1
            }));
        }
    }


    render() {

        return (
            <>
                <div className={styles["bg-game"]}>

                    <Header myScore={this.state.myScore} />

                    <div style={{ display: "flex", justifyContent: "space-between" }}>

                        <div className={styles["left-container"]}>
                            <LeftPlayer
                                changeStateStatus={this.changeStateStatus}
                                changeStateStatus2={this.changeStateStatus2}
                                playerImg={this.state.playerStatusOne.playerImg}
                                whoWinner={this.whoWinner}
                            />
                        </div>

                        <div>
                            <img src={rectangle} alt="rectangle" />
                        </div>

                        <div className={styles["right-contaienr"]}>
                            <RightPlayer playerImg2={this.state.playerStatusTwo.playerImg} />
                        </div>

                    </div>




                </div>
            </>
        )
    }
}
