//script.js
import { DoubleSide } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Wait for app.js to signal that it is ready before running
document.addEventListener('appReady', () => {
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff); // This sets the background color to white

    // Append renderer to the threejs-container
    document.getElementById('threejs-container').appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040); // Soft lighting
    scene.add(ambientLight);

    const backLight = new THREE.PointLight(0xffffff, 0.8);
    backLight.position.set(-10, 5, -5); // Position it to light the back face
    scene.add(backLight);

    const controls = new OrbitControls(camera, renderer.domElement);

    // Load textures using TextureLoader
    const textureLoader = new THREE.TextureLoader();
    const textureEnlighten = textureLoader.load('textures/bulb3-removebg-preview.png');
    const textureGlobe = textureLoader.load('textures/globe2.jpeg');
    const textureBook = textureLoader.load('textures/realbooks-removebg-preview (1).png');
    const textureEmpower = textureLoader.load('textures/empower1.png');

    // Rotating Globe
    const globeGeometry = new THREE.SphereGeometry(2.5, 32, 32);
    const globeMaterial = new THREE.MeshStandardMaterial({ map: textureGlobe });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Educate Icon (Book)
    const educateGeometry = new THREE.PlaneGeometry(1.5, 1.8);
    const educateMaterial = new THREE.MeshStandardMaterial({ map: textureBook, transparent: true, side: DoubleSide });
    const educate = new THREE.Mesh(educateGeometry, educateMaterial);
    educate.position.set(-4, 1, 0);
    scene.add(educate);

    // Add Educate heading in HTML
    const educateHeading = document.createElement('div');
    educateHeading.textContent = "Educate";
    educateHeading.style.position = 'absolute';
    educateHeading.style.color = 'black'; // Black text
    educateHeading.style.fontSize = '16px';
    educateHeading.style.fontWeight = 'bold';
    educateHeading.style.transform = 'translate(-50%, -50%)'; // Center the text
    document.body.appendChild(educateHeading);

    // Function to synchronize text position with 3D object
    function updateEducateHeadingPosition() {
        const vector = new THREE.Vector3();
        educate.getWorldPosition(vector); // Get the 3D position of 'educate'

        // Convert 3D position to 2D screen coordinates
        vector.project(camera);

        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (vector.y * 0.8 + 0.5) * window.innerHeight;

        educateHeading.style.left = `${x}px`; // Update position
        educateHeading.style.top = `${y + 20}px`; // Slightly below the image
    }

    // Empower Icon
    const empowerGeometry = new THREE.PlaneGeometry(1.5, 1.8);
    const empowerMaterial = new THREE.MeshStandardMaterial({ map: textureEmpower, transparent: true, side: DoubleSide });
    const empower = new THREE.Mesh(empowerGeometry, empowerMaterial);
    empower.position.set(4, 1, 0);
    scene.add(empower);

    // Add empower heading in HTML
    const empowerHeading = document.createElement('div');
    empowerHeading.textContent = "Empower";
    empowerHeading.style.position = 'absolute';
    empowerHeading.style.color = 'black'; // Black text
    empowerHeading.style.fontSize = '16px';
    empowerHeading.style.fontWeight = 'bold';
    empowerHeading.style.transform = 'translate(-50%, -50%)'; // Center the text
    document.body.appendChild(empowerHeading);

    // Function to synchronize text position with 3D object
    function updateEmpowerHeadingPosition() {
        const vector = new THREE.Vector3();
        empower.getWorldPosition(vector); // Get the 3D position of 'empower'

        // Convert 3D position to 2D screen coordinates
        vector.project(camera);

        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (vector.y * 0.8 + 0.5) * window.innerHeight;

        empowerHeading.style.left = `${x}px`; // Update position
        empowerHeading.style.top = `${y + 20}px`; // Slightly below the image
    }

    // Enlighten Icon (Light Bulb)
    const enlightenGeometry = new THREE.PlaneGeometry(1.5, 1.8);
    const enlightenMaterial = new THREE.MeshStandardMaterial({ map: textureEnlighten, transparent: true, side: DoubleSide });
    const enlighten = new THREE.Mesh(enlightenGeometry, enlightenMaterial);
    enlighten.position.set(0, 0, 2);
    scene.add(enlighten);

    // Add Enlighten heading in HTML
    const enlightenHeading = document.createElement('div');
    enlightenHeading.textContent = "Enlighten";
    enlightenHeading.style.position = 'absolute';
    enlightenHeading.style.color = 'black'; // Black text
    enlightenHeading.style.fontSize = '16px';
    enlightenHeading.style.fontWeight = 'bold';
    enlightenHeading.style.transform = 'translate(-50%, -50%)'; // Center the text
    document.body.appendChild(enlightenHeading);

    // Function to synchronize text position with 3D object
    function updateEnlightenHeadingPosition() {
        const vector = new THREE.Vector3();
        enlighten.getWorldPosition(vector); // Get the 3D position of 'enlighten'

        // Convert 3D position to 2D screen coordinates
        vector.project(camera);

        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (vector.y * -0.2 + 0.5) * window.innerHeight;

        enlightenHeading.style.left = `${x}px`; // Update position
        enlightenHeading.style.top = `${y + 20}px`; // Slightly below the image
    }

    // Camera Position
    camera.position.z = 8;

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);

        // Rotate Globe
        globe.rotation.y += 0.01;

        // Animate Educate (Floating Effect)
        educate.position.x = -4 + Math.sin(Date.now() * 0.002) * 0.2;

        // Animate Empower (Floating Effect)
        empower.position.x = 4 + Math.sin(Date.now() * 0.002) * 0.2;

        // Animate Enlighten (Floating Effect)
        enlighten.position.y = 3.5 + Math.sin(Date.now() * 0.002) * 0.2;

        // Update educate, enlighten, and empower headings position
        updateEducateHeadingPosition();
        updateEnlightenHeadingPosition();
        updateEmpowerHeadingPosition();

        renderer.render(scene, camera);
    }

    animate();

    // Handle Resizing
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
});
