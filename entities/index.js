import Matter from "matter-js"
import Bird from "../components/bird";
import Floor from "../components/floor";
import { Dimensions } from "react-native";
import Obstacle from "../components/obstacle";
import { getPipesPosSizePair } from "../utils/random";

const windowHeight = Dimensions.get('window').height;

const windowWidth = Dimensions.get('window').width; //this is simple way to get dimensions of device using react-native itself

const pipeSizePosA = getPipesPosSizePair(-100)
//console.log(pipeSizePosA)
const pipeSizePosB = getPipesPosSizePair(windowWidth * 0.9)


export default restart => {
    let engine = Matter.Engine.create({ enableSleeping: false }) //creating an environment

    let world = engine.world;

    world.gravity.y = 0.5 //setting gravity for the world



    return {
        physics: { engine, world },
        bird: Bird(world, {x: 50, y:300}, 30),
        floor: Floor(world, { x: windowWidth / 2, y: windowHeight }, { height: 50, width: windowWidth }),


        obstacleTop1: Obstacle(world, pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size, "obstacleTop1"),
        obstacleBottom1: Obstacle(world, pipeSizePosA.pipeBottom.pos, pipeSizePosA.pipeBottom.size, "obstacleBottom1"),
        obstacleTop2: Obstacle(world, pipeSizePosB.pipeTop.pos, pipeSizePosB.pipeTop.size, "obstacleTop2"),
        obstacleBottom2: Obstacle(world, pipeSizePosB.pipeBottom.pos, pipeSizePosB.pipeBottom.size, "obstacleBottom2"),

    }
}