/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 * id="reset" is clicked,  "teamone-numshots",  "teamone-numhits", "teamtwo-numshots",  "teamtwo-numhits" - set to 0
 * "num-resets" - incremented by 1
 * 
 * 
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function () {

  const teamOneNumShots = $("#teamone-numshots");
  const teamOneNumHits = $("#teamone-numhits");
  const teamOneShoot = $("#teamone-shoot");
  const teamTwoNumShots = $("#teamtwo-numshots");
  const teamTwoNumHits = $("#teamtwo-numhits");
  const teamTwoShoot = $("#teamtwo-shoot");
  const reset = $("#reset");
  const numResets = $("#num-resets"); 
  

  teamOneShoot.click(function () {
    teamOneNumShots.html(parseInt(teamOneNumShots.html()) + 1);
     if (Math.random() > .5) {
      teamOneNumHits.html(parseInt(teamOneNumHits.html()) + 1);
      $("body").css("background-image", 'url("assets/jpgs/sammy.jpg")');
      $("body").css("color", "white");


   //   <img src="">
          }
  })

  teamTwoShoot.click(function () {
    teamTwoNumShots.html(parseInt(teamTwoNumShots.html()) + 1);
     if (Math.random() > .5) {
      teamTwoNumHits.html(parseInt(teamTwoNumHits.html()) + 1);
      $("body").css("background-image", 'url("assets/jpgs/dave.jpg")');
      $("body").css("color", "white");
    }
  })

  reset.click(function () {
    numResets.html(parseInt(numResets.html()) + 1);
    teamOneNumShots.html(0);
    teamOneNumHits.html(0);
    teamTwoNumShots.html(0);
    teamTwoNumHits.html(0);
    $("body").css("background-image", "");
    $("body").css("background-color", "white");
    $("body").css("color", "black");
  })


  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function () {



  })

})();
