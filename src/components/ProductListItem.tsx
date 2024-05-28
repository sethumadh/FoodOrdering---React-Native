import products from "@/assets/data/products"
import { StyleSheet, View, Text, Image } from "react-native"
import Colors from "../constants/Colors"

function ProductListItem() {
  return (
    <>
      {products.map((product) => (
        <View key={product.id}>
          <Image style={styles.image} source={{ uri: product.image }} />
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
      ))}
    </>
  )
}

export default ProductListItem
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
})