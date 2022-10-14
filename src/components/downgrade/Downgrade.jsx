import React from 'react'
import './downgrade.css'

import Fortaleza from '../../images/fortaleza.png'
import Oeste from '../../images/oeste.png'
import Ceara from '../../images/ceara.png'
import Corinthians from '../../images/corinthians.png'
import Cap from '../../images/CAP.png'
import Vitoria from '../../images/vitoria.png'
import PontePreta from '../../images/ponte_preta.png'

import BrasilPelotas from '../../images/brasil_de_pelotas.png'
import Botafogo from '../../images/botafogo.png'
import AmericaMG from '../../images/america_mineiro.png'
import Chapecoense from '../../images/chapecoense.png'
import BotafogoSP from '../../images/botafogo_ribeirao.png'
import Coritiba from '../../images/coritiba.png'





const Downgrade = () => {
  return (
    <section id='downgrade'>
      <h2>Promovidos e Rebaixados</h2>
      <div className="container downgrade">
        <div className="rebaixados">
          <div className='downgrade-names'>
            <h3>Rebaixados</h3>
          </div>
          <div className="downgrade_content">
            <article className='downgrade_details'>
              <div className="downgrade_image">
                <img src={Corinthians} alt="Corinthians" />
              </div>
              <div> 
                <h4>Corinthians</h4>
              </div>
            </article>
            <article className='downgrade_details'>
              <div className="downgrade_image">
                <img src={Cap} alt="Cap" />
              </div>
              <div>
                <h4>Athletico-PR</h4>
              </div>
            </article>
            <article className='downgrade_details'>
              <div className="downgrade_image">
                <img src={Vitoria} alt="Vitoria" />
              </div>
              <div className='downgrade-names'>
                <h4>Vitoria</h4>
              </div>
            </article>
            <article className='downgrade_details'>
              <div className="downgrade_image">
                <img src={PontePreta} alt="Ponte Preta" />
              </div>
              <div>
                <h4>Ponte Preta</h4>
              </div>
            </article>
          </div>

        </div>
        
        <div className="promovidos">
        <div>
            <h3>Promovidos</h3>
        </div>
          <div className="downgrade_content">
            <article className='downgrade_details'>
              <div className="downgrade_image">
                <img src={AmericaMG} alt="America-MG" />
              </div>
              <div> 
                <h4>America-MG</h4>
              </div>
            </article>
            <article className='downgrade_details'>
              <div className="downgrade_image">
                <img src={Chapecoense} alt="Chapecoense" />
              </div>
              <div>
                <h4>Chapecoense</h4>
              </div>
            </article>
            <article className='downgrade_details'>
              <div className="downgrade_image">
                <img src={BotafogoSP} alt="BotafogoSP" />
              </div>
              <div className='downgrade-names'>
                <h4>Botafogo-SP</h4>
              </div>
            </article>
            <article className='downgrade_details'>
              <div className="downgrade_image">
                <img src={Coritiba} alt="Coritiba" />
              </div>
              <div>
                <h4>Coritiba</h4>
              </div>
            </article>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Downgrade