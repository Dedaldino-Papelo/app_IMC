import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList
} from "react-native";

import React, { useState } from "react";
import styles from "./styles";
import ResultImc from "../ResultIMC/ResultImc";

const Form = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setImc] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [textButton, setTextButton] = useState("Calcular");
  const [listImc, setListImc] = useState([])

  const imcCalculator = () => {
    let heightFormat = height.replace(",", ".");
    const Total = (weight / (heightFormat * heightFormat)).toFixed(6)
    setListImc((prev) => [
      ...prev,
      {
        id: new Date().getTime(),
        imc: Total
      }
    ])
    setImc(Total);
  };

  const verifyImc = () => {
    if (weight === "" && weight === "") {
      setErrorMessage("Este campo é obrigatório");
      Vibration.vibrate();
    }
  };

  const calcularImc = () => {
    if (weight !== "" && height !== "") {
      imcCalculator();
      setWeight("");
      setHeight("");
      setMessage("Seu IMC é igual a: ");
      setErrorMessage("");
      setTextButton("Calcular Novamente");
    } else {
      verifyImc();
      setMessage("");
      setImc("");
      setTextButton("Calcular");
    }
  };

  return (
    <View style={styles.formContext}>
      {imc === "" ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Height</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 1.75"
            keyboardType="numeric"
            onChangeText={setWeight}
            value={weight}
          />

          <Text style={styles.formLabel}>Weight</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 1.384"
            keyboardType="numeric"
            onChangeText={setHeight}
            value={height}
          />
          <TouchableOpacity
            onPress={calcularImc}
            style={styles.buttonCalculator}
          >
            <Text style={styles.textButton}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : 
        <View style={styles.exhibitionResultImc}>
          <ResultImc Imc={imc} Message={message} />
          <TouchableOpacity
            onPress={calcularImc}
            style={styles.buttonCalculator}
          >
            <Text style={styles.textButton}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      }
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.listImc}
          data={listImc}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <Text style={styles.resultImc}>
              <Text tyle={styles.textresultImc}>IMC Result: {item.imc}</Text>
            </Text>
            )
          }}
        />
    </View>
  );
};

export default Form;
