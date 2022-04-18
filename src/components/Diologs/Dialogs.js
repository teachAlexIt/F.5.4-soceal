import React from 'react'
import './dialogs.css'
import Massages from './Massages/Massages';
import {NavLink} from 'react-router-dom';
function Dialogs() {
  return (
    <div className='dialogs'>
      <div className='dialogs__list'>
        <NavLink to='/'> Alex</NavLink>
        <NavLink to='/'> Leonid</NavLink>
        <NavLink to='/'> Andrew</NavLink>
      </div>
      <Massages />
    </div>
  )
}

export default Dialogs;