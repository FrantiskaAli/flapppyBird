import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text,ImageBackground } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from "./entities"
import Physics from "./physics"
import { useEffect, useState } from 'react';
import GameStart from './components/gameStart';

export default function App() {

  const [run, setRun] = useState(false) //this is the state that gets the game engine started
  const [gameEngine, setGameEngine] = useState(null)
  const [score, setScore] = useState(0)
  const [savedScore, setSavedScore] = useState(0)

  useEffect(() => {
      setRun(false)
  }, [])

///gameEngine.swap(entities())} this is the part which makes sure games restarts from the start
  return (
    <ImageBackground source={require('./assets/Images/bg.jpg')} resizeMode="cover" style={styles.container}>
      <GameStart visible={!run ? true : false} start={() => { setRun(true); gameEngine.swap(entities())}} score={savedScore} />
      <Text style={{fontSize:50, color:"rgba(25,255,25,0.7)",fontWeight:"bold" }}>Your score is {score}</Text>
      <GameEngine
        ref={(ref) => { setGameEngine(ref) }}
        systems={[Physics]}
        entities={entities()}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        running={run}
        onEvent={(e) => {
          switch (e.type) {
            case "game_over":
             //this is the message that we will get inside the dispatch function
              setRun(false);
              setScore(0);
              gameEngine.stop()
              break;
            case "new_point":
              setScore(score + 1);
              setSavedScore(score + 1); 
              break;
          }
        }}//we are reciving this events from indexjs
      >
        <StatusBar style="auto" hidden={true} />
      </GameEngine>

    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
