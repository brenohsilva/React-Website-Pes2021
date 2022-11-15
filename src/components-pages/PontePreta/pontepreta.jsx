import React from 'react'
import './pontepreta.css'
import Ponteimg from '../../images/ponte_preta.png'
import {RiHome7Fill} from 'react-icons/ri'

const PontePreta = () => {
    return (
        <section id='ponte'>
            <h2>Informações </h2>
            <div className="container ponte-container">

                <div className="ponte-card">
                    <div className="ponte-image">
                        <img src={Ponteimg} alt='Ponte Preta'/>
                    </div>
                </div>

                <div className="information-container">
                    <div className="nome-card">
                        <h2>Ponte Preta</h2>
                    </div>
                    <article className="information-content">
                        <h3>Posição</h3>
                        <div>
                        <h3>23º</h3>
                        </div>
                        <h3>Posição Regional</h3>
                        <div>
                        <h3>6º</h3>
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
                        <h3>4</h3>
                        </div>
                        <h3>Participações na Libertadores</h3>
                        <div>
                        <h3>0</h3>
                        </div>
                        <h3>Participaçoes na Serie B</h3>
                        <div>
                        <h3>6</h3>
                        </div>
                        <h3>Rebaixamentos</h3>
                        <div>
                        <h3>3</h3>
                        </div>
                        <h3>Subidas</h3>
                        <div>
                        <h3>3</h3>
                        </div>
                        <h3>Participações na Serie C</h3>
                        <div>
                        <h3>1</h3>
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

export default PontePreta
