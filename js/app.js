/**
 * My Personal Page
 * author: linuxtaolinran@gmail.com
 */

var theParent = document.querySelector("#cardsMother");
theParent.addEventListener("click", gotoLink, false);

function gotoLink(e) {
	if (e.target !== e.currentTarget) {
		var url = e.target.getAttribute('data-url');
		    action = e.target.getAttribute('data-colin-action');
		if (url !== null) {
			/* statistic something... */
			window.open(url);
		}
	}
    e.stopPropagation();
}

/* Create a new instance of kontext */
var k = kontext(document.querySelector('.kontext'));

/*
 * API METHODS:
 * k.prev(); // Show prev layer
 * k.next(); // Show next layer
 * k.show( 3 ); // Show specific layer
 * k.getIndex(); // Index of current layer
 * k.getTotal(); // Total number of layers
 */

var bulletsContainer = document.body.querySelector('.bullets');

/* Create one bullet per layer */
for (var i = 0, len = k.getTotal(); i < len; i++) {
	var bullet = document.createElement('li');
	bullet.className = i === 0 ? 'active' : '';
	bullet.setAttribute('index', i);
	bullet.onclick = function(event) { k.show(event.target.getAttribute('index')) };
	bullet.ontouchstart = function(event) { k.show(event.target.getAttribute('index')) };
	bulletsContainer.appendChild(bullet);
}

/* Update the bullets when the layer changes */
k.changed.add(function(layer, index) {
	var bullets = document.body.querySelectorAll('.bullets li');
	for (var i = 0, len = bullets.length; i < len; i++) {
		bullets[i].className = i === index ? 'active' : '';
	}
} );

document.addEventListener('keyup', function(event) {
	if (event.keyCode === 37) k.prev();
	if (event.keyCode === 39) k.next();
}, false);

var touchX = 0;
var touchConsumed = false;

document.addEventListener('touchstart', function(event) {
	touchConsumed = false;
	lastX = event.touches[0].clientX;
}, false);

document.addEventListener('touchmove', function(event) {
	event.preventDefault();

	if (!touchConsumed) {
		if (event.touches[0].clientX > lastX + 10) {
			k.prev();
			touchConsumed = true;
		} else if (event.touches[0].clientX < lastX - 10) {
			k.next();
			touchConsumed = true;
		}
	}
}, false);

/** change bg colors */
function changeColors() {
  var bgColors = [
    "#262A56",
    "#B8621B",
    "#B46060",
    "#146C94",
    "#40513B",
    "#5D3891",
  ];
  bgs = document.getElementsByClassName("bgc");
  var randNum =  Math.floor(Math.random()*5);
  for (var i = 0; i < bgs.length; i++) {
    bgs[i].style.backgroundColor = bgColors[randNum + i];
  }
}

window.onload = () => {
  changeColors();
  console.info("%c IT IS ALL BULLSHIT. BYE ~", "color: red;font-size: x-large");
};

/*
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-40050631-1', 'auto');
  ga('send', 'pageview');
*/
