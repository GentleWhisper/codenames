import {ModalDesktop} from "@alfalab/core-components/modal/desktop";
import { Typography } from '@alfalab/core-components/typography';
import {Space} from "@alfalab/core-components/space";
import {ButtonDesktop} from "@alfalab/core-components/button/desktop";

type LobbyCreationProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
}

export const LobbyCreation = ({ isOpen, onClose, onSubmit }: LobbyCreationProps) => {
    return (
        <ModalDesktop open={isOpen} onClose={onClose} size='m'>
            <ModalDesktop.Header
                hasCloser={true}
                title={'Настройки комнаты'}
            />
            <ModalDesktop.Content>
                <Space>
                    <Typography.Title view='medium' tag='h3' font='system'>
                        {`Создать комнату?`}
                    </Typography.Title>
                </Space>
            </ModalDesktop.Content>
            <ModalDesktop.Footer sticky={true}>
                <ModalDesktop.Controls
                    primary={
                        <ButtonDesktop view='primary' size='s' onClick={onSubmit}>
                            Создать
                        </ButtonDesktop>
                    }
                />
            </ModalDesktop.Footer>
        </ModalDesktop>
    )
}