let scene, camera, renderer, cube, geometry, shiba;
const bg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Kyoto-Ryoan-Ji_MG_4512.jpg/1280px-Kyoto-Ryoan-Ji_MG_4512.jpg';
const forest = 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQQUQVVi3x6MaeTPJ6tjznkNpv6vUAwGIrh4hHUg7adUMVSxSrJmXrqlM0RaonFXu_BuwI-Uegnp7Pw9PdyF4k';
    function init() {
      scene = new THREE.Scene();
      //Add meshes here
      const assetPath = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2666677/';  
      const universe = new THREE.CubeTextureLoader()
      .setPath(`${assetPath}skybox1_`)
      .load([
      'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'
      ]);
      scene.background = universe;
      //END
      //Add
      //可換背景圖:
      //可以森林背景
      /*
      const b_ground = new THREE.TextureLoader().
        load(bg)
      scene.background = b_ground;
      */
      //Add
      /*
      const cubeMap = new THREE.CubeTextureLoader().
      load([
        'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        // wall, wall, wall, wall, wall,
      ]);
      scene.background = cubeMap;
      //END
      */
      //
      //  geometry = new THREE.BoxGeometry(1, 1, 1);
      //   const cubeMaterials = [
      //     new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load('https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UX182_CR0,0,182,268_AL_.jpg'), side: THREE.DoubleSide }),
      //     new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UX182_CR0,0,182,268_AL_.jpg'), side: THREE.DoubleSide }),
      //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg'), side: THREE.DoubleSide }),
      //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'), side: THREE.DoubleSide }),
      //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'), side: THREE.DoubleSide }),
      //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://m.media-amazon.com/images/M/MV5BMzFiODE0ZDUtN2IxNC00OTI5LTg4OWItZTE2MjU4ZTk2NjM5XkEyXkFqcGdeQXVyNDYzODU1ODM@._V1_UX182_CR0,0,182,268_AL_.jpg'), side: THREE.DoubleSide }),
      //     //new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://www.youtube.com/watch?v=B-nZ47WGkoM'), side: THREE.DoubleSide }),
      //   ]
      //   const material = new THREE.MeshFaceMaterial(cubeMaterials);
      //   cube = new THREE.Mesh(geometry, material);
      //   scene.add(cube);
      //
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
    };
    
    function ambientLight() {
      const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.8)
      scene.add(ambientLight)
    }

    function animate() {
      //cube.rotation.x += 0.01;
      //cube.rotation.y += 0.005;
      b_ground.rotation.x += 0.01
    };

    // function render() {
    //   renderer.render(scene, camera);
    // }
    function Go() {
      requestAnimationFrame(Go);
      //animate();
      //render();
      renderer.render(scene, camera);
    };
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }; 
    function createTexture(geometry, color, x) {   
      geometry = new THREE.BoxGeometry(0.05, 0.05, 0.05);
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
    // function pageFullyLoaded(){
    //   createTexture(geometry, 0x44aa88, 0)
    // }
    init();
    Go()
    window.addEventListener('resize', onWindowResize)
    //window.addEventListener('load', pageFullyLoaded, false)
    setTimeout(function(){createTexture(geometry, 0x44aa88, 0)}, 5000)
    // Promise.all([init()])
    //       .then(function(){Go()})
    //       .then(function(){createTexture(geometry, 0x44aa88, 0)})
          
    