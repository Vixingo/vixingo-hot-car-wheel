import * as THREE from "https://unpkg.com/three/build/three.module.js";

// Create a new Three.js scene
const scene = new THREE.Scene();
// Create a camera and set its position
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
// Create a renderer and set its size
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
    antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff);

camera.position.set(0, 0, 50);

renderer.render(scene, camera);

// Create a white AmbientLight light
const light = new THREE.AmbientLight(0xfff90f);

// Set the position of the light
light.position.set(100, 50, 0);

// Add the light to the scene
scene.add(light);
// texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("wp.jpg");
const texture2 = textureLoader.load("vixingo.png");
const texture3 = textureLoader.load("wx.jpg");

// Create three cylinders with different positions
const cylinder1 = new THREE.Mesh(
    new THREE.CylinderGeometry(20, 20, 10, 32),
    new THREE.MeshPhongMaterial({ map: texture })
);
cylinder1.position.set(-25, 0, 0);
// cylinder1.lookAt(new THREE.Vector3(0, 0, 60));
cylinder1.rotation.z = Math.PI / 2;
scene.add(cylinder1);

const cylinder2 = new THREE.Mesh(
    new THREE.CylinderGeometry(5, 5, 60, 32),
    new THREE.MeshPhongMaterial({
        map: texture2,
    })
);
cylinder2.position.set(0, 0, 0);
// cylinder2.lookAt(new THREE.Vector3(0, 0, 30));
cylinder2.rotation.z = Math.PI / 2;
scene.add(cylinder2);

const cylinder3 = new THREE.Mesh(
    new THREE.CylinderGeometry(20, 20, 10, 32),
    new THREE.MeshPhongMaterial({ map: texture3 })
);
cylinder3.position.set(25, 0, 0);
// cylinder3.lookAt(new THREE.Vector3(0, 0, 30));
cylinder3.rotation.z = Math.PI / 2;
scene.add(cylinder3);

renderer.setSize(window.innerWidth, window.innerHeight);

// Add the renderer to the DOM
document.body.appendChild(renderer.domElement);

// // Listen to the scroll event
// let lastScroll = 0;
// window.addEventListener("scroll", (event) => {
//     event.preventDefault();
//     const currentScroll = window.scrollY;
//     if (currentScroll > lastScroll) {
//         // Scrolling down, rotate the cylinders down
//         cylinder1.rotation.x += 0.1;
//         cylinder2.rotation.x += 0.1;
//         cylinder3.rotation.x += 0.1;
//     } else {
//         // Scrolling up, rotate the cylinders up
//         cylinder1.rotation.x -= 0.1;
//         cylinder2.rotation.x -= 0.1;
//         cylinder3.rotation.x -= 0.1;
//     }
//     lastScroll = currentScroll;
// });

// Set up the mouse wheel event listener
var scrollAmount = 0;
var lastScrollAmount = 0;
window.addEventListener("wheel", function (event) {
    scrollAmount += event.deltaY * 0.01;
});

// Render the scene
function animate() {
    requestAnimationFrame(animate);
    // Update the rotation of the cylinder based on the scroll amount

    cylinder1.rotation.x = scrollAmount * 2;
    cylinder2.rotation.x = scrollAmount * 2;
    cylinder3.rotation.x = scrollAmount * 2;

    // cylinder1.rotation.x += 0.1;
    // cylinder2.rotation.x += 0.1;
    // cylinder3.rotation.x += 0.1;
    renderer.render(scene, camera);

    // cylinder1.rotation.x += 0.001;
    // cylinder2.rotation.x += 0.001;
    // cylinder3.rotation.x += 0.001;
}
animate();

// const geometry = new THREE.CylinderGeometry(10, 10, 20, 12);
// const material = new THREE.MeshStandardMaterial({
//     color: 0xffff00,
// });

// const cylinder = new THREE.Mesh(geometry, material);
// scene.add(cylinder);

// // light

// // const pointLight = new THREE.pointLight(0xffffff);
// // pointLight.position.set(100, 100, 100);

// const light = new THREE.AmbientLight(0x404040); // soft white light
// scene.add(light);

// const lighthelper = new THREE.lighthelper(pointLight);

// scene.add(lighthelper);

// // grid

// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper);

// // animate
// function animate() {
//     requestAnimationFrame(animate);
//     cylinder.rotation.y += 0.001;

//     renderer.render(scene, camera);
// }

// animate();

// document.body.appendChild(renderer.domElement);
