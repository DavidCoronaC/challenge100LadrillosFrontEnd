import React, { useContext, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUserDataToRedux } from '../../../../actions/formActions';
import { useForm } from '../../../hooks/useForm';
import { InputTypeComponent } from '../components/InputTypeComponent'
import { StepsApp } from '../RigthForm';
import './styles.scss';

export const UserData = () => {
    const dispatch = useDispatch();
    const isRender = useRef(0);
    const { setStepsForm } = useContext(StepsApp);
    const [{inputName, inputSecondName, inputLastName, inputSecondLastName}, handleInputChange] = useForm({
        inputName: '',
        inputSecondName: '',
        inputLastName: '',
        inputSecondLastName: '',
    });

    const [infoComplete, setInfoComplete] = useState(false);


    useEffect(() => {
        if(!isRender){
            isRender.current = 1;
            return;
        }
        if(inputName&&inputLastName&&inputSecondLastName){
            setInfoComplete(true);
        }else{
            setInfoComplete(false);
        }
        
    }, [inputName, inputLastName, inputSecondLastName])


    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(setUserDataToRedux({firstName: inputName, secondName: inputSecondName, firstLastName: inputLastName, secondLastName: inputSecondLastName}));
        setStepsForm('4');
    }

    return (
        <div className='UserData_Container'>
            <h3 className='UserData_Title'>¿Cómo te llamas?</h3>
            <InputTypeComponent
                title={'Primer nombre'}
                type={'INFO'}
                placeholderInput={'Primer nombre'} 
                valueInput={inputName}
                nameInput={'inputName'}
                handleInputChange={handleInputChange}
            />
            <InputTypeComponent
                title={'Segundo nombre (Opcional)'} 
                type={'INFO'} 
                placeholderInput={'Sengundo nombre'} 
                valueInput={inputSecondName}
                nameInput={'inputSecondName'}
                handleInputChange={handleInputChange}
            />
            <InputTypeComponent
                title={'Primer apellido'} 
                type={'INFO'} 
                placeholderInput={'Primer apellido'} 
                valueInput={inputLastName}
                nameInput={'inputLastName'}
                handleInputChange={handleInputChange}
            />
            <InputTypeComponent
                title={'Segundo apellido'} 
                type={'INFO'} 
                placeholderInput={'Segundo apellido'} 
                valueInput={inputSecondLastName}
                nameInput={'inputSecondLastName'}
                handleInputChange={handleInputChange}
            />
            <div className="UserData_Buttons_Container">
                <button className={infoComplete ? 'UserData_button UserData_button_Return' : "UserData_button"} disabled={!infoComplete} onClick={() => setStepsForm('2')} >Anterior</button>
                <button className={infoComplete ? 'UserData_button UserData_button_Next' : "UserData_button"} disabled={!infoComplete} onClick={handleSubmitForm} >Siguiente</button>
            </div>
        </div>
    )
}
