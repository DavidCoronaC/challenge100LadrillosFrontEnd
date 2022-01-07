import React, { createContext, useRef, useState } from 'react';
import { UserCount } from './UserCount/UserCount';
import './sass/styles.scss';
import { StepsComponent } from './Steps/StepsComponent';
import { UserPhone } from './UserPhone/UserPhone';
import { ModalComponent } from './Modal/ModalComponent';
import { UserData } from './UserData/UserData';
import { CreatedCountComponent } from '../../CreatedCount/CreatedCountComponent';

export const StepsApp = createContext();
const {Provider} = StepsApp;

export const RigthForm = () => {

    const openModal = useRef();
    const [stepsForm, setStepsForm] = useState('1');
    const handleOpenModal = () =>{
        openModal.current.handleOpen(stepsForm);
    }

    return (
        <Provider value={{
            stepsForm,
            setStepsForm,
            handleOpenModal
        }}>
            <div className='RigthForm_container'>
                <div className="RigthForm_component_container">
                    <div className="RigthForm_Items_container">
                        <div className='RigthForm_Intern_container'>
                            {
                                stepsForm === '1' &&
                                    <UserCount/>
                            }

                            {
                                stepsForm === '2' &&
                                    <UserPhone />
                            }
                            {
                                stepsForm === '3' &&
                                    <UserData />
                            }
                            {
                                stepsForm === '4' &&
                                    <CreatedCountComponent />
                            }
                        </div>
                    </div>
                    <StepsComponent stepNumber={stepsForm}/>
                </div>
                <ModalComponent
                    ref={openModal}
                />

            </div>
        </Provider>
    )
}
