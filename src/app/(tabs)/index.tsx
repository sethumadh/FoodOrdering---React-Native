import { StyleSheet, View, Text, Image } from "react-native"
import products from "@/assets/data/products"
import ProductListItem from "@/src/components/ProductListItem"

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ProductListItem />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
})
