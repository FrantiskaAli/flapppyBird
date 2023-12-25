import Matter from "matter-js";
import { View } from "react-native";



const Obstacle= props => {//the props we are getting here actually come from this function component not from outside, so the function is exported by default where it creates Obstacle object via matter.js and passes the props to this jsx component
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody / 2
    const yBody = props.body.position.y - heightBody / 2


    return (
        <View
            style={{
                position: "absolute",
                left: xBody,
                top: yBody,
                width: widthBody,
                height: heightBody,
                backgroundColor:"rgba(179,255,255,0.6)",
                borderRadius: 5,

            }}
        />


    )

}


export default (world, pos, size, label) => {

    const initialObstacle = Matter.Bodies.rectangle(
        pos.x, //reading actual position from the props
        pos.y,
        size.width,
        size.height,
        { label: label ,
            isStatic: true
       }
        //creating Obstacle object with matter js, its gonna be the hit box, when collision happens
    )

    Matter.World.add(world, initialObstacle) //this way we input the Obstacle object inside the created world

    return {
        body: initialObstacle,
        pos,
        renderer: <Obstacle />
    }

}