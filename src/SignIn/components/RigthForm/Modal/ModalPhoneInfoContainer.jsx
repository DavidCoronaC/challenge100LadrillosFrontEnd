import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import icoPhone from '../../../../assets/icoPhone.svg';
import { StepsApp } from '../RigthForm';
import './styles.scss';

export const ModalPhoneInfoContainer = ({handleClose}) => {

    const { setStepsForm } = useContext(StepsApp);
    const userPhone = useSelector(state => state.formReducer.userPhone)

    const handleSubmit = () => {
        setStepsForm('3')
        handleClose();
    }

    return (
        <div className="ModalPhoneInfoContainer_Container">
            <h3 className='ModalPhoneInfoContainer_Title'>Verifica tu teléfono celular</h3>
            <img className='ModalPhoneInfoContainer_img' src={icoPhone} alt="" />
            <span className='ModalPhoneInfoContainer_infoTextCode'>Hemos enviado un código único de 6 digítos a tú teléfono celular</span>
            <span className="ModalPhoneInfoContainer_phoneNumber"> {userPhone} </span>
            <span className="ModalPhoneInfoContainer_timeLimit"> Tu código expira en 2 minutos. </span>
            <div className="ModalPhoneInfoContainer_buttons_code_Container">

            </div>
            <span className="ModalPhoneInfoContainer_infoMessage"> ¿Aún no te llega tu código? ó ¿Tu código expiró? Intenta enviarlo nuevamente </span>
            <span className="ModalPhoneInfoContainer_reSendCode"> Renvíar SMS </span>
            <div className="ModalPhoneInfoContainer_buttons_container">
                <button className="ModalPhoneInfoContainer_buttons ModalPhoneInfoContainer_button_cancel " onClick={handleClose}>Cancelar</button>
                <button className="ModalPhoneInfoContainer_buttons ModalPhoneInfoContainer_button_valid" onClick={handleSubmit}>Validar código</button>
            </div>
        </div>
    )
}
