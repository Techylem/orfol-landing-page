var camera, scene, geometry, material, mesh, renderer = new THREE.WebGLRenderer();
var demo = Sketch.create({
    type: Sketch.WEBGL,
    // Use existing element
    element: renderer.domElement,
    // Use existing context
    context: renderer.context,
    setup: function() {
        camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 1, 10000 );
        camera.position.z = 1000;
        scene = new THREE.Scene();
        geometry = new THREE.CubeGeometry( 200, 200, 200 );
        material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, wireframe: true } );
        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
    },
    resize: function() {
        camera.aspect = this.width / this.height;
        camera.updateProjectionMatrix();
        renderer.setSize( this.width, this.height );
    },
    draw: function() {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
        renderer.render( scene, camera );
    }
});