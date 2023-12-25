import Matter from "matter-js";
import {ImageBackground } from "react-native";


const Bird = props => {//the props we are getting here actually come from this function component not from outside, so the function is exported by default where it creates bird object via matter.js and passes the props to this jsx component
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody / 2
    const yBody = props.body.position.y - heightBody / 2


    return (
        <ImageBackground source={require('../assets/Images/alien.png')}
            style={{
                position: "absolute",
                left: xBody,
                top: yBody,
                width: widthBody,
                height: heightBody

            }}
        />


    )

}



export default (world, pos, radius) => {

    const initialBird = Matter.Bodies.circle(
        pos.x, //reading actual position from the props
        pos.y,
        radius,
        { label: 'Bird' }
        //creating bird object with matter js, its gonna be the hit box, when collision happens
    )

    Matter.World.add(world, initialBird) //this way we input the bird object inside the created world

    return {
        body: initialBird,
        pos,
        renderer: <Bird />
    }

}