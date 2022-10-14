import React from 'react'
import './goias.css'
import Goiasimg from '../../images/goias.png'
import {RiHome7Fill} from 'react-icons/ri'

const Goias = () => {
    return (
        <section id='goias'>
            <h2>Informações </h2>
            <div className="container goias-container">

                <div className="goias-card">
                    <div className="goias-image">
                        <img src={Goiasimg} alt='Goias'/>
                    </div>
                </div>

                <div className="information-container">
                    <div className="nome-card">
                        <h2>Goias</h2>
                    </div>
                    <article className="information-content">
                        <h3>Posição</h3>
                        <div>
                        <h3>20º</h3>
                        </div>
                        <h3>Posição Regional</h3>
                        <div>
                        <h3>1º</h3>
                        </div>
                    </article>
                </div>

                <div className="information-wins">
                    <article className='information-card'>
                        <h3>Brasileirao Serie A</h3>
                        <h3>0</h3>
                        <h3>Libertadores</h3>
                        <h3>0</h3>
                        <h3>Mundial</h3>
                        <h3>0</h3>
                        <h3>Copa do Brasil</h3>
                        <h3>0</h3>
                        <h3>Brasileirao Serie B</h3>
                        <h3>0</h3>
                    </article>
                </div>

                <div className="information-mobile">
                    <article className='information-card'>
                        <h3>Participações na Serie A</h3>
                        <div>
                        <h3>5</h3>
                        </div>
                        <h3>Participações na Libertadores</h3>
                        <div>
                        <h3>0</h3>
                        </div>
                        <h3>Participaçoes na Serie B</h3>
                        <div>
                        <h3>4</h3>
                        </div>
                        <h3>Rebaixamentos</h3>
                        <div>
                        <h3>2</h3>
                        </div>
                        <h3>Subidas</h3>
                        <div>
                        <h3>2</h3>
                        </div>
                        <h3>Participações na Serie C</h3>
                        <div>
                        <h3>0</h3>
                        </div>
                    </article>
                </div>
            </div>

            <nav>
                <a href="/"><RiHome7Fill className='menu-icon'/></a>
            </nav>

        </section>
    )


}

export default Goias
