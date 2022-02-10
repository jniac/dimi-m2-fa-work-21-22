var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var ANT = {x: 50, y: 50, dir: 'left'};
var MAP_SIZE = 100;
var PAUSE = false;
var ITERATIONS = 0;
var PLAYGROUND_SIZE = document.body.clientHeight;

const MOVE = {
	'top': { // est tourné vers le haut
		0: { // est sur un carré blanc
			dir: 'right',
			x: 1,
			y: 0,
		},
		1: { // est sur carré noir
			dir: 'left',
			x: -1,
			y: 0,
		},
	},
	'bottom': { // est tourné vers le bas
		0: { // est sur un carré blanc
			dir: 'left',
			x: -1,
			y: 0,
		},
		1: { // est sur carré noir
			dir: 'right',
			x: 1,
			y: 0,
		},
	},
	'left': { // est tourné à gauche
		0: { // est sur un carré blanc
			dir: 'top',
			x: 0,
			y: -1,
		},
		1: { // est sur carré noir
			dir: 'bottom',
			x: 0,
			y: 1,
		},
	},
	'right': { // est tourné à droite
		0: { // est sur un carré blanc
			dir: 'bottom',
			x: 0,
			y: 1,
		},
		1: { // est sur carré noir
			dir: 'top',
			x: 0,
			y: -1,
		},
	},
};


// init MAP with white tiles
var MAP = Array(MAP_SIZE * MAP_SIZE);
MAP = MAP.fill(0);
const TILE_SIZE = PLAYGROUND_SIZE / MAP_SIZE;

/*
** FUNCTIONS
*/

function get_tile(x, y) {
	return (MAP[ANT.x + (MAP_SIZE * ANT.y)]);
}

function set_tile(x, y, value) {
	MAP[ANT.x + (MAP_SIZE * ANT.y)] = value;
}

function move_ant(ant, tile_value) {
	ANT.x += MOVE[ant.dir][tile_value].x;
	ANT.y += MOVE[ant.dir][tile_value].y;
	ANT.dir = MOVE[ant.dir][tile_value].dir;
	return (ANT);
}


// DRAW



function draw_tile(x, y, tile_value) {
	x_pos = (canvas.width / 2) - (PLAYGROUND_SIZE / 2) + (x * TILE_SIZE);
	y_pos = (canvas.height / 2) - (PLAYGROUND_SIZE / 2) + (y * TILE_SIZE);
	if (tile_value) {
		ctx.fillStyle = '#fff';
		ctx.fillRect(x_pos, y_pos, TILE_SIZE, TILE_SIZE);
	}
	else {
		ctx.fillStyle = 'black';
		ctx.fillRect(x_pos, y_pos, TILE_SIZE, TILE_SIZE);
		ctx.strokeRect(x_pos, y_pos, TILE_SIZE, TILE_SIZE);
	}
}

function draw_playground()
{
	var x = 0, y = 0;
	MAP.forEach(tile => {
		draw_tile(x, y, tile);

		// next tile on square map
		x++;	
		if (x % MAP_SIZE == 0) {
			x = 0;
			y++;
		}
	});
}

function draw_loop() {	
    canvas.height = document.body.clientHeight;
    canvas.width = document.body.clientWidth;
		draw_playground();
}


 //LOOPS


function game_loop(ant) {
	if (PAUSE === false) {
		var tile_value = get_tile(ant.x, ant.y);
		set_tile(ant.x, ant.y, tile_value ? 0 : 1);
		ant = move_ant(ant, tile_value);
		ITERATIONS++;
	}
	return (ant);
}

function main_loop() {
	ANT = game_loop(ANT);
}

function play() {
	window.setInterval(main_loop, 0);
	window.setInterval(draw_loop, 0);
}

function pause() {
	window.location.reload();
}