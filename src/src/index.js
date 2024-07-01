import './styles/globals.css';
import './styles/style.css';
import './styles/variables.css';
import './fonts/fonts.css';
import './index.js';

import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.remove('page__loading');
  document.body.classList.add('page__loaded');

  const mySwiper = new Swiper('.swiper-container', {
    modules: [Autoplay, EffectFade],
    loop: true,
    autoplay: {
      delay: 3000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    allowTouchMove: false, 
  });
});