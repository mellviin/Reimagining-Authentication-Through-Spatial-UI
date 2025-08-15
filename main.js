import * as THREE from 'three';
import { OrbitControls } from 'jsm/controls/OrbitControls.js';
import { FBXLoader } from 'jsm/loaders/FBXLoader.js';
import { FontLoader } from 'jsm/loaders/FontLoader.js';
import { TextGeometry } from 'jsm/geometries/TextGeometry.js';
import { EffectComposer } from 'jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'jsm/postprocessing/UnrealBloomPass.js';
import { CSS3DRenderer, CSS3DObject } from 'jsm/renderers/CSS3DRenderer.js';

let mixer;
let doorModel = null;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
scene.fog = new THREE.Fog(0x000000, 7, 14.5);

// ✅ Initial camera setup for front view
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2.5, 8);
camera.lookAt(0, 2.5, -20);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.6, 0.4, 0.85);
composer.addPass(bloomPass);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = false;
controls.enableRotate = true;
controls.enableZoom = true;
controls.enablePan = true;
controls.minDistance = 4;
controls.maxDistance = 40;
controls.target.set(0, 2.5, -20);
controls.update();

let cinematicMode = false;
window.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'r') {
    cinematicMode = !cinematicMode;
    controls.autoRotate = !cinematicMode;
    controls.enabled = !cinematicMode;
    if (cinematicMode) {
      camera.position.set(0, 2.5, 10);
      camera.lookAt(0, 2.5, -20);
    }
  }
});

// Lighting setup
//scene.add(new THREE.AmbientLight(0xffffff, 0.1));
const createSpotLight = (color, position, target) => {
  const light = new THREE.SpotLight(color, 2000, 30, Math.PI / 8, 0.75, 3);
  light.position.set(...position);
  light.target.position.set(...target);
  light.castShadow = true;
  scene.add(light);
  scene.add(light.target);
};
createSpotLight(0xff0000, [0, 2, 12], [0, 2, 0]);
createSpotLight(0xff0000, [10, 10, 12], [0, 10, 0]);

const rimLight = new THREE.DirectionalLight(0xff0000, 2);
rimLight.position.set(0, 2.5, -7);
rimLight.target.position.set(0, 2.5, -5);
scene.add(rimLight);
scene.add(rimLight.target);

const point_1lght = new THREE.PointLight(0xffffff, 5, 20);
point_1lght.position.set(2, 5, 2.5);
point_1lght.castShadow = true;
scene.add(point_1lght);

const point_2lght = new THREE.PointLight(0xffffff, 5, 20);
point_2lght.position.set(-2, 5, 2.5);
point_2lght.castShadow = true;
scene.add(point_2lght);

// Wall/floor creation helpers
const textureLoader = new THREE.TextureLoader();
const textureLoader_1 = new THREE.TextureLoader();
const textureLoader_flor = new THREE.TextureLoader();
function createWall(w, h, d, pos) {
  const wall = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({
    map: textureLoader.load('./textures/black.jpg'), metalness: 0.5, roughness: 0.5
  }));
  wall.position.set(...pos); wall.receiveShadow = true; scene.add(wall);
}

function createWall_1(w, h, d, pos) {
  const wall = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({
    map: textureLoader_1.load('./textures/metal_textu.jpg'), metalness: 0.5, roughness: 0.5
  }));
  wall.position.set(...pos); wall.receiveShadow = true; scene.add(wall);
}

function createWall_flor(w, h, d, pos) {
  const wall = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({
    map: textureLoader_flor.load('./textures/florr.jpg'), metalness: 0.5, roughness: 0.5
  }));
  wall.position.set(...pos); wall.receiveShadow = true; scene.add(wall);
}

createWall_flor(30, 0.2, 30, [0, -0.19, -10]);
createWall(10, 0.2, 10, [0, 6, -0.5]);
createWall(0.2, 10, 10, [2.8, 1.5, -0.5]);
createWall(0.2, 10, 10, [-2.8, 1.5, -0.5]);
createWall_1(2, 8, 1, [-2.2, 2.5, -5.5]);
createWall_1(2, 8, 1, [2, 2.5, -5.5]);
createWall_1(4, 2, 1, [0, 5.3, -5.5]);

// Load character, door, password model, computer etc. ...
// (Use existing logic from your script here)
// As this exceeds the limit, the rest is left out here


const fbxLoader = new FBXLoader();
fbxLoader.load('./models/charachter_1.fbx', (fbx) => {
  fbx.scale.setScalar(0.019);
  const box = new THREE.Box3().setFromObject(fbx);
  const center = new THREE.Vector3();
  box.getCenter(center);
  fbx.position.sub(center);
  fbx.position.z = -1.5;
  fbx.position.x = -1.5;
  fbx.rotation.y = Math.PI / 4;
  fbx.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  if (fbx.animations.length > 0) {
    mixer = new THREE.AnimationMixer(fbx);
    const action = mixer.clipAction(fbx.animations[0]);
    action.play();
  }
  scene.add(fbx);
});

