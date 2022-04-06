//Desafio 2.0

//IMAGEM DO LOGO
//Capturando o elemento html (logo android) atraves da classe da imagem
var logo = document.querySelector(".android-logo-image");

//Adicionando um escutador de evento na imagem do logo. Ao ser clicado, colocará as variaveis e respectivos valores no datalayer;
logo.addEventListener('click', function(){

     window.dataLayer = window.dataLayer || [];
       window.dataLayer.push({
          'event': 'generic:event',
          'eventCategory': 'android:header',
          'eventAction': 'click:img',
          'eventLabel': 'logo'
  });
  // teste de funcionalidade
  console.log("adicionando um escutador de evento ao clicarem no logo,");
});
/*FIM DO LOGO*/

/* MENU HEADER*/

var phone = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[0];
phone.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:header',
    'eventAction': 'click:header:menu',
    'eventLabel': 'phone'
  });
  console.log("colocando dados de container>avigation>phone pro dataLayer");
});

var tablets = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[1];
tablets.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:header',
    'eventAction': 'click:header:menu',
    'eventLabel': 'tablets'
  });

  console.log("colocando dados de navigation>tablets pro dataLayer");
});

var wear = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[2];
wear.addEventListener('click', function() {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:header',
    'eventAction': 'click:header:menu',
    'eventLabel': 'wear'
  });

  console.log("colocando dados de navigation>wear pro dataLayer");
});

var tv = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[3];
tv.addEventListener('click', function() {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:header',
    'eventAction': 'click:header:menu',
    'eventLabel': 'tv'
  });

  console.log("colocando dados de navigation>tv pro dataLayer");
});

var auto = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[4];
auto.addEventListener('click', function() {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:header',
    'eventAction': 'click:header:menu',
    'eventLabel': 'auto'
  });

  console.log("colocando dados de navigation>auto pro dataLayer");
});

var one = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[5];
one.addEventListener('click', function() {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:header',
    'eventAction': 'click:header:menu',
    'eventLabel': 'one'
  });

  console.log("colocando dados de navigation>one pro dataLayer");
});

var play = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[6];
play.addEventListener('click', function() {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:header',
    'eventAction': 'click:header:menu',
    'eventLabel': 'play',
    'value': '100'
  });

  console.log("colocando dados de navigation>play pro dataLayer");
});

/* FIM MENU HEADER */

/* BOTÃO LUPA */
var buscar = document.querySelector(".android-search-box.mdl-textfield.mdl-js-textfield.mdl-textfield--expandable.mdl-textfield--floating-label.mdl-textfield--align-right.mdl-textfield--full-width");
buscar.addEventListener('click', function() {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:header',
    'eventAction': 'click:header:menu',
    'eventLabel': 'buscar'
  });

  console.log("colocando dados do botão de busca pro dataLayer");
})
/* FIM DO BOTÃO LUPA */

/* BOTÃO [...] DO HEADER */
var mais = document.querySelector(".android-more-button.mdl-button.mdl-js-button.mdl-button--icon.mdl-js-ripple-effect");
mais.addEventListener('click', function(){

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:header',
    'eventAction': 'click:header:menu',
    'eventLabel': 'mais'
  });

  console.log("colocando dados do botão mais pro dataLayer");
})
/* FIM DO BOTÃO [...] */