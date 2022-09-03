import React from 'react';

import { BsInstagram, BsLinkedin, BsGithub, BsTranslate } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

import PerfilFoto from '../../images/eu.jpg'

import './indexPT.css';
import uploadedFileLink from '../../files/Curriculum_Gustavo.pdf';


const landingPagePT = () => {
  return (
    <div>
      <nav className="app__navbar">

        <div className="app__navbar-center">
          <div className="navbar__perfil">

            <div className="navbar__perfil-img">
              <img src={PerfilFoto} alt={"Foto de Perfil de Gustavo Acacio"}/>
            </div>

            <div className="navbar__perfil-name-2">
              <a href="/"><h2>Gustavo Acacio</h2></a>
            </div>

          </div>
          <div className="navbar__portfolio">
            <a href="/portfolioPT"><h2>Portfolio</h2></a>
          </div>
          <ul className="nav__socials">
            <li><a href="https://www.facebook.com/gustavo.ferreira.520125/" ><FaFacebookF className="social__facebook" /></a></li>
            <li><a href="https://www.instagram.com/acaciogx/" ><BsInstagram className="social__instagram" /></a></li>
            <li><a href="https://github.com/GustavoAcacioDev"><BsGithub className="social__github" /></a></li>
            <li><a href="https://www.linkedin.com/in/gustavo-acacio/"><BsLinkedin className="social__linkedin" /></a></li>
            <li><a href="/"><BsTranslate className="nav_translation" /></a></li>
          </ul>

        </div>
      </nav>
      <section className="app__section">
        <div className="app__section-one">
          <h4>Gustavo Acacio</h4>
          <p>Um desenvolvedor fullstack freelance.</p>
          <p>Morando em São Paulo - Brasil</p>
          <p>Buscando uma primeira oportunidade profissional.</p>
          <a href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download>
            <button>
              Baixar Curriculum
            </button>
          </a>
        </div>
        <div className="app__section-two">
          <div className="app__section-two-box">
            <div>
              <h4>Vamos trabalhar juntos!</h4>
              <p className="color-p">Disponível em</p>
              <span>gustavoacacio22@gmail.com</span>
              <p className="color-p">+55 (11)99123-9008</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default landingPagePT;


