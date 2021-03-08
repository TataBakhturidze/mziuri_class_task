import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import {useTranslation} from 'react-i18next'
import i18next from '../../languages/i18n'

function Nav() {
    const {t} = useTranslation()
    const changeLanguage = () =>{
        i18next.changeLanguage(i18next.language == "en" ? "ka"  : "en")
      }
    return (
        <nav>
            <ol>
            <button onClick={()=> changeLanguage()}>{i18next.language == "en" ? "ka"  : "en" }</button>
                <li>
                    <Link to="/users">{t('users')}</Link>
                </li>
                <li>
                    <Link to="/posts">{t('posts')}</Link>
                </li>
                <li>
                    <Link to="/comments">{t('comments')}</Link>
                </li>
                <li>
                    <Link to="/todos">{t('todos')}</Link>
                </li>
                <li>
                    <Link to="/categories">{t('categories')}</Link>
                </li>
                <li>
                    <Link to="/products">{t('products')}</Link>
                </li>
            </ol>
        </nav>
    )
}

export default Nav
