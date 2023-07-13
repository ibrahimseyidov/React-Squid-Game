import React, { Component } from 'react'
import styles from "../../components/RightPlayer/rightplayer.module.css";
import circle from "../../icon/circle.svg";
import mid from "../../icon/mid.svg";
import high from "../../icon/high.svg";


export default class RightPlayer extends Component {
    render() {
        return (
            <>

                <div>
                    <img src={this.props.playerImg2 === "circle" ?  circle :
                        this.props.playerImg2 === "mid" ?  mid
                            : this.props.playerImg2 === "high" ? high : circle} alt="circle" style={{ width: "200px", marginBottom: "20px" }} />
                </div>
                <div>
                    <span className={styles["enemy-player"]}>
                        Enemy Player
                    </span>
                </div>

            </>
        )
    }
}
