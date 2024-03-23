const splash = document.getElementById("splash");

var things = ['Still in BETA!', '[NOT] Made by EDS 😉', 'i luve tacos', 'sigma', 'much noice proccy', 'very nice porxccy', 'Did you know: You can use Dynamic proxy!'];
var thing = things[Math.floor(Math.random()*things.length)];

splash.textContent = thing;

