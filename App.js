import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';


let operations = ["DEL", "AC", "+", "-", "/", "*"]
let initialState = { number: "", number2: "", calculate: "0", operator: "" }

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { number: "", number2: "", operator: "" }

  }
  buttonClick = (number) => {
    if (this.state.operator) this.setState({ number2: `${this.state.number2}${number}` })
    else if (this.state.number) this.setState({ number: `${this.state.number}${number}` })
    else this.setState({ number: number })
  }
  operationClick = (operator) => {
    this.setState({ operator: operator })
  }
  calculate = (calculate) => {
    if (this.state.operator == "+") this.setState({ calculate: parseInt(this.state.number) + parseInt(this.state.number2) })
    else if (this.state.operator == "-") this.setState({ calculate: parseInt(this.state.number) - parseInt(this.state.number2) })
    else if (this.state.operator == "*") this.setState({ calculate: parseInt(this.state.number) * parseInt(this.state.number2) })
    else if (this.state.operator == "/") this.setState({ calculate: parseInt(this.state.number) / parseInt(this.state.number2) })
    else (this.state.operator)
  }

  clear = () => this.setState(initialState)

  delete = () => {
    if (this.state.number2) this.setState({ number2: this.state.number2.toString().substring(0, this.state.number2.length - 1) })
    else if (this.state.operator) this.setState({ operator: this.state.operator.toString().substring(0, this.state.operator.length - 1) })
    else if (this.state.number) this.setState({ number: this.state.number.toString().substring(0, this.state.number.length - 1) })
  }


  render() {
    console.log(this.state.calculate)

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.calculationText}>{this.state.calculate}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.number} {this.state.operator} {this.state.number2}</Text>
        </View>
        <View style={styles.button}>
          <View style={styles.numbers}>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.buttonsCont} onPress={() => { this.buttonClick(7) }}>
                <Text style={styles.number}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsCont} onPress={() => { this.buttonClick(8) }}>
                <Text style={styles.number}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsCont} onPress={() => { this.buttonClick(9) }}>
                <Text style={styles.number}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.buttonsCont} onPress={() => { this.buttonClick(4) }}>
                <Text style={styles.number}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsCont} onPress={() => { this.buttonClick(5) }}>
                <Text style={styles.number}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsCont} onPress={() => { this.buttonClick(6) }}>
                <Text style={styles.number}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.buttonsCont} onPress={() => { this.buttonClick(1) }}>
                <Text style={styles.number}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsCont} onPress={() => { this.buttonClick(2) }}>
                <Text style={styles.number}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsCont} onPress={() => { this.buttonClick(3) }}>
                <Text style={styles.number}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.buttonsCont} onPress={() => { this.buttonClick(".") }}>
                <Text style={styles.number}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsCont} onPress={() => { this.buttonClick(0) }}>
                <Text style={styles.number}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsCont} onPress={() => { this.calculate() }}>
                <Text style={styles.number}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.operations}>
            <TouchableOpacity
              style={styles.operationsCont}
              onPress={() => { this.delete("DEL") }}>
              <Image style={{ width: 55, height: 55, marginLeft: -5 }} source={{ uri: "https://cdn2.iconfinder.com/data/icons/inverticons-fill-vol-3/32/delete_remove_back_backspace-512.png" }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationsCont} onPress={() => { this.clear("AC") }}>
              <Text style={styles.operationsButton}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationsCont} onPress={() => { this.operationClick("+") }}>
              <Text style={styles.operationsButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationsCont} onPress={() => { this.operationClick("-") }}>
              <Text style={styles.operationsButton}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationsCont} onPress={() => { this.operationClick("*") }}>
              <Text style={styles.operationsButton}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationsCont} onPress={() => { this.operationClick("/") }}>
              <Text style={styles.operationsButton}>/</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: "#000000",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  calculation: {
    flex: 0.3,
    backgroundColor: "#A7A7A7",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  button: {
    flex: 2.5,
    flexDirection: "row",
  },
  numbers: {
    flex: 4,
    backgroundColor: "#000000",

  },
  operations: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  operationsButton: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"

  },
  resultText: {
    fontSize: 55,
    fontWeight: "bold",
    color: "white",


  },
  calculationText: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",


  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

  },
  number: {
    color: "white",
    fontSize: 60
  },
  operationsCont: {
    alignItems: "center",
    backgroundColor: "#FE9427",
    width: "80%",
    height: "15%",
    justifyContent: "center",
    borderRadius: 50
  },
  buttonsCont: {
    backgroundColor: "#333333",
    width: "30%",
    height: "90%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }

});
