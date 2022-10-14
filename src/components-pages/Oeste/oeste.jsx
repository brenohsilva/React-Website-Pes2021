import React from 'react'
import './oeste.css'
import Oesteimg from '../../images/oeste.png'
import {RiHome7Fill} from 'react-icons/ri'

const Oeste = () => {
    return (
        <section id='oeste'>
            <h2>Informações </h2>
            <div className="container oeste-container">

                <div className="oeste-card">
                    <div className="oeste-image">
                        <img src={Oesteimg} alt='Oeste'/>
                    </div>
                </div>

                <div className="information-container">
                    <div className="nome-card">
                        <h2>Oeste</h2>
                    </div>
                    <article className="information-content">
                        <h3>Posição</h3>
                        <div>
                        <h3>28º</h3>
                        </div>
                        <h3>Posição Regional</h3>
                        <div>
                        <h3>7º</h3>
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

                <div>
                    <article className='information-card'>
                        <h3>Participações na Serie A</h3>
                        <div>
                        <h3>2</h3>
                        </div>
                        <h3>Participações na Libertadores</h3>
                        <div>
                        <h3>0</h3>
                        </div>
                        <h3>Participaçoes na Serie B</h3>
                        <div>
                        <h3>7</h3>
                        </div>
                        <h3>Rebaixamentos</h3>
                        <div>
                        <h3>1</h3>
                        </div>
                        <h3>Subidas</h3>
                        <div>
                        <h3>1</h3>
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

export default Oeste
