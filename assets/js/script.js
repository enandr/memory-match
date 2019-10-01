$(document).ready(initializeApp);

function initializeApp(){
  var selected = $('.cardBack');
  var images = ["assets/images/react-logo.png", "assets/images/css-logo.png", "assets/images/html-logo.png", "assets/images/js-logo.png", "assets/images/mysql-logo.jpg", "assets/images/node-logo.png", "assets/images/php-logo.jpeg", "assets/images/docker-logo.jpg","assets/images/gitHub-logo.png"]
  for (var selector = 0,img = 0;selector<=16;selector+=2,img++){
    $(selected[selector]).css({ 'background-image': 'url(' + images[img] + ')' });
  }


}
