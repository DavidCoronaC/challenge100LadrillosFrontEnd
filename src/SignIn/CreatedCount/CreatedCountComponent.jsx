import React from 'react'
import { useSelector } from 'react-redux'
import okIco from '../../assets/ok.svg';
import './styles.scss';

export const CreatedCountComponent = () => {

    const userData = useSelector(state => state.formReducer.userData)
    const userCount = useSelector(state => state.formReducer.userCount)
    const userPhone = useSelector(state => state.formReducer.userPhone)

    return (
        <div className='CreatedCountComponent_Container'>
            <h3 className='CreatedCountComponent_Title'>Cuenta creada</h3>
            <img className='CreatedCountComponent_img' src={okIco} alt="" />
            <h3 className='CreatedCountComponent_createdCount'>Haz creado una cuenta</h3>
            <span className='CreatedCountComponent_number_Client'>Tu número de cliente es: {`${'000001'}`}</span>

            <span className='CreatedCountComponent_userInfo_Name'>{`${userData && userData.firstName} ${userData &&userData.secondName} ${userData &&userData.firstLastName }  ${userData &&userData.secondLastName}`  }</span>
            <span className='CreatedCountComponent_userInfo_mail'>{userCount.email}</span>
            <span className='CreatedCountComponent_userInfo_Phone'>{userPhone}</span>
        </div>
    )
}
