import { 
      View, 
      Text, 
      TouchableOpacity,
      Share
    } from 'react-native'

import React from 'react'
import styles from './styles'

 const ResultImc = ({ Imc, Message }) => {

  const onShare = async () => {
    const result = await Share.share({
      message:
        'My IMC is ' + Imc,
    });
  }

  return (
    <View style={styles.resultImc}>
      <View style={styles.boxSharedButton}>
        {Imc !== null ?
                <TouchableOpacity style={styles.sharedButton} onPress={onShare}>
                <Text style={styles.sharedText}>Share</Text>
              </TouchableOpacity> : <View />
        }
      </View>

      <Text style={styles.info}>{Message}</Text>
      <Text style={styles.numberIMC}>{Imc}</Text>
    </View>
  )
}

export default ResultImc