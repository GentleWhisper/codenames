import { useNavigate } from 'react-router-dom';
import { GenericWrapper } from "@alfalab/core-components/generic-wrapper";
import {ButtonDesktop} from "@alfalab/core-components/button/desktop";
import {Space} from "@alfalab/core-components/space";
import {Gap} from "@alfalab/core-components/gap";

import styles from './main-page.module.css'
import logo from "./logo.svg";
import {LobbyCreation} from "../../features/lobby-creation";
import {useState} from "react";

export const MainPage = () => {
    const navigate = useNavigate();
    const [isLobbyCreation, setLobbyCreation] = useState(false);

    const handleEnterLobby = () => navigate('lobby');
    const handleOpenLobbyCreation = () => setLobbyCreation(true);
    const handleCloseLobbyCreation = () => setLobbyCreation(false);
    const handleCreateLobby = () => navigate('lobby');

    return (
        <GenericWrapper justifyContent='center' alignItems='center' column={true} className={styles.wrapper}>
            <h1>CODENAMES</h1>
            <img src={logo} className={styles.logo} alt="logo"/>
            <Gap size='5xl'/>
            <Space direction='horizontal'>
                <ButtonDesktop onClick={handleEnterLobby}>Войти в комнату</ButtonDesktop>
                <ButtonDesktop onClick={handleOpenLobbyCreation}>Создать комнату</ButtonDesktop>
            </Space>
        <LobbyCreation isOpen={isLobbyCreation} onClose={handleCloseLobbyCreation} onSubmit={handleCreateLobby}/>
        </GenericWrapper>
    )
}