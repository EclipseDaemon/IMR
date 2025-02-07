import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import styles from "../Styles";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const router = useRouter();

  const products = [
    {
      id: "1",
      name: "Avocado",
      price: "1.50",
      quantity: 1,
    },
    {
      id: "2",
      name: "Apple",
      price: "2.50",
      quantity: 1,
    },
    {
      id: "3",
      name: "Mango",
      price: "3.50",
      quantity: 1,
    },
    {
      id: "4",
      name: "Gauva",
      price: "4.50",
      quantity: 1,
    },
    {
      id: "5",
      name: "Peach",
      price: "5.50",
      quantity: 1,
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addtocartbutton}
        onPress={() => router.push("/cart")}
      >
        <Text>Add</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Product Of Grocery</Text>

      <View style={styles.box}>
        <Text style={styles.subTitle}>Showing {products.length} Items</Text>
      </View>

      <View style={styles.box}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard item={item} />}
        />
      </View>
    </View>
  );
};

export default Home;
