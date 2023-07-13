import React, { useState } from 'react';
import { Modal } from 'antd';
import styles from "../Header/header.module.css";
import hamburger from "../../icon/hamburger.svg";

const RulesModal = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <button onClick={showModal} className={styles["ham-btn"]}>
                <img src={hamburger} alt="hamburger" />
            </button>

            <Modal title="Squid Game Rules" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Oyunun Sembolik Qaydaları:

                    Kvadrat: 🔲
                    Üçbucaq: 🔺
                    Dairə: ⭕

                    <br />
                    <br />

                    Oyunun Seçim Qaydaları:
                    <br />
                    <br />
                    Oyunçu və rəqib tərəfindən, kvadrat, üçbucaq və dairə arasından seçim edilir.
                    Oyuncunun seçimini simge ilə göstərək: 🙋‍♂️
                    Rəqibin seçimini simge ilə göstərək: 🤖
                    Qalib gəlmə və Məğlub olma Qaydaları:

                    <br />
                    <br />

                    Kvadrat, üçbucağı məğlub edir, dairəni məğlub edir.
                    Üçbucaq, kvadrata məğlub olur, dairəni məğlub edir.
                    Dairə, kvadrata məğlub olur, üçbucağa məğlub olur.
                    Nəticəni Bildirmə:
                    <br />
                    <br />

                    Nümunə bir oyun turunu aşağıda göstərək:
                    <br />
                    <br />
                    Oyunçu və rəqib seçim edir:
                    <br />
                    <br />
                    Oyunçu, kvadrat seçir: 🙋‍♂️🔲
                    Rəqib, dairəni seçir: 🤖⭕
                    Seçimlər qarşılaşdırılır:
                    <br />
                    <br />
                    Oyunçu: 🔲
                    Rəqib: ⭕
                    <br />
                    <br />

                    Dairə, kvadrata məğlub olduğu üçün oyunçu qalib gəlir: 🙋‍♂️🏆
                    Bu cürdə oyun davam edir və qalib müəyyənləşir.</p>
            </Modal>
        </>
    );
};
export default RulesModal;