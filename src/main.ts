import "./styles/style.css";

import { Experience } from "./Experience/Experience";

let canvas = document.querySelector("#app") as HTMLCanvasElement;

export let experience = new Experience(canvas);
