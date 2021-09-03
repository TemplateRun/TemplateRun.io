import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import HeaderWrapper from "./navigation.style";
import TRLOG from "../assets/images/TR LOGO new.png";


const Navbar = () => {

    return (
        <HeaderWrapper>
             <header id="navbar">
      <nav class="navbar-container container">
        <a href="/" class="home-link">
          <div class="navbar-logo"><img src={TRLOG}></img></div>
         TemplateRun
        </a>
        <button type="button" class="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu" aria-expanded="false">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div id="navbar-menu">
          <ul class="navbar-links">
            <li class="navbar-item"><a class="navbar-link" href="/about">About</a></li>
            <li class="navbar-item"><a class="navbar-link" href="/blog">Blog</a></li>
            <li class="navbar-item"><a class="navbar-link" href="/careers">Careers</a></li>
            <li class="navbar-item"><a class="navbar-link" href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
        </HeaderWrapper>
    )
}

export default Navbar