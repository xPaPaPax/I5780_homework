/*
function sceneDesign() {

  // add obstacles to the scene
  scene.obstacles = [];
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(150,0,150), 50) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(-100,0,200), 30) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(0,0,-100), 60) )
    
  scene.targets = [];
  scene.targets.push (new Target (1, new THREE.Vector3 (300,0,300) ));
  scene.targets.push (new Target (2, new THREE.Vector3 (-200,0,150) ));
  scene.targets.push (new Target (3, new THREE.Vector3 (250,0,-200) ));
  scene.targets.push (new Target (4, new THREE.Vector3 (0,0,-200) ));

}
*/

function sceneFromJSON () {
  const JSONStr = '{"obstacles":[{"center":{"x":137.99697307552785,"y":9.853837828238694e-14,"z":68.2225962857492},"size":20},{"center":{"x":65.88570282277911,"y":-1.4646487072559058e-13,"z":147.61913722263762},"size":20},{"center":{"x":-61.829526038343445,"y":-2.5271156595273476e-13,"z":114.11171425695085},"size":20},{"center":{"x":-55.96131461397451,"y":1.6073597426380863e-14,"z":-72.38904737995222},"size":20},{"center":{"x":30.068885451307054,"y":-1.2854028314910524e-13,"z":66.89397129240837},"size":20},{"center":{"x":205.49183343655582,"y":2.5884431844966387e-14,"z":-116.57311761168762},"size":20},{"center":{"x":-81.65757188900866,"y":-9.9835713679486e-14,"z":-62.37991707479932},"size":20}],"targets":[{"id":0,"pos":{"x":64.112398604701,"y":-3.938998523201432e-14,"z":177.39672281302904}},{"id":1,"pos":{"x":225.68293456256902,"y":-7.964280835820452e-14,"z":-153.3206779552503}},{"id":2,"pos":{"x":-81.97010117868757,"y":-9.200712603722566e-14,"z":-97.63674146332028}},{"id":3,"pos":{"x":-78.32356331658701,"y":-1.4405792377746723e-13,"z":136.7792118439687}},{"id":4,"pos":{"x":23.664751420145926,"y":-1.3606832926258134e-13,"z":100.79727696388733}},{"id":5,"pos":{"x":170.07566094979978,"y":-2.1825684358934275e-14,"z":98.29414394600246}}]}'
  
  let myScene = JSON.parse (JSONStr);
  
  scene.obstacles = []
  myScene.obstacles.forEach (function (obs) {
  	scene.obstacles.push (new Obstacle (new THREE.Vector3 (obs.center.x, obs.center.y, obs.center.z), 30))
  })
  
  scene.targets = []
  myScene.targets.forEach (function (tt) {
  	scene.targets.push (new Target (tt.id, new THREE.Vector3 (tt.pos.x, tt.pos.y, tt.pos.z) ))
  })

}