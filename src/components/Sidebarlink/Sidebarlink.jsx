import './sidebarlink.scss'

import {NavLink} from 'react-router-dom';


export function SideBarLink({imgLink, title, link}){
    return (
       <NavLink className={({isActive})=> `sidebar-link ${isActive ? 'active' : ''}`} to={link}>
        <img src={imgLink} alt={title} />
        <h4>{title}</h4>
       </NavLink>
    )
}