const splash = document.getElementById("splash");

var things = ['Now 2.0!', '[NOT] Made by EDS 😉', 'i luve tacos', 'sigma', 'much noice proccy', 'very nice porxccy', 'Did you know: You can use Dynamic proxy!'];
var thing = things[Math.floor(Math.random() * things.length)];

splash.textContent = thing;

