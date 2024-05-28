import { FlatList, View } from "react-native"
import ProductListItem from "@/src/components/ProductListItem"
import products from "@/assets/data/products"

export default function MenuScreen() {
  return (
    // <View style={{ flex: 1 }}>
    <FlatList
      numColumns={2}
      contentContainerStyle={{ gap: 10 }}
      columnWrapperStyle={{ gap: 10, padding: 10 }}
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
    // </View>
  )
}
