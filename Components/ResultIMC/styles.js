import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    resultImc: {
       flex: 1,
       borderRadius: 50,
       alignItems: "center",
       width: "100%"
    },

    numberIMC: {
        fontSize: 30,
        color: "#ff0043",
        fontWeight: "bold"
    },

    info: {
       fontSize: 18,
       color: "#ff0043",
       fontWeight: "bold"
    },
    boxSharedButton: {
      marginBottom: 10,
      alignItems: "center",
      width: "100%"
    },
    sharedButton : {
      backgroundColor: "#1877f2",
      borderRadius: 50,
      paddingTop: 5,
      marginTop: 10,
      paddingBottom: 5
    },
    sharedText: {
      color: "#fff",
      paddingHorizontal: 30,
      fontWeight: "bold"
    }
  });

  export default styles