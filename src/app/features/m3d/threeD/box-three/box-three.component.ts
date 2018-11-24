import { Component, OnInit, Input, Output } from '@angular/core';
import { ThreeMdl } from '../definition/three-mdl';
import * as THREE from 'three-full';

@Component({
  selector: 'app-box-three',
  templateUrl: './box-three.component.html',
  styleUrls: ['./box-three.component.css']
})
export class BoxThreeComponent implements OnInit, ThreeMdl {
  @Input() data: any;
  @Input() xw = 0;
  @Input() yw = 0;
  @Input() zw = 0;

   mesh: THREE.Mesh;

  ngOnInit() {

  }

  createMesh(): THREE.Mesh{
    const texture1 = new THREE.TextureLoader().load('./assets/wrld/textures/crate.jpg');
    // let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const material = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });
    const geometry = new THREE.BoxBufferGeometry(200, 200, 200);

    this.mesh = new THREE.Mesh(geometry, material);
    return this.mesh;
  }

}
