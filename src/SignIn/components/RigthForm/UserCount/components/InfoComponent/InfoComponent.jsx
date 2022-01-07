import React from 'react';
import './styles.scss';

export const InfoComponent = () => {
    return (
        <div className="InfoComponent">
            <h3 className='InfoComponent_Title'>Crear tu cuenta</h3>
            <p className="InfoComponent_text">
                Al aceptar crear una cuenta en 100 Ladrillos aceptas nuestro
                <span className="InfoComponent_text-style_element"> Aviso de Privacidad, Derechos Arco </span>
                y nuestros
                <span className="InfoComponent_text-style_element"> Términos y Condiciones </span>.
            </p>
        </div>
    )
}
