$(document).ready(initializeApp);
var firstClicked = null, secondClicked = null, matches = null,firstClickedBack = null,secondClickedBack = null,firstCard =null, secondCard = null;
var tryAttempts = 0,gamesPlayed = 0,tryAccuacy=0;
var statsObj = {};
var modal = null;
function initializeApp(){
  $('.cardFront').addClass('hide');
  $('.cardBack').removeClass('hide');
  modal = $("#modal");
  statsObj.divAttempts = $('#attempts');
  statsObj.divPlayed = $('#games-played');
  statsObj.divAccuracy = $('#accuracy');
  statsObj.divAttempts.text(tryAttempts);
  statsObj.divPlayed.text(gamesPlayed);
  statsObj.divAccuracy.text(tryAccuacy + "%");
  setImages();
  applyClick();
  // enableCheat();
}
function setImages(){
  var selected = $('.cardFront');
  var images = ["assets/images/react-logo.png", "assets/images/css-logo.png", "assets/images/html-logo.png", "assets/images/js-logo.png", "assets/images/mysql-logo.jpg", "assets/images/node-logo.png", "assets/images/php-logo.jpeg", "assets/images/docker-logo.jpg", "assets/images/gitHub-logo.png", "assets/images/react-logo.png", "assets/images/css-logo.png", "assets/images/html-logo.png", "assets/images/js-logo.png", "assets/images/mysql-logo.jpg", "assets/images/node-logo.png", "assets/images/php-logo.jpeg", "assets/images/docker-logo.jpg", "assets/images/gitHub-logo.png"]
  images.shuffle();

  for (var imageIndex = 0; imageIndex < 18; imageIndex++) {
    $(selected[imageIndex]).css({ 'background-image': 'url(' + images[imageIndex] + ')' });
  }
}
function applyClick(){
  $('.row').on('click', '.card', clicked);
  $('#modalClose').on('click',restartGame);
  modal.on('click',function (){
    modal.css('display','');
  })
}
function clicked(event) {
  if ($(event.currentTarget).hasClass('clicked')){
//!------------IF HAS CLICKED DO NOTHING-------------//
  }
  else{
    $(event.currentTarget.firstElementChild).toggleClass('hide');
    $(event.currentTarget.lastElementChild).toggleClass('hide');
//!-------------------FIRST CARD--------------------//
    if (firstClicked === null && secondClicked === null) {
      firstClicked = $(event.currentTarget.firstElementChild);
      firstClickedBack = $(event.currentTarget.lastElementChild);
      firstCard = $(event.currentTarget).addClass('clicked');
    }
//!------------------SECOND CARD-------------------//
    else {

      secondClicked = $(event.currentTarget.firstElementChild);
      secondClickedBack = $(event.currentTarget.lastElementChild);
      secondCard = $(event.currentTarget);
      tryAttempts++;
//!-----------DIFFERENT CARDS CLICKED--------------//
      if (firstClicked.css('background-image') !== secondClicked.css('background-image')) {
        $('.card').prop('disabled', true);
        setTimeout(function () {
          firstClicked.toggleClass('hide');
          secondClicked.toggleClass('hide');
          firstClickedBack.toggleClass('hide');
          secondClickedBack.toggleClass('hide');
          firstCard.removeClass('clicked');
          secondCard.removeClass('clicked');
          firstClicked = null;
          secondClicked = null;
          $('.card').prop('disabled', false);
        }, 1500)
        updateStats();
        /* console.log("diff clicked"); */
      }
//!-------------SAME CARDS CLICKED----------------//
      else {
        // console.log("same clicked");
        firstCard.addClass('clicked');
        secondCard.addClass('clicked');
        firstClicked = null;
        secondClicked = null;
        matches+=1;
        updateStats();
        if (matches===9){
          gamesPlayed++;
          matches=0;
          modal.css('display','block');
        }
      }
    }
  }
}
function restartGame(){
  $('.modal').css('display', 'none');
  $('div.card').removeClass('clicked');
  $('.cardFront').addClass('hide');
  $('.cardBack').removeClass('hide');
  tryAttempts = 0;
  tryAccuacy = 0;
  firstClicked = null;
  secondClicked = null;
  matches = null;
  firstClickedBack = null;
  secondClickedBack = null;
  firstCard = null;
  secondCard = null;
  // statsObj = {};
  setImages();
  updateStats();
}
function updateStats(){
  tryAccuacy = ((matches/tryAttempts)*100).toFixed(0);
  if (isNaN(tryAccuacy)){
    tryAccuacy=0;
  }
  statsObj.divAttempts.text(tryAttempts);
  statsObj.divPlayed.text(gamesPlayed);
  statsObj.divAccuracy.text(tryAccuacy + "%");
}
function enableCheat(){
  $('.cardBack').css('opacity', .5);
  $('.cardFront').css('display', 'block');
}
function disableCheat(){
  $('.cardBack').css('opacity', '');
  var disable = $('.card').firstElementChild;
  console.log(disable);
  var current=null;
  for (var key in disable){
    if (key<18){
      current=disable[key];
      if (!current.hasClass('clicked')){
        $('.cardFront').css('display', 'none');
      }
    }

  }
}
