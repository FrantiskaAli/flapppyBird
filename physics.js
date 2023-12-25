import Matter from "matter-js"
import { getPipesPosSizePair } from "./utils/random";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


//dont need to import entities as its gonna be passed as parameter
//object with touches, time(so the app can correctly update ), dispatch (will allow sending messages and updates )
const Physics = (entities, {touches, time, dispatch} ) =>{

        let engine = entities.physics.engine //getting engine from out entities file into a variable

        touches.filter(t => t.type === "press").forEach(element => {     //this comes from matter.js this function filters touches that press the screen(tap the screen)
            Matter.Body.setVelocity(entities.bird.body, {  //Definitions of velocity   the speed of something in a given direct the velocities of the emitted particles ,in this case it is what makes the bird move up
                x:0,
                y: -5
            })
        });
        
        Matter.Engine.update(engine, time.delta) //updating time ,time.delta is difference between now and time prop that was passed
        
        for(let i= 1; i<= 2; i++){
            //detecting when obstacle passes the bird
            if(entities[`obstacleTop${i}`].body.bounds.max.x <= 50 && !entities[`obstacleTop${i}`].points){//birds initial position on x axis is 50,the other condition makes sure we wont get extra points
                entities[`obstacleTop${i}`].points = true //this setting is linked to the second condition in the if statement
                dispatch({type:"new_point"})
            } 




            if(entities[`obstacleTop${i}`].body.bounds.max.x <= 0){
                const pipeSizePos = getPipesPosSizePair(windowWidth * 0.9)
                Matter.Body.setPosition(entities[`obstacleTop${i}`].body, pipeSizePos.pipeTop.pos)  //if pipes reach x 0 they will reload on the screen as we set their position back
                Matter.Body.setPosition(entities[`obstacleBottom${i}`].body, pipeSizePos.pipeBottom.pos)
                entities[`obstacleTop${i}`].points = false
            }
            Matter.Body.translate(entities[`obstacleTop${i}`].body, {x: -2.8,y:0})   //body of obstacle 1 will move 3 pixels left every time the function runs
            Matter.Body.translate(entities[`obstacleBottom${i}`].body, {x: -2.8,y:0})
        }


        Matter.Events.on(engine, 'collisionStart',(event)=>{
            dispatch({type:"game_over"}) //dispatch is function that ends information into gameEngine object inside App
        })
        
return entities


}
export default Physics