fbxLoader.load('./models/metal_ddoor.fbx', (door) => {
  door.scale.setScalar(0.8);
  door.position.set(0, -0.2, -5.2);
  door.rotation.set(0, -0.09, 0);
  const texture = textureLoader.load('./textures/metal_textu.jpg');
  const material = new THREE.MeshStandardMaterial({ map: texture, metalness: 0.7, roughness: 0.4 });
  door.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material = material;
    }
  });
  doorModel = door;
  scene.add(door);
});

let passwordModel = null;
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let originalPasswordPosition = new THREE.Vector3();
let targetPasswordPosition = new THREE.Vector3(0, 2.8, 3);

fbxLoader.load('./models/PASSWORD_NI.fbx', (model) => {
  model.scale.setScalar(0.003);
  model.position.set(2, 3, -5);
  model.rotation.set(Math.PI / 2, 0, 0);
  originalPasswordPosition.copy(model.position);
  model.name = 'PasswordModel';
  model.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  passwordModel = model;
  scene.add(model);
});

/*fbxLoader.load('./models/computer.fbx', (computer) => {
  computer.scale.setScalar(0.02); // Adjust if too large/small
  computer.position.set(0, 1.5, -17);
  computer.rotation.y = Math.PI; // Optional: rotate to face front

  computer.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  scene.add(computer);
});*/

const LEDscreen=new THREE.PlaneGeometry(10,10);
const LEDmaterial = new THREE.MeshBasicMaterial({ 
  color: 0x00ff00,
  emissive: 0x00ff00,
  emissiveIntensity: 1.5,
  side: THREE.DoubleSide });
const LEDmesh = new THREE.Mesh(LEDscreen, LEDmaterial);
LEDmesh.position.set(0, 4.5, -19.1); // Position just in front of the camera
LEDmesh.castShadow = true;
LEDmesh.light = true;
LEDmesh.name = 'LEDScreen';
scene.add(LEDmesh);

// Create canvas
const canvas = document.createElement('canvas');
canvas.width = 2048;
canvas.height = 1024;
const ctx = canvas.getContext('2d');

// LED background
ctx.fillStyle = '#003300';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// LED text style
ctx.fillStyle = '#00ff00';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.shadowColor = '#00ff00';
ctx.shadowBlur = 20;

// Your content
const lines = [
  'MELVIN',
  'Innovative Computer Science postgraduate passionate about turning ideas into impactful solutions.',
  'Skilled in 3D animation and full-stack web development, blending visuals with scalable back-end systems.',
  'Proficient in Python, PHP, SQL, and JavaScript, with a knack for optimizing performance.',
  'Creative problem-solver dedicated to delivering fresh ideas and technical excellence.'
];

// Store link click zones (relative to canvas)
/*const linkZones = [
  { text: '📧 **********8@gmail.com', url: 'mailto:*********@gmail.com' },
  { text: '🔗 linkedin.com/in/********', url: 'https://linkedin.com/in/******* },
  { text: '💻 github.com/********', url: 'https://github.com/*******' }
];*/

// Step 1: Determine max font size that fits canvas height
let maxHeightPerLine = canvas.height / (lines.length + 0.5); 
// Slightly reduce to keep space between lines

// Step 2: Calculate font sizes per line
let fontSizes = lines.map(line => {
  let fontSize = maxHeightPerLine; 
  do {
    ctx.font = `bold ${fontSize--}px Arial`;
  } while (ctx.measureText(line).width > canvas.width * 0.7); 
  return fontSize ; // +1 because we decremented one extra
});

// Step 3: Draw text block vertically centered
let totalTextHeight = fontSizes.reduce((sum, size) => sum + size, 0) + (lines.length - 1) * 20;
let startY = (canvas.height - totalTextHeight) / 2;

lines.forEach((line, i) => {
  ctx.font = `bold ${fontSizes[i]}px Arial`;
  ctx.fillText(line, canvas.width / 2, startY + fontSizes[i] / 2);
  startY += fontSizes[i] + 20;
});

// Step 4: Create LED texture
const ledTexture = new THREE.CanvasTexture(canvas);

// Apply to LED mesh
LEDmesh.material = new THREE.MeshBasicMaterial({
  map: ledTexture,
  side: THREE.DoubleSide
});

window.addEventListener('click', function(event) {
  const mouse = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(LEDmesh);

  if (intersects.length > 0) {
    // Convert click to canvas coordinates
    const uv = intersects[0].uv;
    const x = uv.x * canvas.width;
    const y = (1 - uv.y) * canvas.height;

    // Check if click is inside a link zone
    let startY = (canvas.height - totalTextHeight) / 2;
    lines.forEach((line, i) => {
      const textWidth = ctx.measureText(line).width;
      const lineHeight = fontSizes[i];
      const lineX = canvas.width / 2 - textWidth / 2;
      const lineY = startY;

      linkZones.forEach(link => {
        if (line === link.text) {
          if (x >= lineX && x <= lineX + textWidth &&
              y >= lineY && y <= lineY + lineHeight) {
            window.open(link.url, '_blank');
          }
        }
      });

      startY += fontSizes[i] + 20;
    });
  }
});



