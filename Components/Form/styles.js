import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },

    form: {
       width: "100%",
       height: "auto",
       marginTop: 10,
       padding: 10
    },

    errorMessage: {
      color: "#ff0043",
      fontSize: 12,
      paddingLeft: 20,
      fontWeight: "bold"
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
     },
     exhibitionResultImc: {
      width: "100%",
      height: "40%",
      marginTop: 50
     }, 
     listImc: {
      marginTop: 10
     }, 
     resultImc: {
      fontSize: 16,
      color: "red",
      height: 50,
      width: "100%",
      paddingRight: 20,
     },
     textresultImc: {
      color: "red",
     }
  });

  export default styles