import { TouchableOpacity, Text, View, Modal, StyleSheet, ImageBackground} from "react-native";



export default function GameStart({visible, start,score}){


    return(
        <Modal visible={visible} animationType="slide">
            <ImageBackground source={require('../assets/Images/bg.jpg')} resizeMode="cover" style={styles.startContainer}>
                <Text style={{fontSize:50, color:"rgba(25,255,25,0.7)",fontWeight:"bold", marginBottom:130 }}>Last score {score}</Text>
                <Text style={{fontSize:20, color:"rgba(0,255,255,0.7)",fontWeight:"bold", marginBottom:130, backgroundColor:"rgba(0,0,0,0.5)", padding:4 }}>Enjoy my first react-native game</Text>
                <TouchableOpacity onPress={start} style={styles.button}>
                    <Text>Start</Text>
                </TouchableOpacity>
            </ImageBackground>

        </Modal>
    )
}


const styles = StyleSheet.create({
    startContainer:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
    },
    button:{
            padding:12,
            minWidth:170,
            backgroundColor: "rgba(25,255,25,0.7)",
            borderRadius:15,
            borderWidth:4,
            borderBlockColor: "rgba(0,255,255,0.7)",
            textAlign:"center",
    },
})