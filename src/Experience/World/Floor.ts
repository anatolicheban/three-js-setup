import { Mesh, MeshStandardMaterial, PlaneGeometry } from "three";
import { Experience } from "../Experience";

export class Floor {
  experience: Experience;
  mesh: Mesh<PlaneGeometry, MeshStandardMaterial>;
  material: MeshStandardMaterial;
  geometry: PlaneGeometry;

  constructor() {
    this.experience = new Experience();

    this.material = new MeshStandardMaterial({ color: 0xffffff });
    this.geometry = new PlaneGeometry(4, 4);

    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.rotateX(-Math.PI / 2);

    this.experience.scene.add(this.mesh);
  }
}
