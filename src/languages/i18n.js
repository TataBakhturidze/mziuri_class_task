import i18next from 'i18next';
import {initReactI18next} from 'react-i18next'


i18next
.use(initReactI18next)
.init({
    
    resources :{
        en: {
            translation:{
                title: 'Welcome'
            }
        },
        ka: {
            translation:{
                title:'მოგესალმებით',
            }
        },
    },
    debug: false,
    interpolation:{
        escape: false,

    },
    react:{
        wait:true,
    },
    lng:'en'
})

export default i18next