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
    bgAudioInstantPlay = false,
    superCheatSetting = false,
    unlocks ={},
    cheat=false;
function initializeApp(){
  modal = $("#modal");
  statsObj.divAttempts = $('#attempts');
  statsObj.divPlayed = $('#games-played');
  statsObj.divAccuracy = $('#accuracy');
  statsObj.divAttempts.text(tryAttempts);
  statsObj.divPlayed.text(gamesPlayed);
  statsObj.divAccuracy.text(tryAccuacy + "%");
  createCards(cardCount);
  applyClick();
  if (bgAudioInstantPlay){
    playAudio();
  }
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
  var images = setImageArray();
  images.shuffle();
  var gameImages = images.slice(0,9);
  for (var imageIndex = 0,iterations = 0; iterations < 18; imageIndex++,iterations++) {

    if (imageIndex===gameImages.length){
      imageIndex=0;
      gameImages.shuffle();
      $(selected[iterations]).css({ 'background-image': 'url(' + gameImages[imageIndex] + ')' });
    }
    else{
      $(selected[iterations]).css({ 'background-image': 'url(' + gameImages[imageIndex] + ')' });
    }

  }
  if (superCheatSetting){
    $('.card').addClass('flipped');
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
        updateStats();
      }
//!-----------END DIFFERENT CARDS CLICKED----------//
//!-------------SAME CARDS CLICKED----------------//
      else {
        checkWhichMatch(firstClicked.css('background-image'), secondClicked.css('background-image'));
        isLightOrDark(firstClicked.css('background-image'));
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
  $('div.card').removeClass('clicked flipped matchedLight matchedDark');
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
function superCheat(){
  $('.card').addClass('flipped');
}
function setImageArray() {
  imgArray = ['assets/images/final_images/light-side/Admiral-Ackbar-Its-A-Trap.jpg',
    'assets/images/final_images/dark-side/kylo-ren-dark-prodigy.png',
    'assets/images/final_images/dark-side/Captain-Phasma-5-Star.png',
    'assets/images/final_images/dark-side/Darth-Vader-Shadows-of-Fear-Short-Dark.png',
    'assets/images/final_images/light-side/Han-Solo-5-Star.jpg',
    'assets/images/final_images/light-side/luke-skywalker-master-of-the-force-light-short.png',
    'assets/images/final_images/light-side/maz-kanata-5-star.png',
    'assets/images/final_images/light-side/Baze-Malbus-5-Star.png',
    'assets/images/final_images/light-side/R2-D2-5-Star.jpg',
    'assets/images/final_images/light-side/bb-8-5-star.png',
    'assets/images/final_images/light-side/bb-8-the-final-piece-light-short.png',
    'assets/images/final_images/light-side/Chewbacca-A-Hero-Returned.png',
    'assets/images/final_images/light-side/Finn-5-Star.png',
    'assets/images/final_images/light-side/general-organa-leader-of-hope-medium-light.png',
    'assets/images/final_images/light-side/Lando-Calrissian-Clever-Move.jpg',
    'assets/images/final_images/light-side/luke-skywalker-jedi-hermit-light.png',
    'assets/images/final_images/light-side/Rey-Starkiller-Base-5-Star-Light-Short-Range.png',
    'assets/images/final_images/dark-side/anakin-skywalker-fallen-knight-short-dark.png',
    'assets/images/final_images/dark-side/captain-phasma-for-the-order-medium-dark.png',
    'assets/images/final_images/dark-side/Darth-Vader-Dark-Overseer-Rogue-One-Short.png',
    'assets/images/final_images/dark-side/first-order-flametrooper-dark-short.png',
    'assets/images/final_images/dark-side/first-order-stormtrooper-5-star-medium-dark.png',
    'assets/images/final_images/dark-side/kylo-ren-unmasked-short-dark.png',
    'assets/images/final_images/light-side/Anakin-Skywalker-Jedi-General.png',
    'assets/images/final_images/light-side/han-solo-heroic-smuggler.png',
    'assets/images/final_images/light-side/Han-Solo-Quick-Draw.jpg',
    'assets/images/final_images/dark-side/General-Grievous-5-Star.jpg',
    'assets/images/final_images/dark-side/General-Grievous-Assault-on-Kamino-Dark-Short-5-Star.png',
    'assets/images/final_images/light-side/admiral-ackbar-4-star-medium-light.png',
    'assets/images/final_images/light-side/amilyn-holdo-4-star-base.png',
    'assets/images/final_images/light-side/bail-organa-5-star-light-short.png',
    'assets/images/final_images/dark-side/bb-9e-4-star-base.png',
    'assets/images/final_images/light-side/Ben-Kenobi-5-Star.jpg',
    'assets/images/final_images/light-side/Ben-Kenobi-Jedi-in-Hiding-Light-Short.png',
    'assets/images/final_images/dark-side/Boba-Fett-5-Star.jpg',
    'assets/images/final_images/dark-side/Boba-Fett-Death-for-Hire.jpg',
    'assets/images/final_images/dark-side/Boba-Fett-The-Relentless-Hunter.jpg',
    'assets/images/final_images/light-side/C-3PO-5-Star.jpg',
    'assets/images/final_images/dark-side/captain-phasma-veteran-commander-short-dark.png',
    'assets/images/final_images/light-side/Chewbacca-5-Star.jpg',
    'assets/images/final_images/light-side/Chewbacca-Wookiee-Warrior.jpg',
    'assets/images/final_images/dark-side/Darth-Maul-5-Star.jpg',
    'assets/images/final_images/dark-side/Darth-Maul-Assassin.jpg',
    'assets/images/final_images/dark-side/Darth-Maul-Malice-Reborn.png',
    'assets/images/final_images/dark-side/Darth-Sidious-5-Star.jpg',
    'assets/images/final_images/dark-side/Darth-Sidious-Sith-Dictator.jpg',
    'assets/images/final_images/light-side/Jyn-Erso-5-Star-Light.png',
    'assets/images/final_images/light-side/Master-Yoda-5-Star.jpg',
    'assets/images/final_images/light-side/Padme-Amidala-Senator-at-War.jpg'];
    return imgArray;
}
