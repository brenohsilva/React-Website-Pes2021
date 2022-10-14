import React from 'react'
import './libertadores.css'
import Fluminense from '../../images/fluminense.png'
import AtleticoMG from '../../images/atletico_mineiro.png'
import Flamengo from '../../images/flamengo.png'
import Santos from '../../images/santos.png'
import Palmeiras from '../../images/palmeiras.png'
import CAP from '../../images/CAP.png'
import SaoPaulo from '../../images/sao_paulo.png'
import Internacional from '../../images/internacional.png'
import Bragantino from '../../images/bragantino.png'
import Cruzeiro from '../../images/cruzeiro.png'
import Gremio from '../../images/gremio.png'

const Libertadores = () => {
  return (
    <section id='libertadores'>
      <h2>Libertadores</h2>
      <div className="container libertadores">
        
        <div className="libertadores-content">
          <div className="libertadores-content-caixa">

            <article className="libertadores__card">
              <div className="libertadores-image">
                <img src={Fluminense} alt='Fluminense' />
              </div>
            </article>

            <article className="libertadores__card">
              <div className="libertadores-image">
                <img src={Internacional} alt='Internacional' />
              </div>
            </article>

            <article className="libertadores__card">
              <div className="libertadores-image">
                <img src={Bragantino} alt='Bragantino' />
              </div>
            </article>

            <article className="libertadores__card">
              <div className="libertadores-image">
                <img src={AtleticoMG} alt='Atletico-MG' />
              </div>
            </article>
        
            <article className="libertadores__card">
              <div className="libertadores-image">
                <img src={Flamengo} alt='Flamengo' />
              </div>
            </article>

            <article className="libertadores__card">
              <div className="libertadores-image">
                <img src={Palmeiras} alt='Palmeiras' />
              </div>
            </article>

            <article className="libertadores__card">
              <div className="libertadores-image">
                <img src={SaoPaulo} alt='Sao Paulo' />
              </div>
            </article>

            <article className="libertadores__card">
              <div className="libertadores-image">
                <img src={Cruzeiro} alt='Cruzeiro' />
              </div>
            </article>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Libertadores