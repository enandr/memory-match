$(document).ready(initializeApp);
var firstClicked = null, secondClicked = null, matches = null,firstClickedBack = null,secondClickedBack = null,firstCard =null, secondCard = null;
var tryAttempts = 0,gamesPlayed = 0,tryAccuacy=0;
var statsObj = {};
var modal = null;
var cardCount = 18;
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
 /*  cardCount = prompt("Please enter your difficulty! Standard! Hard! Insane!", "standard");
  if (isNaN(cardCount)){
    switch (cardCount) {
      case "standard":
        cardCount=18;
        break;
      case "insane":
        cardCount = 72;
        break;
      case "hard":
        cardCount = 36;
        break;
      default:
        cardCount = 18;
        break;
  }
  } */

  createCards(cardCount);
  applyClick();
  // enableCheat();
}
function setImages(numCards){
  var selected = $('.cardFront');
  var images = ['assets/images/final_images/dark-side/Admiral-Ackbar-Its-A-Trap.jpg',
  'assets/images/final_images/dark-side/kylo-ren-dark-prodigy.png',
  'assets/images/final_images/dark-side/Captain-Phasma-5-Star.png',
  'assets/images/final_images/dark-side/Darth-Vader-Shadows-of-Fear-Short-Dark.png',
  'assets/images/final_images/light-side/Han-Solo-5-Star.jpg',
  'assets/images/final_images/light-side/luke-skywalker-master-of-the-force-light-short.png',
  'assets/images/final_images/light-side/maz-kanata-5-star.png',
  'assets/images/final_images/light-side/Baze-Malbus-5-Star.png',
  'assets/images/final_images/light-side/Rey-Starkiller-Base-5-Star-Light-Short-Range.png'];
  images.shuffle();

  for (var imageIndex = 0,iterations = 0; iterations < numCards; imageIndex++,iterations++) {
    console.log("iteration number: ",iterations);
    if (imageIndex===images.length){
      imageIndex=0;
      images.shuffle();
      console.log("--------resetting index---------");
      $(selected[iterations]).css({ 'background-image': 'url(' + images[imageIndex] + ')' });
    }
    else{
      console.log("image number: ",imageIndex);
      $(selected[iterations]).css({ 'background-image': 'url(' + images[imageIndex] + ')' });
    }

  }
}
function createCards(numOfCards){
//!--------DYNAMICALLY CREATING THE CARDS-----//
  var rowsToMake = numOfCards/6
 /*  if (rowsToMake%3===0){
    console.log("TESTING CHECK");
    rowsToMake=18;
  } */
  var gameScreen = $('.game');
  for (var makeRow = rowsToMake ;makeRow>0;makeRow--){
//!---------------CREATE ROW---------------//
    var newRow = $('<div>').addClass('row');
    for (var makecard = 6;makecard>0;makecard--){
//!-------CREATE CARD AND FACES AND APPEND THEM----------//
      var newCard = $('<div>').addClass('card');
      var newFrontCard = $('<div>').addClass('cardFront hide');
      var newBackCard = $('<div>').addClass('cardBack');
      newCard.append(newFrontCard,newBackCard);
      newRow.append(newCard);
    }
    gameScreen.append(newRow);
  }
  setImages(numOfCards);
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
//?------------IF HAS 'CLICKED' DO NOTHING-------------//
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
//!-----------END DIFFERENT CARDS CLICKED----------//
//!-------------SAME CARDS CLICKED----------------//
      else {
        // console.log("same clicked");
        firstCard.addClass('clicked');
        secondCard.addClass('clicked');
        firstClicked = null;
        secondClicked = null;
        matches+=1;
        updateStats();
        if (matches===cardCount/2){
          gamesPlayed++;
          matches=0;
          modal.css('display','block');
        }
      }
//!-------------END SAME CARDS CLICKED-------------//
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
  setImages(36);
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
