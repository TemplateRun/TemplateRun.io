import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'gatsby';


const HeaderWrapper = styled.section`
:root {
    --navbar-bg-color: hsl(0, 0%, 15%);
    --navbar-text-color: hsl(0, 0%, 85%);
    --navbar-text-color-focus: white;
    --navbar-bg-contrast: hsl(0, 0%, 25%);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
}

.container {
    max-width: 1000px;
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    margin-left: auto;
    margin-right: auto;
}

#navbar {
    --navbar-height: 64px;
    position: fixed;
    height: var(--navbar-height);
    background-color: var(--navbar-bg-color);
    left: 0;
    right: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
}

.navbar-item {
    margin: 0.4em;
    width: 100%;
}

.home-link,
.navbar-link {
    color: var(--navbar-text-color);
    transition: color 0.2s ease-in-out;
    text-decoration: none;
    display: flex;
    font-weight: 400;
    align-items: center;
    transition: background-color 0.2s ease-in-out,
                color 0.2s ease-in-out;
}

.home-link:focus,
.home-link:hover {
    color: var(--navbar-text-color-focus);
}

.navbar-link {
    justify-content: center;
    width: 100%;
    padding: 0.4em 0.8em;
    border-radius: 5px;
}

.navbar-link:focus,
.navbar-link:hover {
    color: var(--navbar-text-color-focus);
    background-color: var(--navbar-bg-contrast);
}

.navbar-logo {
    background-color: var(--navbar-text-color-focus);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 0.5em;
}

.navbar-toggle {
    cursor: pointer;
    border: none;
    background-color: transparent;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.icon-bar {
    display: block;
    width: 25px;
    height: 4px;
    margin: 2px;
    transition: background-color 0.2s ease-in-out,
                transform 0.2s ease-in-out,
                opacity 0.2s ease-in-out;
    background-color: var(--navbar-text-color);
}

.navbar-toggle:focus .icon-bar,
.navbar-toggle:hover .icon-bar {
    background-color: var(--navbar-text-color-focus);
}

#navbar.opened .navbar-toggle .icon-bar:first-child,
#navbar.opened .navbar-toggle .icon-bar:last-child {
    position: absolute;
    margin: 0;
    width: 30px;
}

#navbar.opened .navbar-toggle .icon-bar:first-child {
    transform: rotate(45deg);
}

#navbar.opened .navbar-toggle .icon-bar:nth-child(2) {
    opacity: 0;
}

#navbar.opened .navbar-toggle .icon-bar:last-child {
    transform: rotate(-45deg);
}

#navbar-menu {
    position: fixed;
    top: var(--navbar-height);
    bottom: 0;
    transition: opacity 0.2s ease-in-out,
                visibility 0.2s ease-in-out;
    opacity: 0;
    visibility: hidden;
    left: 0;
    right: 0;
}

#navbar.opened #navbar-menu {
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
    visibility: visible;
}

.navbar-links {
    list-style-type: none;
    max-height: 0;
    overflow: hidden;
    position: absolute;
    background-color: var(--navbar-bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 0;
    right: 0;
    margin: 1.4rem;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

#navbar.opened .navbar-links {
    padding: 1em;
    max-height: none;
}

@media screen and (min-width: 700px) {
    .navbar-toggle {
        display: none;
    }
    
    #navbar #navbar-menu,
    #navbar.opened #navbar-menu {
        visibility: visible;
        opacity: 1;
        position: static;
        display: block;
        height: 100%;
    }

    #navbar .navbar-links,
    #navbar.opened .navbar-links {
        margin: 0;
        padding: 0;
        box-shadow: none;
        position: static;
        flex-direction: row;
        list-style-type: none;
        max-height: max-content;
        width: 100%;
        height: 100%;
    }

    #navbar .navbar-link:last-child {
        margin-right: 0;
    }
}
`;

export default HeaderWrapper;