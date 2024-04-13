import About from './About';
import Contact from './Contact';
import Home from './Home';
import Menu from './Menu';

import './style.css'

const homeButton = document.querySelector("#home-btn");
homeButton.addEventListener('click', Home().handleClick);

const menuButton = document.querySelector("#menu-btn");
menuButton.addEventListener('click', Menu().handleClick);

const contactButton = document.querySelector("#contact-btn");
contactButton.addEventListener('click', Contact().handleClick);

const aboutButton = document.querySelector("#about-btn");
aboutButton.addEventListener('click', About().handleClick);