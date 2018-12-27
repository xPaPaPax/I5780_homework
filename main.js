/////////////////////////////////////////////////////////
// global variables
var camera, renderer;
var agent;

// program starts here ...
init();
animate();

function init() {

  initThree();
  
  //scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.z = 500;
  camera.position.y = 400;


  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);

  let controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);

  /////////////////////////////////////////////////////////////////////

  
  // scene grid [-400,400]x[-400,400]
  var gridXZ = new THREE.GridHelper(800, 80, 'red', 'white');
  scene.add(gridXZ);

  // in scene.js
  sceneFromJSON ( );  // using LevelDesigner
  
  //////////////////////////////////////////////////////////////////////////	
  	let size = 10; // halfsize of agent
//    agent = new Agent(new THREE.Vector3(-400 + 400 * Math.random(), 0, -400 + 400 * Math.random()), mesh);
    agent = new Agent(new THREE.Vector3(50,0,-50), size);

}


function animate() {

  agent.update(0.01)
  console.log(agent.target);
  // check agent crossing obstacles ...
  scene.obstacles.forEach ( function (obs) { obs.checkCollision (agent)} );

  if (scene.targets.length > 0)
  	requestAnimationFrame(animate);
  else
  	alert ('game over')
	
  render();
}

function render() {
  renderer.render(scene, camera);
}

function startTimer(duration, display) {
    var timer = duration, minutes = 0, seconds = 0, t = false;
	
	setInterval(function () {
		if(scene.targets.length > 0) {
			//
			if(seconds === 59) {
				minutes ++;
				seconds = 0;
				t = false;
			}
			else
				seconds ++;
			//
			if(t === false) {
				minutes = minutes < 10 ? "0" + minutes : minutes;
				t = true;
			}
			seconds = seconds < 10 ? "0" + seconds : seconds;
		}
		display.textContent = minutes + ":" + seconds;
	}, 1000);
}

window.onload = function () {
    var Minutes = 0,
        display = document.querySelector('#time');
	
    startTimer(Minutes, display);
};
