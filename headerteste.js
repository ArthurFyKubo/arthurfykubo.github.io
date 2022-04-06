/*--HEADER--*/

//PHONE
var phone = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[0];

phone.addEventListener('click', function() {
  window.dataLayer= window.dataLayer || [];
  window.dataLayer.push({
    'event':'generic:event',
    'eventCategory':'android:header',
    'eventAction':'click:img',
    'eventLabel':'phones'
  });
  console.log("push do 'phone' para o dataLayer");
});
// TABLETS
var tablets = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[1];
tablets.addEventListener('click', function(){
  window.dataLayer= window.dataLayer || [];
  window.dataLayer.push({
    'event':'generic:event',
    'eventCategory': 'android:header',
    'eventAction':'click:img',
    'eventLabel':'tablets'
  });
  console.log("push do 'tablets' para o dataLayer");
});
//WEAR
var wear = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[2];
wear.addEventListener('click', function(){
  window.dataLayer= window.dataLayer || [];
  window.dataLayer.push({
    'event':'generic:event',
    'eventCategory':'android:header',
    'eventAction': 'click:img',
    'eventLabel':'wear'
  })    
  console.log("push do 'wear' para o dataLayer")
})
//TV
var tv = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[3];
tv.addEventListener('click', function(){
  window.dataLayer= window.dataLayer || [];
  window.dataLayer.push({
    'event':'generic:event',
    'eventCategory': 'android:header',
    'eventAction':'click:img',
    'eventLabel':'tv'    
  });
  console.log("push do 'tv' para o dataLayer");
});
//AUTO
var auto = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[4];
auto.addEventListener('click', function(){
  window.dataLayer= window.dataLayer || [];
  window.dataLayer.push({
    'event':'generic:event',
    'eventCategory':'android:header',
    'eventAction':'click:img',
    'eventLabel':'auto'
  });
  console.log("push do 'auto' para o dataLayer");
})
//ONE
var one = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[5];
one.addEventListener('click', function(){
  window.dataLayer= window.dataLayer || [];
  window.dataLayer.push({
    'event':'generic:event',
    'eventCategory':'android:header',
    'eventAction':'click:img',
    'eventLabel': 'one'
  });
  console.log("push do 'one' para o dataLayer");
});
//PLAY
var play = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[6];
play.addEventListener('click', function(){
  window.dataLayer= window.dataLayer|| [];
  window.dataLayer.push({
    'event':'generic:event',
    'eventCategory':'android:header',
    'eventAction':'click:img',
    'eventLabel':'play'
  });
  console.log("push do 'play' para o dataLayer");
});

var search = document.querySelector(".mdl-button.mdl-js-button.mdl-button--icon");
search.addEventListener('click', function(){
  window.dataLayer= window.dataLayer || [];
  window.dataLayer.push({
    'event':'generic:event',
    'eventCategory':'android:header',
    'eventAction':'click:img',
    'eventLabel':'search'
  });
  console.log("push do botão 'search' para o dataLayer");
});

var more = document.querySelector("#more-button");
more.addEventListener('click', function(){
  window.dataLayer= window.dataLayer || [];
  window.dataLayer.push({
    'event':'generic:event',
    'eventCategory':'android:header',
    'eventAction':'click:img',
    'eventLabel':'more'
  });
  console.log("push do botão 'more' para o dataLayer");
});