import {Mesh} from 'three-full';

export interface ThreeMdl {
    data: any;
    mesh: Mesh;

    createMesh(): Mesh;
}
