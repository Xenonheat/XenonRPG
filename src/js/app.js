const three = require("three")

const cameraAngle = window.innerWidth / window.innerHeight;
const nearClipVal = 0.1
const farClipVal = 1000

const three = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, cameraAngle, nearClipVal, farClipVal)
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth/2, window.innerHeight/2)
document.body.appendChild(renderer.domElement)