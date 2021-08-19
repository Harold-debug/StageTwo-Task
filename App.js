import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, Alert, Modal, Button, Keyboard, Pressable, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, SafeAreaView, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Linking } from 'react-native';
export default function App() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <TouchableWithoutFeedback>
     <LinearGradient
          colors={["pink","purple"]}
          start={[0.1, 0.1]}
          style={styles.linearGradient}
      >
          <SafeAreaView style={styles.container}>  
            <KeyboardAvoidingView>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                setName("");
                setMessage("");
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Image 
                    source={require('./assets/zuriogo1.png')}   
                    />
                    <View></View>

                    <Text style={styles.modalText}>{name} says: {message}</Text>

                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Hide</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>

            <View style={styles.inputView}>
              <View style={styles.inputName}>
                <Text style={styles.nameStyle}>What is your name?</Text>
                <TextInput
                  multiline
                  placeholder="enter your name here"
                  style={styles.nameField}
                  onChangeText={(name) => setName(name)}
                 
                  clearButtonMode="always"
                  autoFocus

                />
                </View>
                <View style={styles.inputMessage}>
                <Text style={styles.messageStyle}>What do you have to say?</Text>
                <TextInput 
                  multiline
                  placeholder="tell me"
                  style={styles.messageField}
                  onChangeText={(message) => setMessage(message)}
                  
                  clearButtonMode="always"
                /> 
              </View>
            </View>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.textStyle}>Tell Others</Text>
              </Pressable>

             
              <View  style={styles.link}>
                <Text 
                  style={styles.linkStyle}
                  onPress={() => Linking.openURL('https://zuri.team')}
                >
                  Click here to go to Zuri website
                </Text>
              </View>

              
                <StatusBar style="auto" />
            </KeyboardAvoidingView>
          </SafeAreaView>
        </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
    marginTop: -80,
    backgroundColor: "transparent",
  },
   linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 80,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    paddingTop: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "lightpink",
  },
  buttonClose: {
    backgroundColor: "pink",
    marginTop: 10,
    
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    marginTop: 30,
  },
  inputView: {
    padding: 20,
  },
  inputMessage: {
    marginTop: 20,
    backgroundColor: "transparent",
  },
  inputName: {
     marginTop: 20,
    backgroundColor: "transparent",
  },
  nameField: {
    borderWidth: 1,
    fontFamily: "sans-serif-medium",
    padding: 10,
    marginLeft: 20,
    alignItems: "center",
    borderRadius: 20,
    fontSize: 20,
    color: "white",
  },
  nameStyle: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 30,
    fontFamily: "Roboto",
  },
  messageField: {
    borderWidth: 1,
    fontFamily: "sans-serif-condensed",
    padding: 10,
    marginLeft: 20,
    alignItems: "center",
    borderRadius: 20,
    fontSize: 20,
    color: "white",
  },
  messageStyle: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 30,
    fontFamily: "Roboto",
    marginRight:10,
    width: "100%",
  },
  link: {
    alignItems: "center",
    marginTop: 20,
    justifyContent: "flex-end",
    marginBottom: 0,
  },
  linkStyle: {
    fontSize: 15,
    color: "white",
    padding: 10,
  },

});
