import React from 'react'
import './footer.css'
import {SiLinkedin} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {FaYoutube} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'> WEB BRASILEIRAO</a>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#nav">Times</a></li>
            <li><a href="#champion">Campeão</a></li>
            <li><a href="#libertadores">Libertadores</a></li>
            <li><a href="#downgrade">Promoções</a></li>
            <li><a href="#Playes">Destaques</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://youtube.com"> <FaYoutube/></a>
            <a href="https://github.com"> <BsGithub/></a>
            <a href="https://linkedin.com"> <SiLinkedin/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Breno Silva. All rights reserver.</small>
        </div>
    </footer>
  )
}

export default Footer