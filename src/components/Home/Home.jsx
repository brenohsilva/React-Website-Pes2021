import React from 'react'   /* ISSO É UM COMPONETE PRINCIPAL CRIADO DO REACT */
import Header from '../header/Header'
import Nav from '../nav/Nav'
import Menu from '../menu/Menu'
import Champion from '../champion/Champion'
import Libertadores from '../libertadores/Libertadores'
import Downgrade from '../downgrade/Downgrade'
import Players from '../data players/Players'
import Footer from '../footer/Footer'

const Home = () => {
    return (
        <div>
            <Header/>
            <Menu />
            <Nav />
            <Champion />
            <Libertadores />
            <Downgrade />
            <Players />
            <Footer />

        </div>
    )
}

export default Home;
