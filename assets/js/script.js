$(document).ready(initializeApp);
var firstClicked = null, secondClicked = null, matches = null,firstClickedBack = null,secondClickedBack = null,firstCard =null, secondCard = null;
var tryAttempts = 0,gamesPlayed = 0,tryAccuacy=0;
var statsObj = {};

function initializeApp(){
  $('.cardFront').addClass('hide');
  $('.cardBack').removeClass('hide');
  statsObj.divAttempts = $('#attempts');
  statsObj.divPlayed = $('#games-played');
  statsObj.divAccuracy = $('#accuracy');
  statsObj.divAttempts.text(tryAttempts);
  statsObj.divPlayed.text(gamesPlayed);
  statsObj.divAccuracy.text(tryAccuacy + "%");
  setImages();
  applyClick();
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
}
function clicked(event) {
  if ($(event.currentTarget).hasClass('clicked')){
    //! If it has a class of clicked do nothing
  }
  else{
    $(event.currentTarget.firstElementChild).toggleClass('hide');
    $(event.currentTarget.lastElementChild).toggleClass('hide');

    if (firstClicked === null && secondClicked === null) {
      firstClicked = $(event.currentTarget.firstElementChild);
      firstClickedBack = $(event.currentTarget.lastElementChild);
      firstCard = $(event.currentTarget);
    }
    else {
      secondClicked = $(event.currentTarget.firstElementChild);
      secondClickedBack = $(event.currentTarget.lastElementChild);
      secondCard = $(event.currentTarget);
      if (firstClicked.css('background-image') !== secondClicked.css('background-image')) {
//!-----------DIFFERENT CARDS CLICKED--------------//
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
        tryAttempts += 1;
        updateStats();
        console.log("diff clicked");
      } else {
//!-------------SAME CARDS CLICKED----------------//
        console.log("same clicked");
        firstCard.addClass('clicked');
        secondCard.addClass('clicked');
        firstClicked = null;
        secondClicked = null;
        matches+=1;
        tryAttempts += 1;
        updateStats();
        if (matches===9){
          gamesPlayed++;
          matches=0;
          var restart = confirm("You Win!! Restart Game");
          if (restart){
            restartGame();
          }
          // alert("you win");
        }
      }
    }
  }
}
function restartGame(){
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
