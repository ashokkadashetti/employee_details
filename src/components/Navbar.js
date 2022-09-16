import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import {AiOutlineBars, AiOutlineClose} from 'react-icons/ai'
import {SidebarData} from './SidebarData'

 const  Navbar = () =>  {

  return (
    <>
      <div className='navbar'>
        <h1 className='heading'>SoftSuave Technologies</h1>
      </div>
      <nav className='nav-menu active'>
        <div className='nav-menu-items'>
            {
                SidebarData.map(item => {
                    return(
                        <div key={item.id} className='nav-text'>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
