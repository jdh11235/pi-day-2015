
//vars

var last_digit = -1;
var pi_cache = '';
var pi_container = document.getElementById('pi_container');

//functions

function fetch_pi() {

	var xhr = new XMLHttpRequest();

	xhr.onload = function() {
		pi_cache = this.responseText;
	};

	xhr.open('get', 'pi.txt');
	xhr.send();

}

function pi_digit(digit) {

	return pi_cache.charAt(digit);

}

function random_color() {

	function randomFromRange (min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}

	function d () {
		return randomFromRange(0, 0xf).toString(16);
	}

	return '#' + d() + d() + d() + d() + d() + d();

}

function render() {

	pi_container.innerHTML += pi_digit(last_digit);
	last_digit++;

}

function render_loop(iterations) {

}

//init

function init() {

	fetch_pi();
	render_loop(10000);

}

window.onload = init;
