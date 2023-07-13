import React, { Component } from 'react';
import styles from "../Header/header.module.css";
import logo from "../../icon/logo.svg";
import RulesModal from '../RulesModal/RulesModal';
import squidgame from "../../audio/squidgame.mp3";

export default class Header extends Component {
    constructor() {
        super()
        this.audioRef = React.createRef();

        this.state = {
            isPlaying: false
        };
    }

    togglePlayback = () => {
        const { isPlaying } = this.state;
        const audioElement = this.audioRef.current;

        if (isPlaying) {
            audioElement.pause();
        } else {
            audioElement.play();
        }

        this.setState(prevState => ({
            isPlaying: !prevState.isPlaying
        }));
    };

    handleEnded = () => {
        this.audioRef.current.currentTime = 0;
        this.audioRef.current.play();
    };

    render() {
        const { isPlaying } = this.state;

        return (
            <header header className={styles["bg-header"]} >

                <div className={styles["header-container"]}>

                    <div>
                        <img style={{ width: "100px" }} src={logo} alt="logo" />
                    </div>

                    <div>
                        <span className={styles.score}>MY SCORE: <span style={{ color: "#EF428C" }}>{this.props.myScore}</span></span>
                    </div>




                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ marginRight: "20px" }}>
                            <audio ref={this.audioRef} src={squidgame} type="audio/mpeg" onEnded={this.handleEnded} />

                            <button onClick={this.togglePlayback} style={{ backgroundColor: "transparent", border: "none" }}>
                                {isPlaying ? <i className={`fa-solid fa-volume-high ${styles["custom-css"]}`}></i> : <i className={`fa-solid fa-volume-xmark ${styles["custom-css"]}`}></i>}
                            </button>

                        </div>
                        <RulesModal />
                    </div>
                </div>

            </header >
        )
    }
}
