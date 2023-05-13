import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import ResultImc from '../ResultIMC/ResultImc'

const Form = () => {
    const [weight, setWeight] = useState(null)
    const [height, setHeight] = useState(null)
    const [imc, setImc] = useState(null)
    const [message, setMessage] = useState("")

    const calcularImc = () => {
        if(weight !== null && height !== null){
            const IMC = (weight/height*height).toFixed(2)
            setImc(IMC)
            setWeight(null)
            setHeight(null)
            setMessage("Seu IMC é igual a: ")
            return

        } else {
            setMessage("Preencha os 2 campos")
            setImc(null)

        }
    }

  return (
    <View style={styles.formContext}>
       <View style={styles.form}>
       <Text style={styles.formLabel}>Height</Text>
        <TextInput
            style={styles.input}
            placeholder="Ex: 1.75"
            keyboardType='numeric'
            onChangeText={setWeight}
            value={weight}
        />

       <Text style={styles.formLabel}>Weight</Text>
        <TextInput 
            style={styles.input}
            placeholder="Ex: 1.384"
            keyboardType='numeric'
            onChangeText={setHeight}
            value={height}
        />
        <TouchableOpacity onPress={calcularImc} 
            style={styles.buttonCalculator}>
           <Text style={styles.textButton}>Calcular IMC</Text>
        </TouchableOpacity>
       </View>
       <ResultImc Imc={imc} Message={message} />
    </View>
  )
}

export default Form