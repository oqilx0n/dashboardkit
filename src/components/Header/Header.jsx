import './header.scss';

import SearchIcon from '../../Assets/Icons/search.svg';
import NotifIcon from '../../Assets/Icons/new.svg';
import { useTranslation } from 'react-i18next';



export function Header() {
    const {i18n} = useTranslation();
    const defaultValue = window.localStorage.getItem('i18nextLng')
    const handleChangeLanguage = (e)=>{
        i18n.changeLanguage(e.target.value)
    }


    return (
        <div className='header'>
            <h3 className='Header__title'>Overview</h3>
            <div className='header__right'>
                <div className="header__icons">
                   <img src={SearchIcon} alt="searchicon" />
                   <img src={NotifIcon} alt="notif" />
                   <select className='lang-select' onChange={handleChangeLanguage} value={defaultValue}>
                    <option value="en">Eng</option>
                    <option value="ru-RU">Рус</option>
                    <option value="uz">Uzb</option>
                   </select>
                </div>
                <div className="header__profile">
                  <h3>Jones Ferdinand</h3>
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profilepic" />
                </div>
            </div>
        </div>
    )
}