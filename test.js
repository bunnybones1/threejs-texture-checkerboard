var onReady = function() {
	var View = require('threejs-managed-view').View,
		CheckerBoardTexture = require('./');

	var view = new View({
		stats: true
	});

	//lights
	var light = new THREE.PointLight(0xffffff, 1);
	light.position.x = 10;
	view.scene.add(light);
	var hemisphereLight = new THREE.HemisphereLight(0x8fbfcf, 0x7f6f5f);
	view.scene.add(hemisphereLight);

	//checkerboard
	var texture = new CheckerBoardTexture(0xe58aef, 0x7f4f1f, 4, 4);

	var box = new THREE.Mesh(
		new THREE.BoxGeometry(2, 2, 2, 1, 1, 1),
		new THREE.MeshPhongMaterial({
			map: texture
		})
	)
	view.scene.add(box);

	view.renderManager.onEnterFrame.add(function() {
		box.rotation.y += .01;
	})
}

var loadAndRunScripts = require('loadandrunscripts');
loadAndRunScripts(
	[
		'bower_components/three.js/three.js',
		'lib/stats.min.js',
		'lib/threex.rendererstats.js',
	],
	onReady
);
