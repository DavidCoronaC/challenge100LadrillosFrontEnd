import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { setPhoneToRedux } from '../../../../actions/formActions';
import { useForm } from '../../../hooks/useForm';
import { InputTypeComponent } from '../components/InputTypeComponent';
import { StepsApp } from '../RigthForm';
import './styles.scss';

export const UserPhone = () => {
    const dispatch = useDispatch();
    const { setStepsForm, handleOpenModal } = useContext(StepsApp);
    const [{inputPhone}, handleInputChange] = useForm({
        inputPhone: ''
    });

    const handleSubmitForm = () => {
        dispatch(setPhoneToRedux(inputPhone));
        handleOpenModal();
    }

    return (
        <div className="UserPhone_Container">
            <h3 className='UserPhone_Title'>¿Cuál es tu teléfono celular?</h3>
            <InputTypeComponent 
                type={'PHONE'} 
                placeholderInput={'00 00 00 00 00'} 
                valueInput={inputPhone}
                nameInput={'inputPhone'}
                handleInputChange={handleInputChange}
            />
            <div className="UserPhone_Buttons_Container">
                <button disabled={inputPhone.trim().length === 14 ? false : true } className={inputPhone.trim().length === 14 ? "UserPhone_button UserPhone_button_Return" : "UserPhone_button"} onClick={() => setStepsForm('1')} >Anterior</button>
                <button disabled={inputPhone.trim().length === 14 ? false : true} className={inputPhone.trim().length === 14 ? "UserPhone_button UserPhone_button_Next" : "UserPhone_button"} onClick={handleSubmitForm} >Siguiente</button>
            </div>
        </div>
    )
}
