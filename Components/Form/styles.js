import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30
    },

    errorMessage: {
      color: "#ff0043",
      fontSize: 12,
      paddingLeft: 20,
      fontWeight: "bold"
    },

    form: {
       width: "100%",
       height: "auto",
       marginTop: 30,
       padding: 10
    },

    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20

     },

     input: {
        width: "90%",
        borderRadius: 50,
        height: 40,
        margin: 12,
        backgroundColor: "#f6f6f6",
        paddingLeft: 10
     },
     buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        width: "90%",
        margin: 30
     },
     textButton: {
        fontSize: 20,
        color: "#fff"
     }
  });

  export default styles