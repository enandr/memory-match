function checkWhichMatch(match, match2) {
  //!----------Checks To See Which Cards Were Matched To Play Correct Audio If Neccecary------------
  switch (true) {
    case (match.lastIndexOf("Han") > 0 && match2.lastIndexOf('Han') > 0):
      $('.han').get(0).play();
      break;
    case (match.lastIndexOf("Chewbacca") > 0 && match2.lastIndexOf('Chewbacca') > 0):
      $('#chewbacca').get(0).play();
      break;
    case (match.lastIndexOf("R2-D2") > 0 && match2.lastIndexOf('R2-D2') > 0):
      $('#r2d2').get(0).play();
      break;
    default:
      break;
  }
}
function checkWhichMisMatch(match,match2) {
  //!----------Checks To See Which Cards Were Not Matched To Play Correct Audio If Neccecary--------
  var waitTime = 1500;
  switch (true){
    case (match.lastIndexOf('Darth-Vader') > 0 && match2.lastIndexOf('luke-skywalker') > 0):
      $('.vaderCard').get(0).play();
      waitTime = 3300;
    break;
    case (match.lastIndexOf('luke-skywalker') > 0 && match2.lastIndexOf('Master-Yoda') > 0):
      $('#lukeGreetings').get(0).play();
      break;
    default:
      break;
  }
  setTimeout(function () {
    firstCard.removeClass('clicked flipped');
    secondCard.removeClass('clicked flipped');
    firstClicked = null;
    secondClicked = null;
    $('.card').prop('disabled', false);
  }, waitTime)
}
function isLightOrDark(card) {
  if (card.lastIndexOf('/dark-side/')>0){
    firstCard.addClass('clicked matchedDark');
    secondCard.addClass('clicked matchedDark');
  }
  else if (card.lastIndexOf('/light-side/')>0)
  firstCard.addClass('clicked matchedLight');
  secondCard.addClass('clicked matchedLight');
}
