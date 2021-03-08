import React from 'react'
import '../App.css'
import {useTranslation} from 'react-i18next'
function Footer() {
    const {t} = useTranslation()
    return (
        <footer>
            &copy; {t('Copyright 2021 API workout')}
        </footer>
    )
}

export default Footer
