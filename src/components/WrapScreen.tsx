import React from 'react'
import { ImageBackground, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// import Header from '../components/Header'
// import { COLORS, SZ, STATUS_BAR_HEIGHT } from '../config'
import { Dimensions } from 'react-native'
import { COLORS } from '../config'
const window = Dimensions.get('window')
const { width, height } = window
interface Props {
  children: any
  isTransparent?: boolean
  backgroundColor?: string
}

const AppScreen = ({
  children,
  isTransparent = true,
  backgroundColor,
}: Props) => {
  return (
    <>
      <ImageBackground source={require('../assets/bg.jpg')} style={{ flex: 1 }}>
        <StatusBar
          // translucent={true}
          backgroundColor={COLORS.white}
          barStyle="dark-content"
        />
        {/* <StatusBar
          translucent={true}
          animated={true}
          backgroundColor={COLORS.primary}
        /> */}
        <SafeAreaView style={{ height: height - 100 }}>{children}</SafeAreaView>
      </ImageBackground>
    </>
  )
}
export default AppScreen
