import React, { Component } from 'react';
import RulesModal from '../RulesModal/RulesModal';
import logo from "../../icon/logo.svg"
import styles from "../Playgame/playgame.module.css"
import style from "../Header/header.module.css"
import GameArea from '../GameArea/GameArea';

export default class Playgame extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pageStatus: true
        }
    }

    changePageStatus = () => {
        this.setState({ pageStatus: false })
    }



    render() {
        return (
            <>
                <div className={styles["bg-container"]} style={this.state.pageStatus ? { display: "block" } : { display: "none" }}>

                    <header header className={style["bg-header"]} >

                        <div className={style["header-container"]}>

                            <div>
                                <img style={{ width: "100px" }} src={logo} alt="logo" />
                            </div>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <RulesModal />
                            </div>
                        </div>

                    </header >

                    <main>

                        <div className={styles["play-container"]}>
                            <button className={styles["play-btn"]} onClick={this.changePageStatus}>
                                Play Game
                            </button>
                        </div>

                    </main>
                </div>
                {
                    !this.state.pageStatus ? <GameArea /> : null
                }
            </>
        )
    }
}
