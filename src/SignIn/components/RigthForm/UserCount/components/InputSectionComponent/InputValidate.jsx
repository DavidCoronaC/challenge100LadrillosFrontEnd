import React, { useEffect, useRef, useState } from 'react';
import validateInActive from '../../../../../../assets/validateInActive.svg';
import validateActive from '../../../../../../assets/validateActive.svg';
import './sass/styles.scss';

export const InputValidate = ({passwrd, isValidPass}) => {


    const isRender = useRef(0);

    const [validations, setValidations] = useState({
        '1': {status: false, info: 'Mínimo 6 caracteres (letras, números y caracteres especiales).'},
        '2': {status: false, info: 'Mínimo 1 número.'},
        '3': {status: false, info: 'Mínimo 1 de estos caracteres especiales !”#$%&/()=?¿^*@‚[]{};:_><,.-|`+.'},
        '4': {status: false, info: 'No tener la frase “100Ladrillos”.'},
        '5': {status: false, info: 'No tener mas de 3 caracteres idénticos en forma consecutiva (ej: aaa).'},
        '6': {status: false, info: 'No tener mas de 3 caracteres numéricos y/o letras en forma secuencial (ej: 123).'}
    });

    useEffect(() => {
        if(!isRender){
            isRender.current = 1;
            return;
        }
        let validationsCopy = {...validations};
        validationsCopy['1'] =  { ...validations['1'], status: passwrd.length >= 6 };
        validationsCopy['2'] =  { ...validations['2'], status: /\d/.test(passwrd) };
        validationsCopy['3'] =  { ...validations['3'], status: /[\W\_]+/.test(passwrd) };
        validationsCopy['4'] =  { ...validations['4'], status: !/100[lL]adrillos/.test(passwrd) };
        validationsCopy['5'] =  { ...validations['5'], status: !/(.)\1{2,}/.test(passwrd) };
        validationsCopy['6'] =  { ...validations['6'], status: !/[a-zA-Z]{3,}|[0-9]{3,}/.test(passwrd) };
        setValidations(validationsCopy);
        isValidPass(Object.values(validationsCopy).every(target=> target.status ))
    }, [passwrd])

    return (
        <div className='InputValidate_Container'>
            <span className="InputValidate_info">
                Por razones de seguridad tu contraseña debe tener las siguientes carateristicas:
            </span>
            {
                Object.values(validations).map((target)=>(
                    <div key={target.info} className="InputValidate_Items_Container">
                        <img src={target.status ? validateActive : validateInActive} alt="" className='InputValidate_Items_img' />
                        <span className='InputValidate_Items_text' >{target.info}</span>
                    </div>
                ))
            }
        </div>
    )
}
