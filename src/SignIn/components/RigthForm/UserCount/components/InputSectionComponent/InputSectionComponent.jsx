import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from '../../../../../hooks/useForm';
import { LoginOptionsComponent } from '../LoginOptionsComponent/LoginOptionsComponent';
import { InputTypeComponent } from '../../../components/InputTypeComponent';
import { InputValidate } from './InputValidate';
import { StepsApp } from '../../../RigthForm';
import { useDispatch } from 'react-redux';
import './sass/styles.scss';
import { setDataFomrFirstSectionToRedux, userGetToken } from '../../../../../../actions/formActions';

export const InputSectionComponent = () => {
    const isRender = useRef(0);
    
    const { setStepsForm } = useContext(StepsApp);
    const dispatch = useDispatch();
    const [visiblePass, setVisiblePass] = useState('password');
    const [validPass, setValidPass] = useState(false);
    const [validMail, setValidMail] = useState(false);
    const [validateItems, setValidateItems] = useState(false);

    const [{mailInput, passInput, confirmPassInput}, handleInputChange] = useForm({
        mailInput: '',
        passInput: '',
        confirmPassInput: '',
    });

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(setDataFomrFirstSectionToRedux({email: mailInput, pass: passInput}));
        dispatch(userGetToken(mailInput, passInput));
        setStepsForm('2');
    }

    useEffect(() => {
        if(!isRender){
            isRender.current = 1;
            return;
        }
        if (passInput === confirmPassInput && validPass && validMail){
            setValidateItems(true);
        }else{
            setValidateItems(false);
        }
    }, [passInput, confirmPassInput, validPass])

    return (
        <form className='InputSectionComponent_Container' onSubmit={handleSubmitForm}>

            <div className="InputSectionComponent_Input_Container">
                <InputTypeComponent
                    type={'MAIL'}
                    title={'¿Cuál es tu correo electrónico?'}
                    handleInputChange={handleInputChange} 
                    valueInput={mailInput}
                    nameInput={'mailInput'}
                    isValidMail={setValidMail}
                    placeholderInput={'tu@correo.com'}
                />
                <InputTypeComponent
                    type={'PASS'}
                    title={'Ingresa una contraseña'}
                    handleInputChange={handleInputChange} 
                    valueInput={passInput}
                    nameInput={'passInput'}
                    setVisiblePass={setVisiblePass}
                    visiblePass={visiblePass}
                    placeholderInput={'Contraseña'}
                />

                {
                    passInput.length > 0 &&
                    <>  

                        <InputValidate isValidPass={setValidPass} passwrd={passInput}/>

                        <InputTypeComponent
                            type={'PASS'}
                            title={'Confirma tu contraseña'}
                            handleInputChange={handleInputChange} 
                            valueInput={confirmPassInput}
                            nameInput={'confirmPassInput'}
                            setVisiblePass={setVisiblePass}
                            visiblePass={visiblePass}
                            confirmPass={passInput}
                            placeholderInput={'Contraseña'}
                        />
                        <button type='submit' className={validateItems ? "InputSectionComponent_form_button InputSectionComponent_form_button_active " : "InputSectionComponent_form_button"}> Siguiente</button>
                    </>
                }

            </div>

            {
                passInput.length === 0 &&
                    <LoginOptionsComponent />
            }
        </form>
    )
}
