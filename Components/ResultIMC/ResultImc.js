import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

 const ResultImc = ({ Imc, Message }) => {
  return (
    <View style={styles.resultImc}>
      <Text style={styles.info}>{Message}</Text>
      <Text style={styles.numberIMC}>{Imc}</Text>
    </View>
  )
}

export default ResultImc