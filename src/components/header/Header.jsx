import React from 'react'
import './header.css'
import brasil from '../../images/brasileirao.png'

/* esse 'header__container'e 'brasil' é uma nova classe criada no css desse componente e o 'container' é do index.css geral */

const Header = () => {
  return (
    <header> 
      <div className="container header__container">
        <h5> PES 2021 </h5>
        <h1>Web Brasileirao</h1>
        <h5 className="text-light"> Oitava Temporada </h5>
        <div className="brasil">
          <img src={brasil} alt="brasil" />
        </div>
        
        </div>   
    </header>
  )
}

export default Header