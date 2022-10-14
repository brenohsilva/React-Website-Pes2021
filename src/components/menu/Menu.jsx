import React from 'react'
import './menu.css'
import {RiHome7Fill} from 'react-icons/ri'
import {BsSegmentedNav} from 'react-icons/bs'
import {GiChampions} from 'react-icons/gi'
import {GiTrophyCup} from 'react-icons/gi'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {GiBabyfootPlayers} from 'react-icons/gi'
import {useState} from 'react'

/* pesquisar sobre esse active depois */

const Menu = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHome7Fill/></a>
      <a href="#nav" onClick={() => setActiveNav('#nav')} className={activeNav === '#nav' ? 'active' : ''}><BsSegmentedNav/></a>
      <a href="#champion" onClick={() => setActiveNav('#champion')} className={activeNav === '#champion' ? 'active' : ''} ><GiChampions/></a>
      <a href="#libertadores" onClick={() => setActiveNav('#libertadores')} className={activeNav === '#libertadores' ? 'active' : ''}><GiTrophyCup/></a>
      <a href="#downgrade" onClick={() => setActiveNav('#downgrade')} className={activeNav === '#downgrade' ? 'active' : ''} ><AiOutlineCaretDown/></a>
      <a href="#Players" onClick={() => setActiveNav('#Players')} className={activeNav === '#Players' ? 'active' : ''} ><GiBabyfootPlayers/></a>
    </nav>
  )
}

export default Menu