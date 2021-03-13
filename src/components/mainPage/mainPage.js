import React from 'react'
import './mainPage.css'
import {useTranslation} from 'react-i18next'
import i18next from '../../languages/i18n'

function MainPage() {

    const {t} = useTranslation()

    return (
        <div className='mainPage'>
            {t("hello choose route")}
        </div>
    )
}

export default MainPage
