$(document).ready(initializeApp);

function initializeApp(){
  var selected = $('.cardFront');
  var images = ["assets/images/react-logo.png", "assets/images/css-logo.png", "assets/images/html-logo.png", "assets/images/js-logo.png", "assets/images/mysql-logo.jpg", "assets/images/node-logo.png", "assets/images/php-logo.jpeg", "assets/images/docker-logo.jpg","assets/images/gitHub-logo.png"]
  images.shuffle();
  for (var selector = 0,img = 0;selector<=17;selector++,img++){
    if(img===images.length){
      img=0;
    }
    var currentSelection = $(selected[selector]).css({ 'background-image': 'url(' + images[img] + ')' });
    // console.log(currentSelection.css('background-image'));
  }
  $('.row').on('click','.card',function(event){
    /* console.log("this: ",this);
    console.log("current target: ",$(event.currentTarget)); */

    $(event.currentTarget.lastElementChild).toggleClass('hide');
    $(event.currentTarget.firstElementChild).toggleClass('hide');
  })

}
