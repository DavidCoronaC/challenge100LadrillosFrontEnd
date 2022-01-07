import React from 'react';
import logoFacebok from '../../../../../../assets/logoFacebok.png';
import logoGoogle from '../../../../../../assets/logoGoogle.png';
import logoWindows from '../../../../../../assets/logoWindows.png';
import './styles.scss';


export const LoginOptionsComponent = () => {

    let arraySocial = [
        {id:'1A', imgItem:logoFacebok},
        {id:'2B', imgItem:logoGoogle},
        {id:'3C', imgItem:logoWindows},
    ]

    return (
        <div className='LoginOptionsComponent_container'>
            <div className="LoginOptionsComponent_title_container">
                <div className="LoginOptionsComponent_line"></div>
                    <span className='LoginOptionsComponent_text'>o regístrate con:</span>
                <div className="LoginOptionsComponent_line"></div>
            </div>
            <div className="LoginOptionsComponent_socialItems_container">
                {
                    arraySocial.map(target=> (
                        <div key={target.id} className="LoginOptionsComponent_socialImg_container">
                            <img className='LoginOptionsComponent_socialImg' src={target.imgItem} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
