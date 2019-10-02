$(document).ready(initializeApp);
var firstClicked = null, secondClicked = null, match = null,firstClickedBack = null,secondClickedBack = null;

function initializeApp(){
  $('.cardFront').removeClass('hide');
  var selected = $('.cardFront');
  var images = ["assets/images/react-logo.png", "assets/images/css-logo.png", "assets/images/html-logo.png", "assets/images/js-logo.png", "assets/images/mysql-logo.jpg", "assets/images/node-logo.png", "assets/images/php-logo.jpeg", "assets/images/docker-logo.jpg", "assets/images/gitHub-logo.png", "assets/images/react-logo.png", "assets/images/css-logo.png", "assets/images/html-logo.png", "assets/images/js-logo.png", "assets/images/mysql-logo.jpg", "assets/images/node-logo.png", "assets/images/php-logo.jpeg", "assets/images/docker-logo.jpg", "assets/images/gitHub-logo.png"]
  // images.shuffle();

  for (var imageIndex = 0; imageIndex < 18; imageIndex++){
    console.log("selected: ", selected);
    $(selected[imageIndex]).css({ 'background-image': 'url(' + images[imageIndex] + ')' });
    // console.log(currentSelection.css('background-image'));
  }
  $('.row').on('click','.card',clicked)
}
function clicked(event) {
  /* console.log("this: ",this);
  console.log("current target: ",$(event.currentTarget)); */
  // $(event.currentTarget.firstElementChild).toggleClass('hide');
  $(event.currentTarget.lastElementChild).toggleClass('hide');

 if (firstClicked===null && secondClicked===null){
   firstClicked = $(event.currentTarget.firstElementChild)
    console.log("firstClicked: ", firstClicked);
   firstClickedBack = $(event.currentTarget.lastElementChild);
  }
  else{
    secondClicked = $(event.currentTarget.firstElementChild);
    console.log(secondClicked);
    secondClickedBack = $(event.currentTarget.lastElementChild);
   if (firstClicked.css('background-image') !== secondClicked.css('background-image')){
     console.log("first card clicked: ", firstClicked.css('background-image'))
     console.log("second card clicked: ", secondClicked.css('background-image'))
      setTimeout(function () {
        firstClickedBack.toggleClass('hide');
        secondClickedBack.toggleClass('hide');
      }, 1500)
      console.log("diff clicked");
      firstClicked = null;
      secondClicked = null;
    }else{
      console.log("same clicked");
      setTimeout(function(){

      },1500)
    }
  }
}
