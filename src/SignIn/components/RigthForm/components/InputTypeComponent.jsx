import React, { useEffect, useRef } from 'react';
import InputMask from 'react-input-mask';
import visiblePassOff from '../../../../assets/visibilityOff.svg';
import visiblePassOn from '../../../../assets/visibilityOn.svg';
import './styles.scss';

export const InputTypeComponent = ({title ,isValidMail,confirmPass,visiblePass, valueInput, nameInput, handleInputChange, setVisiblePass, type, placeholderInput}) => {
    const isRender = useRef(0);
    let validateMail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


    useEffect(() => {
        if(!isRender){
            isRender.current = 1;
            return;
        }
        if(isValidMail && valueInput && validateMail.test(valueInput)){
            isValidMail(validateMail.test(valueInput))
        }
        
    }, [valueInput])

    return (

        <div className="InputSectionComponent_Input_Container">
            
            <label className='InputSectionComponent_Input_label'>{title}</label>

            {
                type === 'MAIL' &&
                <> 
                    {
                        valueInput && !validateMail.test(valueInput)&&
                        <span className='InputSectionComponent_Input_mail_error'>Correo no valido</span>
                    }
                    <input
                        className='InputSectionComponent_Input'
                        type="text"
                        value={valueInput}
                        name={nameInput}
                        onChange={handleInputChange}
                        placeholder={placeholderInput}
                    />
                </>
            }
            {
                type === 'INFO' &&
                <input
                        className='InputSectionComponent_Input'
                        type="text"
                        value={valueInput}
                        name={nameInput}
                        onChange={handleInputChange}
                        placeholder={placeholderInput}
                    />
            }
            {
                type === 'PASS' &&
                <>
                    {
                        confirmPass && valueInput !== confirmPass &&
                        <span className='InputSectionComponent_Input_mail_error'>Contraseñas no coinciden</span>
                    }
                <div className="InputSectionComponent_Input_Pass_Container">
                    <input
                        className='InputSectionComponent_Input InputSectionComponent_Input_Pass'
                        type={visiblePass}
                        value={valueInput}
                        name={nameInput}
                        onChange={handleInputChange}
                        placeholder={placeholderInput}
                    />
                    <div className='InputSectionComponent_Input_Pass_img_container' 
                        onClick={() => setVisiblePass(prev=> prev === 'password'
                            ? 'text' : 'password' )}
                        >                    
                        <img    className='InputSectionComponent_Input_Pass_img' 
                                src={visiblePass === 'password' 
                                    ? visiblePassOff : visiblePassOn} 
                                    alt="" 
                                />
                    </div>
                </div>
                </>
            }

            {
                type === 'PHONE' &&
                    <InputMask 
                        className='InputSectionComponent_Input' 
                        mask="99 99 99 99 99" 
                        value={valueInput}
                        name={nameInput}
                        onChange={handleInputChange}
                        placeholder={placeholderInput}
                        maskChar=" "
                        // beforeMaskedValueChange={handleInputChange}
                    >
                    </InputMask>
            }
        </div>
    )
}
