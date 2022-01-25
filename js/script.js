//funkcja dodajace klasy do elementow menu
function togglle(){
  $('.ham-menu').toggleClass('menu-slide');
  $('.hamburger').toggleClass('active');
  $('main').toggleClass('slide');
}
//po kliknieciu menu kamburgera usuwa wszystkie klasy
$('.ham-menu').on('click', function () {
  togglle();
})
// po kliknieciu dowolnego elementu o klasie .close usuwane sa wszystkie klasy
$('.close').on('click', function () {
  togglle();
})

//dodaje plynne przejscie do kazdego linku
$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 300, function(){

      window.location.hash = hash;
    });
  }
});