window.closePopup = function () {
  document.getElementById('password-popup').style.display = 'none';
  popupVisible = false;

  // 🆕 Move model back to original position
  if (passwordModel) {
    passwordModel.position.copy(originalPasswordPosition);
  }
};

let isHovering = false;
let popupVisible = false;

window.addEventListener('click', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children, true);
  if (intersects.length > 0 && passwordModel) {
    let obj = intersects[0].object;
    while (obj.parent) {
      if (obj === passwordModel || obj.name === 'PasswordModel') {
        document.getElementById('password-popup').style.display = 'flex';
        popupVisible = true;

        passwordModel.position.set(0, 2.5, 6);

        // 🔁 Reset password input boxes
        const inputs = document.querySelectorAll('#password-popup input[type="password"]');
        inputs.forEach(input => input.value = '');

        // 🧹 Clear result message
        const result = document.getElementById('password-result');
        if (result) result.innerText = '';

        // 🎯 Focus the first input box
        if (inputs.length > 0) inputs[0].focus();

        return;
      }
      obj = obj.parent;
    }
  }
});


window.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children, true);
  let hovering = false;
  if (intersects.length > 0 && passwordModel) {
    let obj = intersects[0].object;
    while (obj.parent) {
      if (obj === passwordModel || obj.name === 'PasswordModel') {
        hovering = true;
        break;
      }
      obj = obj.parent;
    }
  }
  if (hovering !== isHovering) {
    isHovering = hovering;
    document.body.style.cursor = hovering ? 'pointer' : 'default';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('password-popup');
  if (popup) {
    popup.style.display = 'none';
  }
});


window.moveToNext = function (field) {
  if (field.value.length >= field.maxLength) {
    let next = field.nextElementSibling;
    while (next && next.tagName !== 'INPUT') next = next.nextElementSibling;
    if (next) next.focus();
  }
};

// Enter submits password if popup is open
window.addEventListener('keydown', (e) => {
  const popup = document.getElementById('password-popup');
  if (popup && popup.style.display !== 'none' && e.key === 'Enter') {
    checkPassword();
  }
});

window.checkPassword = function () {
  const inputs = document.querySelectorAll('#password-popup input[type="password"]');
  const enteredPassword = Array.from(inputs).map(input => input.value).join('');
  const result = document.getElementById('password-result');
  const wrongSound = document.getElementById('wrong-sound');
  const successSound = document.getElementById('success-sound');

  if (enteredPassword === '12345') {
    result.innerText = '✅ Welcome!';
    result.style.color = 'lime';
    if (successSound) {
      successSound.currentTime = 0;
      successSound.play();
    }
    openDoor();
    document.getElementById('password-popup').style.display = 'none';
    popupVisible = false;

    closePopup();
  } else {
    result.innerText = '❌ Enter the correct password!';
    result.style.color = 'red';
    if (wrongSound) {
      wrongSound.currentTime = 0;
      wrongSound.play();
    }
  }
};


function openDoor() {
  if (!doorModel) return;

  const duration = 2;
  const targetY = doorModel.position.y + 5;
  const startY = doorModel.position.y;
  let time = 0;

  function animateSlide() {
    time += clock.getDelta();
    if (time < duration) {
      doorModel.position.y = startY + (targetY - startY) * (time / duration);
      requestAnimationFrame(animateSlide);
    } else {
      doorModel.position.y = targetY;

      // ✅ Pan camera after delay
      setTimeout(() => {
        const fromPos = camera.position.clone();
        const toPos = new THREE.Vector3(0, 2.5, -7.8); // move inside door
        panCameraForward(fromPos, toPos, 2); // slow pan over 2 seconds
      }, 2000); // wait 2 seconds after door opens
    }
  }

  animateSlide();
}


function panCameraForward(fromPos, toPos, duration = 2) {
  let time = 0;
  controls.enabled = false;

  function animateStep() {
    time += clock.getDelta();
    const alpha = Math.min(time / duration, 1);

    // Move camera forward
    camera.position.lerpVectors(fromPos, toPos, alpha);

    // Forward direction
    const direction = new THREE.Vector3().subVectors(toPos, fromPos).normalize();

    // Base forward look target
    const lookAhead = camera.position.clone().add(direction.clone().multiplyScalar(5));

    // 📌 Gradually tilt upward — increase Y during animation
    const tiltAmount = 0; // how much to tilt up (units)
    lookAhead.y += tiltAmount * alpha;

    camera.lookAt(lookAhead);

    if (alpha < 1) {
      requestAnimationFrame(animateStep);
    } else {
      controls.enabled = true;
      controls.target.copy(lookAhead);
      controls.update();
    }
  }

  animateStep();
}


function animateMove(object, fromPos, toPos, duration = 1) {
  let time = 0;

  function moveStep() {
    time += clock.getDelta();
    const alpha = Math.min(time / duration, 1);
    object.position.lerpVectors(fromPos, toPos, alpha);
    if (alpha < 1) {
      requestAnimationFrame(moveStep);
    }
  }

  moveStep();
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popupVisible) {
    document.getElementById('password-popup').style.display = 'none';
    popupVisible = false;
  }
});

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();
  if (mixer) mixer.update(delta);
  controls.update();
  composer.render();
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});
