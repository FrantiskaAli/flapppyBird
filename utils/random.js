import { Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width; //this is simple way to get dimensions of device using react-native itself


export const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



export const getPipesPosSizePair = (addToPosX = 0) => {
    let yPosTop = -getRandom(300, windowHeight - 100) // - will push the pipe up by the random number because we are making the pipes to be window height

    const pipeTop = {
        pos: {
            x: windowWidth + addToPosX,
            y: yPosTop
        },
        size: {
            height: windowHeight * 2,
            width: 80
        }
    }

    const pipeBottom = {
        pos: {
            x: windowWidth /*pipe generated at the end of the screen*/ + addToPosX,
            y: windowHeight * 2 + 200 + yPosTop//200 pixels below the first pipe
        }
        ,
        size: {
            height: windowHeight * 2,
            width: 80
        }
    }

    return { pipeTop, pipeBottom }
}