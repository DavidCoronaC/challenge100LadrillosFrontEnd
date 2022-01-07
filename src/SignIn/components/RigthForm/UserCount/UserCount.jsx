import React from 'react';
import { InfoComponent } from './components/InfoComponent/InfoComponent';
import { InputSectionComponent } from './components/InputSectionComponent/InputSectionComponent';

export const UserCount = () => {
    return (
        <>
            <InfoComponent />
            <div className="">
                <InputSectionComponent />
            </div>
        </>
    )
}
