const GAME_SPEED = 50;
const arena = document.getElementById('area');
$(arena).css('width', 4750);
$(arena).css('height', 2400);

let directionx = 50;
let directiony = 0;
start();

function start() {
  $('#score').html(score = 0);

  train = [{
    x: randompos(0, parseFloat($(arena).css('width')) - 50),
    y: randompos(0, parseFloat($(arena).css('height')) - 50)
  }];

	$('#area').empty();

  status();
  createperson();
  createperson2();
  createperson3();
  addperson();
  attatchcarriage();

  $(document).on("keydown", changedirection);
}


var gameOverBox;

gameOverBox = document.getElementById("gameOver");

function status() {
  if (playerHitWall() || playerHitSelf()) {
    // window.location.href='MAINMENU.html' (leave for now)
    alert('You Derailed! Score: ' + score);
    start();
    return;
  }

/*function playerHits(playerHitSelf, playerHitWall) {
  if (playerHitWall() || playerHitSelf()) {
    setState("gameOver")
  }
}

  function setState(state) {
    gameState = state;
    showMenu(state);
  }

  function displayMenu(menu) {
    menu.style.visibility = "visible";
  }

  function showMenu(state)
  if(state == "gameOver") {
    displayMenu(gameOverMenu);
  }*/


  setTimeout(function onTick() {
    changingDirection = false;
    status();
    renderperson();
    rendertrain();
    advancetrain();

  }, GAME_SPEED)
}
