import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import { useSelector } from "react-redux";

const Home = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>

      <View style={styles.card}>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartcard}>
              <Text>{item.name}</Text>
              <Text>Price: {item.price}</Text>
              <Text>Quantity: {item.quantity}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  container: {
    backgroundColor: "white",
    height: " 100%",
  },
  card: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
  },
  cartcard: {
    backgroundColor: "rgb(222, 222, 222)",
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
});

export default Home;
