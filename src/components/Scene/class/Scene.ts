import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as TWEEN from "@tweenjs/tween.js";

interface SceneProps {
  rendererContainer: any;
  setSectionChangeAllowance: (isAllowed: boolean) => void;
}

export class Scene {
  _rendererContainer: HTMLDivElement;
  _scene: THREE.Scene;
  _canvas: any;
  _camera: THREE.PerspectiveCamera;
  _renderer: THREE.WebGLRenderer;
  _ratio: number;
  _model: any;

  setSectionChangeAllowance;

  _scrollY: number;
  _cursor: any;
  _cameraGroup: any;

  setInıtialization: any;

  _introFinished: boolean;

  plight1: any;

  constructor({ rendererContainer, setSectionChangeAllowance }: SceneProps) {
    this._rendererContainer = rendererContainer;
    this._canvas = document.createElement("canvas");
    this._rendererContainer.appendChild(this._canvas);

    this._renderer = new THREE.WebGLRenderer({
      canvas: this._canvas,
      antialias: true,
      alpha: true,
    });
    this._renderer.setSize(window.innerWidth, window.innerHeight);

    this._scene = new THREE.Scene();
    this.setSectionChangeAllowance = setSectionChangeAllowance;

    this._ratio = window.innerWidth / window.innerHeight;
    this._cameraGroup = new THREE.Group();

    this._camera = new THREE.PerspectiveCamera(45, this._ratio);
    this._camera.position.z = -10;

    this._cameraGroup.add(this._camera);

    this._scene.add(this._cameraGroup);

    this._camera.lookAt(0, 0, 0);

    this._scrollY = 0;

    this._introFinished = false;
  }

  async init() {
    await this.initLights();
    await this.loadModal();
    setTimeout(() => {
      this.animateIntro();
    }, 1000);
  }

  setPosition() {
    this._model.position.x > 10 && (this._model.position.x = 10);
    this._model.position.x < -10 && (this._model.position.x = -10);
  }

  animate() {
    this._renderer.render(this._scene, this._camera);
    TWEEN.update();
    this.setPosition();

    requestAnimationFrame(this.animate.bind(this));
  }

  initLights() {
    const pLight1 = new THREE.PointLight(0x133fff, 87, 10, 2);
    pLight1.position.set(4.719, -3.882, -5.647);
    this._scene.add(pLight1);

    this.plight1 = pLight1;
    const pLight2 = new THREE.PointLight(0xfff2ff, 50, 10, 2);
    pLight2.position.set(-1, 3, -2);
    this._scene.add(pLight2);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    this._scene.add(ambientLight);
  }

  loadModal() {
    return new Promise((resolve) => {
      const loader = new GLTFLoader();

      loader.load("/drone/scene.gltf", (scene) => {
        this._model = scene.scene;

        this._model.scale.set(5, 5, 5);
        this._model.position.y = 0;
        this._model.position.z = 30;

        this._model.position.x = 0;
        this._model.rotation.set(0, 0, 0);

        this._scene.add(this._model);
        setTimeout(() => {
          resolve(this._model);
        }, 1000);
      });
    });
  }

  animateIntro() {
    const rotation = new TWEEN.Tween(this._model.rotation)
      .to({ y: 0.794, z: -1.374, x: 1.444 })
      .duration(4000)
      .delay(2)
      .easing(TWEEN.Easing.Cubic.Out)
      .onStart(() => this.setSectionChangeAllowance(false))
      .onComplete(() => this.setSectionChangeAllowance(true));

    const position = new TWEEN.Tween(this._model.position)
      .to({ x: 0, y: 0, z: 10 })
      .duration(4000)
      .delay(2)
      .easing(TWEEN.Easing.Cubic.Out);

    position.start();
    rotation.start();
  }
  animateLeft() {
    const position = new TWEEN.Tween(this._model.position)
      .to({ x: -5 })
      .duration(1400)
      .easing(TWEEN.Easing.Elastic.Out)
      .onStart(() => this.setSectionChangeAllowance(false));

    position.start();
  }

  animateRight() {
    const rotation = new TWEEN.Tween(this._model.rotation)
      .to({ y: -1.2, z: -1, x: -0.3 })
      .duration(1500)
      .easing(TWEEN.Easing.Elastic.Out)
      .onStart(() => this.setSectionChangeAllowance(false))
      .onComplete(() => this.setSectionChangeAllowance(true));

    rotation.start();
  }

  animateCategoryChange(selectedCategory: string | null) {
    if (selectedCategory !== null && this._model !== undefined) {
      const HP = "50x Horse Power";
      const SC = "Security";
      const CY = "Customizabilty";
      const IN = "İnitial";

      let rotationValue;

      selectedCategory === IN &&
        (rotationValue = { y: 0.794, z: -1.374, x: 1.444 });
      selectedCategory === HP && (rotationValue = { z: 0.3, y: 0.636, x: 0.3 });
      selectedCategory === CY &&
        (rotationValue = { z: 0.829, y: -0.759, x: 2.329 });
      selectedCategory === SC &&
        (rotationValue = { z: 1.8, y: 0.035, x: 1.712 });

      const rotation = new TWEEN.Tween(this._model.rotation)
        .to(rotationValue)
        .duration(3000)
        .easing(TWEEN.Easing.Exponential.Out)
        .onStart(() => this.setSectionChangeAllowance(false));

      rotation.start();
    }
  }
}
