var maps = {};

function initializeMaps(){
	maps.madra = new Map(
		'Madra',
		'madra',
		'madra',
		'assets/images/maps/madra/madra.png',
		'assets/images/maps/madra/madra.json',
		'assets/images/maps/madra/madra_physics.json'
	);
}

function loadMaps(game){
	for(var map in maps){
		maps[map].loadMapAssets(game);
	}
}