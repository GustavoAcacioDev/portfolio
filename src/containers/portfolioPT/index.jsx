import React from 'react'

import "./indexPT.css"

/*Icons*/
import { BsInstagram, BsLinkedin, BsGithub, BsTranslate } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

import PerfilFoto from '../../images/eu.jpg'


const portfolioPagePT = () => {
  return (
    <div>
      <nav className="app__navbar">

        <div className="app__navbar-center">
          <div className="navbar__perfil">

            <div className="navbar__perfil-img">
              <img src={PerfilFoto} alt={"Foto de perfil de Gustavo Acacio"} />
            </div>

            <div className="navbar__perfil-name-2">
              <a href="/"><h2>Gustavo Acacio</h2></a>
            </div>

          </div>
          <div className="navbar__portfolio-2">
            <a href="/PT">Home</a>
          </div>
          <ul className="nav__socials">
            <li><a href="https://www.facebook.com/gustavo.ferreira.520125/" ><FaFacebookF className="social__facebook" /></a></li>
            <li><a href="https://www.instagram.com/acaciogx/" ><BsInstagram className="social__instagram" /></a></li>
            <li><a href="https://github.com/GustavoAcacioDev"><BsGithub className="social__github" /></a></li>
            <li><a href="https://www.linkedin.com/in/gustavo-acacio/"><BsLinkedin className="social__linkedin" /></a></li>
            <li><a href="/portfolio"><BsTranslate className="nav_translation"/></a></li>
          </ul>

        </div>
      </nav>
      <section className="app__section-portfolio">
        <div className="app__section-portfolio-title">
          <h1>Meus Projetos</h1>
        </div>
        <div className="app__section-portfolio-content">
          <div className="app__section-portfolio-contents">
            <h1>Em Implementação!</h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default portfolioPagePT
