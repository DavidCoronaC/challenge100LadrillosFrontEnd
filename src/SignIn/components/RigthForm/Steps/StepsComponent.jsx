import React from 'react';
import stepInActive from '../../../../assets/stepInActive.svg';
import stepActive from '../../../../assets/stepActive.svg';
import './styles.scss';

export const StepsComponent = ({stepNumber}) => {
    
    let steps = {
        '1': 'userCount',
        '2': 'userPhone',
        '3': 'userInfo',
        '4': 'userCreateCount',
    }

    return (
        <div className='StepsComponent_Container'>
            <div className="StepsComponent_Steps_Container">
                {
                    Object.keys(steps).map((target) =>(
                        <img className='StepsComponent_img' key={target} src={target === stepNumber ? stepActive : stepInActive} alt="" />
                    ))
                }
            </div>
        </div>
    )
}
