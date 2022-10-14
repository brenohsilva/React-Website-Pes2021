import React from 'react'   /* ISSO É UM COMPONETE PRINCIPAL CRIADO DO REACT */
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Fluminense from './components-pages/Fluminense'
import Atleticomg from './components-pages/AtleticoMG/atleticomg'
import Flamengo from './components-pages/Flamengo/flamengo'
import Corinthians from './components-pages/Corinthians/corinthians'
import SaoPaulo from './components-pages/SaoPaulo/saopaulo'
import Gremio from './components-pages/Gremio/gremio'
import Palmeiras from './components-pages/Palmeiras/palmeiras'
import AtleticoPR from './components-pages/AtleticoPR/atleticopr'
import Internacional from './components-pages/Internacional/internacional'
import Santos from './components-pages/Santos/santos'
import Bragantino from './components-pages/Bragantino/bragantino'
import Cruzeiro from './components-pages/Cruzeiro/cruzeiro'
import Vasco from './components-pages/Vasco/vasco'
import Bahia from './components-pages/Bahia/bahia'
import Botafogo from './components-pages/Botafogo/botafogo'
import BrasilPelotas from './components-pages/BrasilPelotas/brasilpelotas'
import Coritiba from './components-pages/Coritiba/coritiba'
import Goias from './components-pages/Goias/goias'
import Parana from './components-pages/Parana/parana'
import PontePreta from './components-pages/PontePreta/pontepreta'
import Chapecoense from './components-pages/Chapecoense/chapecoense'
import Fortaleza from './components-pages/Fortaleza/fortaleza'
import Ceara from './components-pages/Ceara/ceara'
import Figueirense from './components-pages/Figueirense/figueirense'
import Oeste from './components-pages/Oeste/oeste'
import Juventude from './components-pages/Juventude/juventude'
import BotafogoSP from './components-pages/BotafogoSP/botafogosp'
import Vitoria from './components-pages/Vitoria/vitoria'
import Cuiaba from './components-pages/Cuiaba/cuiaba'
import Nautico from './components-pages/Nautico/nautico'
import AtleticoGO from './components-pages/AtleticoGO/atleticogo'
import Avai from './components-pages/Avai/avai'
import CSA from './components-pages/CSA/csa'
import Sampaio from './components-pages/Sampaio/sampaio'
import Guarani from './components-pages/Guarani/guarani'
import CRB from './components-pages/CRB/crb'
import Confianca from './components-pages/Confianca/confianca'
import Operario from './components-pages/Operario/operario'
import AmericaMG from './components-pages/AmericaMG/americamg'
import Sport from './components-pages/Sport/sport'




const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path='/fluminense' element={ <Fluminense/>} />
      <Route path='/atleticomg' element={ <Atleticomg/>} />
      <Route path='/flamengo' element={ <Flamengo/>} />
      <Route path='/corinthians' element={ <Corinthians/>} />
      <Route path='/saopaulo' element={ <SaoPaulo/>} />
      <Route path='/gremio' element={ <Gremio/>} />
      <Route path='/palmeiras' element={ <Palmeiras/>} />
      <Route path='/atleticopr' element={ <AtleticoPR/>} />
      <Route path='/internacional' element={ <Internacional/>} />
      <Route path='/santos' element={ <Santos/>} />
      <Route path='/bragantino' element={ <Bragantino/>} />
      <Route path='/cruzeiro' element={ <Cruzeiro/>} />
      <Route path='/vasco' element={ <Vasco/>} />
      <Route path='/sport' element={ <Sport/>} />
      <Route path='/bahia' element={ <Bahia/>} />
      <Route path='/botafogo' element={ <Botafogo/>} />
      <Route path='/brasilpelotas' element={ <BrasilPelotas/>} />
      <Route path='/coritiba' element={ <Coritiba/>} />
      <Route path='/goias' element={ <Goias/>} />
      <Route path='/parana' element={ <Parana/>} />
      <Route path='/pontepreta' element={ <PontePreta/>} />
      <Route path='/chapecoense' element={ <Chapecoense/>} />
      <Route path='/fortaleza' element={ <Fortaleza/>} />
      <Route path='/ceara' element={ <Ceara/>} />
      <Route path='/figueirense' element={ <Figueirense/>} />
      <Route path='/oeste' element={ <Oeste/>} />
      <Route path='/juventude' element={ <Juventude/>} />
      <Route path='/botafogosp' element={ <BotafogoSP/>} />
      <Route path='/vitoria' element={ <Vitoria/>} />
      <Route path='/cuiaba' element={ <Cuiaba/>} />
      <Route path='/nautico' element={ <Nautico/>} />
      <Route path='/atleticogo' element={ <AtleticoGO/>} />
      <Route path='/avai' element={ <Avai/>} />
      <Route path='/csa' element={ <CSA/>} />
      <Route path='/sampaio' element={ <Sampaio/>} />
      <Route path='/guarani' element={ <Guarani/>} />
      <Route path='/crb' element={ <CRB/>} />
      <Route path='/confianca' element={ <Confianca/>} />
      <Route path='/operario' element={ <Operario/>} />
      <Route path='/americamg' element={ <AmericaMG/>} />

    </Routes>
    </>
  )
}

export default App