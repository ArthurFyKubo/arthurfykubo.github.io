/* MEIO NEWS ON PLAYSTORE */
var playStore = document.querySelector(".mdl-typography--font-regular.mdl-typography--text-uppercase.android-alt-link");
playStore.addEventListener("click", function(){
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:playStore',
    'eventAction': 'click:link',
    'eventLabel': 'playStore'
  });
});
/* MEIO NEWS ON PLAYSTORE FIM */

/* MEIO CUSTOMISE */
var customise = document.querySelector("#customisar");
customise.addEventListener('click', function(){
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:customise',
    'eventAction': 'click:link',
    'eventLabel': 'customise'
  });
});
/* MEIO CUSTOMISE FIM */

/* MEIO MORE INFO */

var moreInfoSwitch = document.querySelectorAll(".mdl-card__actions")[0];
moreInfoSwitch.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:moreInfo',
    'eventAction': 'click:link',
    'eventLabel': 'switch'
  });
});

var moreInfoAndroidify = document.querySelectorAll(".mdl-card__actions")[1];
moreInfoAndroidify.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:moreInfo',
    'eventAction': 'click:link',
    'eventLabel': 'androidify'
  });
});

var moreInfoDownload = document.querySelectorAll(".mdl-card__actions")[2];
moreInfoDownload.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:moreInfo',
    'eventAction': 'click:link',
    'eventLabel': 'download'
  });
});

var moreInfoFindApps = document.querySelectorAll(".mdl-card__actions")[3];
moreInfoFindApps.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:moreInfo',
    'eventAction': 'click:link',
    'eventLabel': 'findApps'
  });
});
/* MEIO MORE INFO FIM */
