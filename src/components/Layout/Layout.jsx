import './layout.scss';

import {Outlet} from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';




export function Layout({children}){
    return (
        <div className='body'>
            
               <Sidebar />
            <div className='righ-content'> 
              <Header />
              <div>
                <Outlet/> 
              </div>
            </div>
        </div>
    )
}