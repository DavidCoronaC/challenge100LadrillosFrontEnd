import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn_HomePage } from '../SignIn/pages/SignIn_HomePage'

export const Navigations = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/*'} element={ <SignIn_HomePage/> }  />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
