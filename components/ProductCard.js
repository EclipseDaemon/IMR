import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductCard = ({ item }) => {
  const { name, id, quantity, price } = item;

  const dispatch = useDispatch();

  const handleAddToCart = (carItem) => {
    dispatch(addToCart(carItem));
    alert("Item Added to Cart");
  };

  return (
    <View style={styles.card}>
      <Text style={styles.productName}>{name}</Text>
      <View style={styles.bottomSection}>
        <Text style={styles.productPrice}>${price}</Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => handleAddToCart(item)}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    paddingBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    color: "#666",
  },
  bottomSection: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartButton: {
    width: "fit-content",
    backgroundColor: "red",
    padding: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 12,
    color: "white",
  },
});

export default ProductCard;
