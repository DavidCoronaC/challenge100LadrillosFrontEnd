import React from 'react';
import { NavBarComponent } from '../components/NavBar/NavBarComponent';
import imgLeft from '../../assets/imgLeft.jpg';
import './sass/styles.scss';
import { RigthForm } from '../components/RigthForm/RigthForm';
import { LeftContainer } from '../components/LeftContainer/LeftContainer';
import useWindowDimensions from '../hooks/useWindowDimension';

export const SignIn_HomePage = () => {

    const { width } = useWindowDimensions();

    return (
        <div className='SignIn_HomePage_container'>
            <NavBarComponent />
            {
                Number(width) >= 520 &&
                <LeftContainer/>
            }
            <RigthForm />
        </div>
    )
}
