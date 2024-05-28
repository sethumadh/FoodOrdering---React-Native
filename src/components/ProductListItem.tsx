import { StyleSheet, View, Text, Image, Pressable } from "react-native"
import Colors from "@/src/constants/Colors"
import { Product } from "../types"
import { Link } from "expo-router"

type ProductListItemProps = {
  product: Product
}

function ProductListItem({ product }: ProductListItemProps) {
  return (
    <Link href={`${product.id}`} asChild>
      <Pressable style={styles.container} key={product.id}>
        <Image
          style={styles.image}
          source={{ uri: product.image && product.image }}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </Pressable>
    </Link>
  )
}

export default ProductListItem
const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "50%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
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
    resizeMode: "contain",
  },
})
