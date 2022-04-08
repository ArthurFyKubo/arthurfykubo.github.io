/*HEADER*/
<script>
// Measures product impressions and also tracks a standard
// pageview for the tag configuration.
// Product impressions are sent by pushing an impressions object
// containing one or more impressionFieldObjects.


dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  'ecommerce': {                       // Local currency is optional.
    'impressions': [
     {
       'name': 'Triblend Android T-Shirt',       // Name or ID is required.
       'id': '12345',
       'price': '15.25',
       'brand': 'Google',
       'category': 'Apparel',
       'variant': 'Gray',
       'list': 'Search Results',
       'position': 1
     },
     {
       'name': 'Donut Friday Scented T-Shirt',
       'id': '67890',
       'price': '33.75',
       'brand': 'Google',
       'category': 'Apparel',
       'variant': 'Black',
       'list': 'Search Results',
       'position': 2
     }]
  }
});
</script>








//PHONE
var phone = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[0];
phone.addEventListener("click", function(){pushinfo('generic:event', 'android:header', 'click:img', 'phones')});
// TABLETS
var tablets = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[1];
tablets.addEventListener("click", function(){pushinfo('generic:event', 'android:header', 'click:img', 'tablets')});
//WEAR
var wear = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[2];
wear.addEventListener("click", function(){pushinfo('generic:event', 'android:header', 'click:img', 'wear')});
//TV
var tv = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[3];
tv.addEventListener("click", function(){pushinfo('generic:event', 'android:header', 'click:img', 'tv')});
//AUTO
var auto = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[4];
auto.addEventListener("click", function(){pushinfo('generic:event', 'android:header', 'click:img', 'auto')});
//ONE
var one = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[5];
one.addEventListener("click", function(){pushinfo('generic:event', 'android:header', 'click:img', 'one')});
//PLAY
var play = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[6];
play.addEventListener("click", function(){pushinfo('generic:event', 'android:header', 'click:img', 'play')});
//SEARCH ICON
var search = document.querySelector(".mdl-button.mdl-js-button.mdl-button--icon");
search.addEventListener("click", function(){pushinfo('generic:event', 'android:header', 'click:img', 'search')});
//MORE BUTTON
var more = document.querySelector("#more-button");
more.addEventListener("click", function(){pushinfo('generic:event', 'android:header', 'click:img', 'more')});


//FUNÇÃO PUSH*/
function pushinfo(event, category, action, label){
  window.dataLayer= window.dataLayer || [];
  return window.dataLayer.push({
    'event':event,
    'eventCategory': category,
    'eventAction': action,
    'eventLabel': label
  })
}