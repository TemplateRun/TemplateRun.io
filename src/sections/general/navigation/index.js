import React from 'react'
import HeaderWrapper from "./navigation.style.js";


const Navbar = () => {

    return (
        <HeaderWrapper>
             <header id="navbar">
      <nav class="navbar-container container">
        <a href="/" class="home-link">

          <div class="navbar-logo"></div>
        TemplateRun 1234

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

export default Navbar;       
