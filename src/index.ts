import helloWorld from "./logger"
import StartScene from "./scenes/StartScene"
import { Game, AUTO } from "phaser";

let game = new Game({
    type: AUTO,
    parent: 'phaser-example',
    scene: [StartScene]  
})
helloWorld();
