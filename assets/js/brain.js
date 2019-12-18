function checkWhichMatch(match, match2,playSound) {
  //!----------Checks To See Which Cards Were Matched To Play Correct Audio If Neccecary------------
  if (playSound) {
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
}
function checkWhichMisMatch(match,match2,playSound) {
  //!----------Checks To See Which Cards Were Not Matched To Play Correct Audio If Neccecary--------
  var waitTime = 1500;
  if (playSound) {
    switch (true) {
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
function unlockItem(matchedItem) {
  switch (true) {
    case (matchedItem.lastIndexOf("admiral-ackbar-4-star-medium-light.png") > 0):
      unlocks.lightSide.AdmiralAckbar = true;
      break;
    case (matchedItem.lastIndexOf("Admiral-Ackbar-Its-A-Trap.jpg") > 0):
      unlocks.lightSide.AdmiralAckbarTrap = true;
      break;
    case (matchedItem.lastIndexOf("amilyn-holdo-4-star-base.png") > 0):
      unlocks.lightSide.AmilynHoldoStarBase = true;
      break;
    case (matchedItem.lastIndexOf("Anakin-Skywalker-Jedi-General.png") > 0):
      unlocks.lightSide.AnakinSkywalkerJediGeneral = true;
      break;
    case (matchedItem.lastIndexOf("bail-organa-5-star-light-short.png") > 0):
      unlocks.lightSide.BailOrgana = true;
      break;
    case (matchedItem.lastIndexOf("Baze-Malbus-5-Star.png") > 0):
      unlocks.lightSide.BazeMalibus = true;
      break;
    case (matchedItem.lastIndexOf("bb-8-5-star.png") > 0):
      unlocks.lightSide.bb8 = true;
      break;
    case (matchedItem.lastIndexOf("bb-8-the-final-piece-light-short.png") > 0):
      unlocks.lightSide.bb8FinalPiece = true;
      break;
    case (matchedItem.lastIndexOf("Ben-Kenobi-5-Star.jpg") > 0):
      unlocks.lightSide.BenKenobi = true;
      break;
    case (matchedItem.lastIndexOf("Ben-Kenobi-Jedi-in-Hiding-Light-Short.png") > 0):
      unlocks.lightSide.BenKenobiJediInHiding = true;
      break;
    case (matchedItem.lastIndexOf("C-3PO-5-Star.jpg") > 0):
      unlocks.lightSide.C3po = true;
      break;
    case (matchedItem.lastIndexOf("Chewbacca-5-Star.jpg") > 0):
      unlocks.lightSide.Chewbacca = true;
      break;
    case (matchedItem.lastIndexOf("Chewbacca-A-Hero-Returned.png") > 0):
      unlocks.lightSide.ChewbaccaHeroReturned = true;
      break;
    case (matchedItem.lastIndexOf("Chewbacca-Wookiee-Warrior.jpg") > 0):
      unlocks.lightSide.ChewbaccaWookieeWarrior = true;
      break;
    case (matchedItem.lastIndexOf("Finn-5-Star.png") > 0):
      unlocks.lightSide.Finn = true;
      break;
    case (matchedItem.lastIndexOf("general-organa-leader-of-hope-medium-light.png") > 0):
      unlocks.lightSide.GeneralOrgana = true;
      break;
    case (matchedItem.lastIndexOf("Han-Solo-5-Star.jpg") > 0):
      unlocks.lightSide.HanSolo = true;
      break;
    case (matchedItem.lastIndexOf("han-solo-heroic-smuggler.png") > 0):
      unlocks.lightSide.HanSoloHeroicSmuggler = true;
      break;
    case (matchedItem.lastIndexOf("Han-Solo-Quick-Draw.jpg") > 0):
      unlocks.lightSide.HanSoloQuickDraw = true;
      break;
    case (matchedItem.lastIndexOf("Jyn-Erso-5-Star-Light.png") > 0):
      unlocks.lightSide.JynErso = true;
      break;
    case (matchedItem.lastIndexOf("Lando-Calrissian-Clever-Move.jpg") > 0):
      unlocks.lightSide.LandoCalrissian = true;
      break;
    case (matchedItem.lastIndexOf("luke-skywalker-jedi-hermit-light.png") > 0):
      unlocks.lightSide.LukeSkywalkerJedi = true;
      break;
    case (matchedItem.lastIndexOf("luke-skywalker-master-of-the-force-light-short.png") > 0):
      unlocks.lightSide.LukeSkywalkerMasterOfTheForce = true;
      break;
    case (matchedItem.lastIndexOf("Master-Yoda-5-Star.jpg") > 0):
      unlocks.lightSide.MasterYoda = true;
      break;
    case (matchedItem.lastIndexOf("Master-Yoda-Defiance-of-Evil-Light-Short.png") > 0):
      unlocks.lightSide.MasterYodaDefianceOfEvil = true;
      break;
    case (matchedItem.lastIndexOf("maz-kanata-5-star.png") > 0):
      unlocks.lightSide.MazKanata = true;
      break;
    case (matchedItem.lastIndexOf("Padme-Amidala-Senator-at-War.jpg") > 0):
      unlocks.lightSide.PadmeAmidala = true;
      break;
    case (matchedItem.lastIndexOf("R2-D2-5-Star.jpg") > 0):
      unlocks.lightSide.r2d2 = true;
      break;
    case (matchedItem.lastIndexOf("Rey-Starkiller-Base-5-Star-Light-Short-Range.png") > 0):
      unlocks.lightSide.Rey = true;
      break;
      //!--------dark side--------------
    case (matchedItem.lastIndexOf("anakin-skywalker-fallen-knight-short-dark.png") > 0):
      unlocks.darkSide.AnakinSkywalkerFallenKnight = true;
      break;
    case (matchedItem.lastIndexOf("bb-9e-4-star-base.png") > 0):
      unlocks.darkSide.bb9e = true;
      break;
    case (matchedItem.lastIndexOf("Boba-Fett-5-Star.jpg") > 0):
      unlocks.darkSide.BobaFett = true;
      break;
    case (matchedItem.lastIndexOf("Boba-Fett-Death-for-Hire.jpg") > 0):
      unlocks.darkSide.BobaFettDeathForHire = true;
      break;
    case (matchedItem.lastIndexOf("Boba-Fett-The-Relentless-Hunter.jpg") > 0):
      unlocks.darkSide.BobaFettTheRelentlessHunter = true;
      break;
    case (matchedItem.lastIndexOf("Captain-Phasma-5-Star.png") > 0):
      unlocks.darkSide.CaptainPhasma = true;
      break;
    case (matchedItem.lastIndexOf("captain-phasma-for-the-order-medium-dark.png") > 0):
      unlocks.darkSide.CaptainPhasmaForTheOrder = true;
      break;
    case (matchedItem.lastIndexOf("captain-phasma-veteran-commander-short-dark.png") > 0):
      unlocks.darkSide.CaptainPhasmaVereranCommander = true;
      break;
    case (matchedItem.lastIndexOf("Darth-Maul-5-Star.jpg") > 0):
      unlocks.darkSide.DarthMaul = true;
      break;
    case (matchedItem.lastIndexOf("Darth-Maul-Assassin.jpg") > 0):
      unlocks.darkSide.DarthMaulAssasin = true;
      break;
    case (matchedItem.lastIndexOf("Darth-Maul-Malice-Reborn.png") > 0):
      unlocks.darkSide.DarthMaulMaliceReborn = true;
      break;
    case (matchedItem.lastIndexOf("Darth-Sidious-5-Star.jpg") > 0):
      unlocks.darkSide.DarthSidious = true;
      break;
    case (matchedItem.lastIndexOf("Darth-Sidious-Sith-Dictator.jpg") > 0):
      unlocks.darkSide.DarthSidiousSithDictator = true;
      break;
    case (matchedItem.lastIndexOf("Darth-Vader-Dark-Overseer-Rogue-One-Short.png") > 0):
      unlocks.darkSide.DarthVader = true;
      break;
    case (matchedItem.lastIndexOf("Darth-Vader-Shadows-of-Fear-Short-Dark.png") > 0):
      unlocks.darkSide.DarthVaderShadowsOfFear = true;
      break;
    case (matchedItem.lastIndexOf("first-order-flametrooper-dark-short.png") > 0):
      unlocks.darkSide.FlameTrooper = true;
      break;
    case (matchedItem.lastIndexOf("first-order-stormtrooper-5-star-medium-dark.png") > 0):
      unlocks.darkSide.StormTrooper = true;
      break;
    case (matchedItem.lastIndexOf("General-Grievous-5-Star.jpg") > 0):
      unlocks.darkSide.GeneralGrievous = true;
      break;
    case (matchedItem.lastIndexOf("General-Grievous-Assault-on-Kamino-Dark-Short-5-Star.png") > 0):
      unlocks.darkSide.GeneralGrievousAssaultOnKamino = true;
      break;
    case (matchedItem.lastIndexOf("kylo-ren-dark-prodigy.png") > 0):
      unlocks.darkSide.KyloRen = true;
      break;
    case (matchedItem.lastIndexOf("kylo-ren-unmasked-short-dark.png") > 0):
      unlocks.darkSide.KyloRenUnmasked = true;
      break;
    default:
      break;
  }
  return unlocks;
}
function getInfoOnPerson(person){
  var personInfo = {};
  switch (true){
    case (person.css('background-image').lastIndexOf('luke-skywalker')>0):
      retrieveInfo('https://swapi.co/api/people/1/');
      break;
    case (person.css('background-image').lastIndexOf('C-3PO') > 0):
      retrieveInfo('https://swapi.co/api/people/2/');
      break;
    case (person.css('background-image').lastIndexOf('R2-D2') > 0):
      retrieveInfo('https://swapi.co/api/people/3/');
      break;
    case (person.css('background-image').lastIndexOf('Darth-Vader') > 0):
      retrieveInfo('https://swapi.co/api/people/4/');
      break;
    case (person.css('background-image').lastIndexOf('general-organa') > 0):
      retrieveInfo('https://swapi.co/api/people/5/');
      break;
    case (person.css('background-image').lastIndexOf('Ben-Kenobi') > 0):
      retrieveInfo('https://swapi.co/api/people/10/');
      break;
    case (person.css('background-image').lastIndexOf('Anakin-Skywalker') > 0 || person.css('background-image').lastIndexOf('anakin-skywalker') > 0):
      retrieveInfo('https://swapi.co/api/people/11/');
      break;
    case (person.css('background-image').lastIndexOf('Chewbacca') > 0):
      retrieveInfo('https://swapi.co/api/people/13/');
      break;
    case (person.css('background-image').lastIndexOf('Han-Solo') > 0 || person.css('background-image').lastIndexOf('han-solo') > 0):
      retrieveInfo('https://swapi.co/api/people/14/');
      break;
    case (person.css('background-image').lastIndexOf('Master-Yoda') > 0):
      retrieveInfo('https://swapi.co/api/people/20/');
      break;
    case (person.css('background-image').lastIndexOf('Darth-Sidious') > 0):
      retrieveInfo('https://swapi.co/api/people/21/');
      break;
    case (person.css('background-image').lastIndexOf('Boba-Fett') > 0):
      retrieveInfo('https://swapi.co/api/people/22/');
      break;
    case (person.css('background-image').lastIndexOf('Lando-Calrissian') > 0):
      retrieveInfo('https://swapi.co/api/people/25/');
      break;
    case (person.css('background-image').lastIndexOf('ckbar') > 0):
      retrieveInfo('https://swapi.co/api/people/27/');
      break;
    case (person.css('background-image').lastIndexOf('Darth-Maul') > 0):
      retrieveInfo('https://swapi.co/api/people/44/');
      break;
    case (person.css('background-image').lastIndexOf('General-Grievous') > 0):
      retrieveInfo('https://swapi.co/api/people/79/');
      break;
    case (person.css('background-image').lastIndexOf('Finn') > 0):
      retrieveInfo('https://swapi.co/api/people/84/');
      break;
    case (person.css('background-image').lastIndexOf('Rey') > 0):
      retrieveInfo('https://swapi.co/api/people/85/');
      break;
    case (person.css('background-image').lastIndexOf('bb-8') > 0):
      retrieveInfo('https://swapi.co/api/people/87/');
      break;
/*     case (person.css('background-image').lastIndexOf('Captain-Phasma') > 0 || person.css('background-image').lastIndexOf('captain-phasma') > 0):
      retrieveInfo('https://swapi.co/api/people/88/');
      break; */
    case (person.css('background-image').lastIndexOf('Padme-Amidala') > 0):
      retrieveInfo('https://swapi.co/api/people/35/');
      break;
    default:
      break;
  }
}
function retrieveInfo(personLink) {
  axios.get(personLink).then(function (response) {
    var initialGet = response;
    infoModal.name = response.data.name;
    infoModal.gender = response.data.gender;
    infoModal.height = response.data.height + " inches";
    infoModal.eyeColor = response.data.eye_color;
    infoModal.weight = response.data.mass+' kg';
    infoModal.hairColor = response.data.hair_color;
    /* gets the species */axios.get(response.data.species[0]).then(function (response) {
      infoModal.species = response.data.name;
      /* gets the homeworld */axios.get(initialGet.data.homeworld).then(function (response) {
        infoModal.homeworld = response.data.name;
        $('#infoName').text(("Name: " + infoModal.name).toLowerCase());
        $('#infoGender').text(("Gender: " + infoModal.gender).toLowerCase());
        $('#infoHeight').text(("Height: " + infoModal.height).toLowerCase());
        $('#infoHairColor').text(("Hair Color: " + infoModal.hairColor).toLowerCase());
        $('#infoEyeColor').text(("Eye Color: " + infoModal.eyeColor).toLowerCase());
        $('#infoWeight').text(("Weight: " + infoModal.weight).toLowerCase());
        $('#infoHomeworld').text(("Home World: " + infoModal.homeworld).toLowerCase());
        $('#infoSpecies').text(("Species: " + infoModal.species).toLowerCase());
        $('#infoModal').removeClass('hide');
      })
    })

    return;
  })
}
