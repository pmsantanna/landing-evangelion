import cardTiltInit from "./card-tilt.js";
import galleryController from "./gallery-controller.js";
import sceneInit from "./scene-3d.js";
import sceneInitSpline from "./scene-3d-spline.js";
import sceneHeadInit from "./scene-head.js";
import { animate } from "./gsap-anim.js";

cardTiltInit();
galleryController();
sceneInit();
animate();
sceneInitSpline();
sceneHeadInit();
