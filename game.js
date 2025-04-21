// Obtener el canvas y el contexto de Three.js
const canvas = document.getElementById('game-canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Configuración de la escena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Crear el personaje del paladín (cuerpo y armadura)
const paladinGroup = new THREE.Group();

// Torso
const torsoGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2);
const torsoMaterial = new THREE.MeshBasicMaterial({ color: 0xCCCCCC });  // Color de la armadura
const torso = new THREE.Mesh(torsoGeometry, torsoMaterial);
torso.position.y = 1; // Colocamos el torso en la posición correcta
paladinGroup.add(torso);

// Cabeza (esfera)
const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const headMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 });  // Color dorado (piel)
const head = new THREE.Mesh(headGeometry, headMaterial);
head.position.y = 2.5;
paladinGroup.add(head);

// Piernas (cilindros)
const legGeometry = new THREE.CylinderGeometry(0.3, 0.3, 1);
const legMaterial = new THREE.MeshBasicMaterial({ color: 0xCCCCCC });
const leg1 = new THREE.Mesh(legGeometry, legMaterial);
const leg2 = new THREE.Mesh(legGeometry, legMaterial);
leg1.position.set(-0.5, 0.5, 0);  // Pierna izquierda
leg2.position.set(0.5, 0.5, 0);   // Pierna derecha
paladinGroup.add(leg1);
paladinGroup.add(leg2);

// Brazos (cilindros)
const armGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1.5);
const armMaterial = new THREE.MeshBasicMaterial({ color: 0xCCCCCC });
const arm1 = new THREE.Mesh(armGeometry, armMaterial);
const arm2 = new THREE.Mesh(armGeometry, armMaterial);
arm1.position.set(-1.2, 1.5, 0);  // Brazo izquierdo
arm2.position.set(1.2, 1.5, 0);   // Brazo derecho
paladinGroup.add(arm1);
paladinGroup.add(arm2);

// Escudo (cylinder plano)
const shieldGeometry = new THREE.CylinderGeometry(1, 1, 0.1, 32);
const shieldMaterial = new THREE.MeshBasicMaterial({ color: 0x4B0082 });
const shield = new THREE.Mesh(shieldGeometry, shieldMaterial);
shield.rotation.x = Math.PI / 2;
shield.position.set(1.5, 2, 0);  // Colocar escudo en el brazo derecho
paladinGroup.add(shield);

// Espada (cylinder largo)
const swordGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2);
const swordMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
const sword = new THREE.Mesh(swordGeometry, swordMaterial);
sword.position.set(-1.5, 2.5, 0); // Colocar espada en el brazo izquierdo
paladinGroup.add(sword);

// Agregar el personaje a la escena
scene.add(paladinGroup);

// Posicionar la cámara
camera.position.z = 10;

// Función de animación del juego
function animate() {
    requestAnimationFrame(animate);

    // Girar el paladín lentamente para verlo en 3D
    paladinGroup.rotation.y += 0.01;

    // Renderizar la escena
    renderer.render(scene, camera);
}

// Ejecutar la animación
animate();
