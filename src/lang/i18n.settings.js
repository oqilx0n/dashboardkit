import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector)
.use(initReactgit )
.init({
    fallbackLng: 'en',
    resources:{
        en:{
            translation:{
              sidebar: {
                  overview:'Overview',
                  tickets:'Tickets',
                  posts: 'Posts',
                  comments: 'Comments',
                  settings:'Settings',
                  subscription: 'Subscription',
                  },    
            }
        },
        uz:{
            translation:{
                sidebar: {
                    overview:'Umumiy',
                    tickets:'Chiptalar',
                    posts: 'Maqolalar',
                    comments:'Izohlar',
                    settings: 'Sozlamalar',
                    subscription:'Obuna'
                }
          }
        },
        ru:{
            translation:{
                sidebar: {
                   overview:'Общие',
                   tickets:'Билеты',
                   posts:'Посты',
                   comments: 'Комменты',
                   settings:'Настройки',
                   subscription:'Подписки'
               }
            }
        }
        }
    
})
