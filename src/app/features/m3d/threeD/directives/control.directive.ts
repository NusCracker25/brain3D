import { Directive, ViewContainerRef , AfterViewInit, OnInit} from '@angular/core';
import {OrbitControls, PerspectiveCamera} from 'three-full';
@Directive({
  selector: '[app-control]'
})
export class ControlDirective implements AfterViewInit, OnInit {

  controls: OrbitControls;
  private _camera: PerspectiveCamera = null;

  /* description of 3D environment*/
  set camera(camera: PerspectiveCamera) {
    this._camera = camera;
    this.controls = new OrbitControls(this._camera);
    // controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
    this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    this.controls.dampingFactor = 0.25;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 1;
    this.controls.maxDistance = 500000;
    this.controls.maxPolarAngle = Math.PI;
  }



  constructor() { }

ngOnInit() {

}

  ngAfterViewInit() {
    this.controls = new OrbitControls(this._camera);
    // controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
    this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    this.controls.dampingFactor = 0.25;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 1;
    this.controls.maxDistance = 500000;
    this.controls.maxPolarAngle = Math.PI;

  }
}
