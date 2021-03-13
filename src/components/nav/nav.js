import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import {useTranslation} from 'react-i18next'
import i18next from '../../languages/i18n'

function Nav() {
    const {t} = useTranslation()

    const changeLanguage = () =>{
        if(localStorage.getItem('language') == 'en'){
            localStorage.setItem('language', 'ka')
            i18next.changeLanguage('ka')
        }else if(localStorage.getItem('language') == 'ka'){
            localStorage.setItem('language', 'en')
            i18next.changeLanguage('en')
      }
    }


      useEffect(() => {
        localStorage.getItem('language') == 'en' ? i18next.changeLanguage('en'): i18next.changeLanguage('ka')
      }, [])


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