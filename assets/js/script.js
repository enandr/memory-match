$(document).ready(initializeApp);
var firstClicked = null,
    secondClicked = null,
    matches = null,
    imgIs = null,
    imgIsSecond = null,
    firstCard =null,
    secondCard = null,
    tryAttempts = 0,
    gamesPlayed = 0,
    tryAccuacy=0,
    statsObj = {},
    modal = null,
    cardCount = 18,
    cheat=false;
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
/*   cardCount = prompt("Please enter your difficulty! Standard! Hard! Insane!", "standard");
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
  // playAudio();
  // enableCheat();
}
function playAudio(){
  $('#bgAudio').get(0).play();
  $('#stopAudio').text("Stop Audio");
}
function stopAudio() {
  $('#stopAudio').text("Play Audio");
  var audio = $('audio').get(0).pause();
  // audio.currentTime = 0;
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
  'assets/images/final_images/light-side/R2-D2-5-Star.jpg'];//was rey image
  images.shuffle();
  for (var imageIndex = 0,iterations = 0; iterations < 18; imageIndex++,iterations++) {

    if (imageIndex===images.length){
      imageIndex=0;
      images.shuffle();
      $(selected[iterations]).css({ 'background-image': 'url(' + images[imageIndex] + ')' });
    }
    else{
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
      var newFrontCard = $('<div>').addClass('cardFront');
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
  var audiobtn = $('#stopAudio').on('click',function () {
    if (audiobtn.text() === 'Stop Audio'){
      stopAudio();
    }
    else{
      playAudio();
    }
  });
}
function clicked(event) {
  if ($(event.currentTarget).hasClass('clicked')){
//?------------IF HAS 'CLICKED' DO NOTHING-------------//
  }
  else{
    // $(event.currentTarget.firstElementChild).toggleClass('flipped');
    $(event.currentTarget).addClass('flipped');

//!-------------------FIRST CARD--------------------//
    if (firstClicked === null && secondClicked === null) {
      firstClicked = $(event.currentTarget.firstElementChild);
      firstClickedBack = $(event.currentTarget.lastElementChild);
      firstCard = $(event.currentTarget).addClass('clicked');
      if(cheat){
        var cheatGlow = $('.cardFront');
        var checker;
          for(var search = 0, cardNumber = 0;search <18;search++,cardNumber++){
            checker = $(cheatGlow[search]);
            // console.log(checker.css('background-image') === firstClicked.css('background-image'));
            if (checker.css('background-image') === firstClicked.css('background-image')){
              checker.parent().addClass('flipped');
              // checkerBack.addClass('matchedLight');
            }
          }
      }
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
        checkWhichMisMatch(firstClicked.css('background-image'), secondClicked.css('background-image'));
        /* setTimeout(function () {
          firstCard.removeClass('clicked flipped');
          secondCard.removeClass('clicked flipped');
          firstClicked = null;
          secondClicked = null;
          $('.card').prop('disabled', false);
        }, 1500) */
        updateStats();
        /* console.log("diff clicked"); */
      }
//!-----------END DIFFERENT CARDS CLICKED----------//
//!-------------SAME CARDS CLICKED----------------//
      else {
        checkWhichMatch(firstClicked.css('background-image'), secondClicked.css('background-image'));
        firstCard.addClass('clicked matchedLight');
        secondCard.addClass('clicked matchedLight');
        firstClicked = null;
        secondClicked = null;
        matches+=1;
        updateStats();
        if (matches===9){
          gamesPlayed++;
          matches=0;
          $('.modalText').text("The Force Is Strong With You!");
          $('.vader').get(Math.floor(Math.random()*5)).play();
          modal.css('display','block');
        }
      }
//!-------------END SAME CARDS CLICKED-------------//
    }
  }
}
function restartGame(){
  $('.modal').css('display', 'none');
  $('div.card').removeClass('clicked flipped matchedLight');
/*   $('.cardFront').addClass('hide');
  $('.cardBack').removeClass('hide'); */
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
  setTimeout(setImages,1000)
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
  cheat = true;
  console.log("Cheats Active");
}
function disableCheat(){
  cheat = false;
  console.log("Cheats Inactive");
}
