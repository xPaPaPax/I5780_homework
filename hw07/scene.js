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


import {scene} from './threemain.js';
import {Obstacle} from './obstacle.js';
import {Target} from './target.js';

function sceneFromJSON () {
  const JSONStr = '{"obstacles":[{"center":{"x":-243.3108135386853,"y":-1.0672730907136216e-15,"z":4.806570693640424},"size":20},{"center":{"x":7.773933276790966,"y":4.577015712253907e-14,"z":-206.13046256175602},"size":20},{"center":{"x":253.98328100677202,"y":-1.669134389282951e-15,"z":7.517113013605979},"size":20},{"center":{"x":-1.5674365239940091,"y":1.170554269644076e-14,"z":203.28292227413996},"size":20},{"center":{"x":-113.55441315514655,"y":-2.7882518536928726e-14,"z":125.57170009306316},"size":20},{"center":{"x":-134.36953905930798,"y":2.04656254244728e-14,"z":-92.16898303555985},"size":20},{"center":{"x":140.99205902091495,"y":1.7332750697448054e-14,"z":-78.05976958233276},"size":20},{"center":{"x":143.4562431678473,"y":-3.538190997497601e-14,"z":159.3459565789584},"size":20}],"targets":[{"id":0,"pos":{"x":-252.3332853079915,"y":4.865577691359372e-14,"z":-219.12613877748265}},{"id":1,"pos":{"x":276.76609137612263,"y":4.678567662619134e-14,"z":-210.70395581999185}},{"id":2,"pos":{"x":214.19562155182595,"y":8.447640334236832e-15,"z":217.95521013857103}},{"id":3,"pos":{"x":-238.0135411062054,"y":-4.040655525093892e-14,"z":181.9749471714539}},{"id":4,"pos":{"x":-9.964918458216815,"y":-6.868043139189476e-15,"z":30.930916522418215}}]}';
  //const JSONStr = '{"obstacles":[{"center":{"x":2.0499001452849113,"y":-2.764725575423189e-14,"z":124.51217071257554},"size":20},{"center":{"x":-71.4394678815818,"y":6.583123534961207e-14,"z":215.52247301014768},"size":20},{"center":{"x":4.5439261313725385,"y":-6.006061118398478e-14,"z":270.4889461478381},"size":20},{"center":{"x":74.56629829593511,"y":7.025865636792847e-14,"z":195.5831413618456},"size":20},{"center":{"x":143.01156456264874,"y":1.1675016269771765e-13,"z":-13.795989220885986},"size":20},{"center":{"x":16.276286349058857,"y":-4.648769910799486e-14,"z":209.3619843800774},"size":20},{"center":{"x":-45.42685506335998,"y":1.0920512426217053e-13,"z":20.183843065940096},"size":20}],"targets":[{"id":0,"pos":{"x":7.937212129365885,"y":-3.6799002618630775e-14,"z":165.72797448087147}},{"id":1,"pos":{"x":-89.51740472415479,"y":6.023579171209541e-14,"z":240.7221108910403}},{"id":2,"pos":{"x":2.6487182678689,"y":-6.728163967526259e-14,"z":303.0095673703886}},{"id":3,"pos":{"x":107.45321612948659,"y":-4.5936587161253084e-14,"z":206.8799968220917}},{"id":4,"pos":{"x":176.11481490581087,"y":1.2548679927349508e-13,"z":-53.14230244802866}},{"id":5,"pos":{"x":-71.086727904753,"y":1.0520660952678249e-13,"z":38.19155253826909}}]}'
  
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

export {sceneFromJSON};