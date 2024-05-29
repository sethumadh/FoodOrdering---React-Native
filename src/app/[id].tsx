import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const product = () => {
  const {id}= useLocalSearchParams()
  return (
    <View>
      <Text>product: {id}</Text>
    </View>
  )
}

export default product