import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'

export default function Conta({route}) {

  try {
    const {id} = route.params
    console.log(id)
  } catch (error) {
    console.log(error)
  }
  console.log('heelooo')

  return (
    <View>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({})