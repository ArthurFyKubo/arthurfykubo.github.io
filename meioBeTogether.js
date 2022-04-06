/* MEIO {BONECO ANDROID LINK} */
// DUVIDA EM COMO REPRESENTAR A CLASSE (LINK CREATE CHAR): REPRESENTAR COMO $0?
var beTogether = document.querySelector("#androidChar");
beTogether.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:be-together-not-the-same',
    'eventAction': 'click:link',
    'eventLabel': 'create-your-android-character'
  });
});
/* MEIO BONECO ANDROID LINK FIM */

/* MEIO BONECO ANDROID BOTAO */
var beTogetherButtom = document.querySelector("#blueButtom");
beTogetherButtom.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:be-together-not-the-same',
    'eventAction': 'click:button',
    'eventLabel': 'beTogetherButtom'
  });
});
/* MEIO BONECO ANDROID BOTAO FIM*/
