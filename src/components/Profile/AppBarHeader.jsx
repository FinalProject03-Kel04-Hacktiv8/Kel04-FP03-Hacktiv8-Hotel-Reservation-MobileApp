import React from 'react'
import { Appbar } from 'react-native-paper'

export const AppBarHeader = ({ title }) => {
  return (
    <Appbar.Header style={{ backgroundColor: '#1B9C85' }}>
      <Appbar.BackAction color="#fff" onPress={() => { }} />
      <Appbar.Content title={title} titleStyle={{ alignSelf: 'center', fontSize: 18, color: '#fff' }} style={{ marginLeft: 0, position: 'absolute', left: 0, right: 0, zIndex: -1 }} />
      {/* <Appbar.Action icon="square" color="#fff" onPress={() => { }} /> */}
    </Appbar.Header>
  )
}
