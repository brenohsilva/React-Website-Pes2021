import React from 'react'
import './confianca.css'
import Confiancaimg from '../../images/confianca.png'
import {RiHome7Fill} from 'react-icons/ri'

const Confianca = () => {
    return (
        <section id='confianca'>
            <h2>Informações </h2>
            <div className="container confianca-container">

                <div className="confianca-card">
                    <div className="confianca-image">
                        <img src={Confiancaimg} alt='confiança'/>
                    </div>
                </div>

                <div className="information-container">
                    <div className="nome-card">
                        <h2>Confiança</h2>
                    </div>
                    <article className="information-content">
                        <h3>Posição</h3>
                        <div>
                        <h3>36º</h3>
                        </div>
                        <h3>Posição Regional</h3>
                        <div>
                        <h3>9º</h3>
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
                        <h3>2</h3>
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

export default Confianca
