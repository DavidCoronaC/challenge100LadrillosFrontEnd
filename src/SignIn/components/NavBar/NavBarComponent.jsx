import React from 'react';
import logo from '../../../assets/logoPrincipal.svg';
import logoMobile from '../../../assets/logoMobile.svg';
import hamburgerMenu from '../../../assets/hamburgerMenu.svg';
import useWindowDimensions from '../../hooks/useWindowDimension';
import './sass/styles.scss';

export const NavBarComponent = () => {

    const { width } = useWindowDimensions();

    return (
        <nav className='c-navbar'>
            {
                Number(width) > 520 &&
                <>
                    <div className='c-navbar-c-icoLogo'>
                        <img className='c-navbar-icoLogo' src={logo} alt=""/>
                    </div>
                    <div className='c-navbar-c-buttons'>
                        <button className="c-navbar-buttons" style={{width: '12vw'}}> <span className='Ver-detalle'>Cómo funciona</span></button>
                        <button className="c-navbar-buttons" style={{width: '10vw'}}><span className="Ver-detalle">Entrar</span></button>
                    </div>
                </>
            }
            {
                Number(width) < 520 &&
                <>
                    <div className='c-navbar-c-icoLogo'>
                        <img className='c-navbar-icoLogo' src={hamburgerMenu} alt=""/>
                        <img className='c-navbar-icoLogo' src={logoMobile} alt=""/>
                    </div>
                </>
            }
        </nav>
    )
}
