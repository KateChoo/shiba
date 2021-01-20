let scene, camera, renderer, cube, geometry, shiba;
    const objects = [];
    init();
    Go();
    window.addEventListener('resize', onWindowResize)

    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      camera.position.z = 1;
  
      controls = new THREE.OrbitControls(camera, renderer.domElement)
      let loader = new THREE.GLTFLoader();
      let dog = loader.load("./shiba/scene.gltf", function (gltf) {
        scene.add(gltf.scene);
        shiba = gltf.scene.children[0];
        //animate();
      });
      createTexture(geometry, 0x44aa88, 0)
    };
    
    
    function createTexture(geometry, color, x) {   //geometry, color, x, y
      geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
      const cubeMaterials = [
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load('https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UX182_CR0,0,182,268_AL_.jpg'), side: THREE.DoubleSide }),
        new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UX182_CR0,0,182,268_AL_.jpg'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://m.media-amazon.com/images/M/MV5BMzFiODE0ZDUtN2IxNC00OTI5LTg4OWItZTE2MjU4ZTk2NjM5XkEyXkFqcGdeQXVyNDYzODU1ODM@._V1_UX182_CR0,0,182,268_AL_.jpg'), side: THREE.DoubleSide }),
      ]
      const material = new THREE.MeshFaceMaterial(cubeMaterials);
      cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      cube.position.x = x;

      ambientLight()
    }
    

    function ambientLight() {
      const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.8)
      scene.add(ambientLight)
    }

    //game logic
    function animate() {
      //cube.rotation.x += 0.01;
      //cube.rotation.y += 0.005;
    };
    //draw scene
    function render() {
      renderer.render(scene, camera);
    }
    function Go() {
      requestAnimationFrame(Go);
      animate();
      render();
    };
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }; 