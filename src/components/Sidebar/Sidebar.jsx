import './sidebar.scss';

import { SideBarLink } from '../Sidebarlink/Sidebarlink';

import LogoIcon from '../../Assets/logo.svg';
import OverviewIcon from '../../Assets/1. overview.svg';
import TicketsIcon from '../../Assets/2. tickets.svg';
import ArticlesIcon from '../../Assets/6. articles.svg';
import CommentsIcon from '../../Assets/4. contacts.svg';
import SettingsIcon from '../../Assets/a_1. settings.svg';
import SubscriptionIcon from '../../Assets/a_2. subscription.svg';
import { useTranslation } from 'react-i18next';


export function Sidebar() {
  const { t } = useTranslation();
    return (
        <div className='sidebar'>
              <div className="sidebar__header">
                   <img src={LogoIcon} alt="logo"  />
                   <h3>Dashboard Kit</h3>
              </div>
              <ul className="sidebar__menu">
                <li>
                 <SideBarLink
                  imgLink={OverviewIcon}
                  title={t('sidebar.overview')}
                  link='./'
                 />
                 </li>
                 <li>
                 <SideBarLink
                  imgLink={TicketsIcon}
                  title={t('sidebar.tickets')}
                  link='./tickets'
                 />
                 </li>
                 <li>
                 <SideBarLink
                  imgLink={ArticlesIcon}
                  title={t('sidebar.posts')}
                  link='./post'
                 />
                 </li>
                 <li>
                 <SideBarLink
                  imgLink={CommentsIcon}
                  title={t('sidebar.comments')}
                  link='./comments'
                 />
                 </li>
              </ul>
              <ul className="sidebar__footer">
                 <li>
                   <SideBarLink
                   imgLink={SettingsIcon}
                   title={t('sidebar.settings')}
                   link='./settings'
                   />
                 </li>
                 <li>
                 <SideBarLink
                   imgLink={SubscriptionIcon}
                   title={t('sidebar.subscription')}
                   link='./subscription'
                   />
                 </li>
              </ul>
        </div>
    )
}