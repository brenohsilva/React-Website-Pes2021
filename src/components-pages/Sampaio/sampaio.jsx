import React from 'react'
import './sampaio.css'
import Sampaioimg from '../../images/sampaio_correia.png'
import {RiHome7Fill} from 'react-icons/ri'

const Sampaio = () => {
    return (
        <section id='sampaio'>
            <h2>Informações </h2>
            <div className="container sampaio-container">

                <div className="sampaio-card">
                    <div className="sampaio-image">
                        <img src={Sampaioimg} alt='Sampaio Correa'/>
                    </div>
                </div>

                <div className="information-container">
                    <div className="nome-card">
                        <h2>Sampaio Correa</h2>
                    </div>
                    <article className="information-content">
                        <h3>Posição</h3>
                        <div>
                        <h3>37º</h3>
                        </div>
                        <h3>Posição Regional</h3>
                        <div>
                        <h3>10º</h3>
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
                        <h3>0</h3>
                        </div>
                        <h3>Participações na Libertadores</h3>
                        <div>
                        <h3>0</h3>
                        </div>
                        <h3>Participaçoes na Serie B</h3>
                        <div>
                        <h3>10</h3>
                        </div>
                        <h3>Rebaixamentos</h3>
                        <div>
                        <h3>0</h3>
                        </div>
                        <h3>Subidas</h3>
                        <div>
                        <h3>0</h3>
                        </div>
                        <h3>Participações na Serie C</h3>
                        <div>
                        <h3>3</h3>
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

export default Sampaio
