import Matter from "matter-js"
import Bird from "../components/bird";

export default restart =>{
    let engine = Matter.Engine.create({enableSleeping: false}) //creating an environment

    let world = engine.world; 

    world.gravity.y = 0.4 //setting gravity for the world

    return{
        physics: {engine, world},
        bird: Bird(world, {x: 50, y:200}, {height: 40 ,width:40})

    }
}