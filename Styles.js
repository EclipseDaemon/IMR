import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: "auto",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "rgb(255, 255, 255)",
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    position: "relative",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "pink",
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 15,
    color: "rgb(110, 110, 110)",
  },
  normalText: {
    fontSize: 18,
  },
  addtocartbutton: {
    backgroundColor: "green",
    padding: 20,
    borderRadius: "20%",
    position: "absolute",
    bottom: 0,
    right: "50%",
    zIndex: 100,
  },
});

export default styles;
