import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import WrapScreen from '../components/WrapScreen'
import CountryFlag from 'react-native-country-flag'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import LinearGradient from 'react-native-linear-gradient'
import {
  setColorRed,
  setColorBlue,
  setColorGreen,
  setColorYellow,
  setColorBlack,
  setColorWhite,
  setColorPaleBlue,
  setColorOther,
  setCanton,
  setStar,
  setSun,
  setMoon,
  setCircle,
  setTriangle,
  setCross,
  setWave,
} from '../features/main/mainSlice'
const FlagScreen = () => {
  const {
    colorRed,
    colorBlue,
    colorGreen,
    colorYellow,
    colorBlack,
    colorWhite,
    colorPaleBlue,
    colorOther,
    canton,
    star,
    sun,
    moon,
    circle,
    triangle,
    cross,
    wave,
  } = useSelector((state: RootState) => state.main)
  const dispatch = useDispatch()
  const buttonRef = useRef(null)
  const customData = require('../utils/data.json')
  const filteredData = customData.filter(
    (country: {
      red: string
      blue: string
      green: string
      yellow: string
      black: string
      white: string
      paleBlue: string
      otherColor: string
      canton: string
      star: string
      sun: string
      moon: string
      circle: string
      triangle: string
      cross: string
      wave: string
    }) => {
      return (
        (!colorRed || country.red === 'true') &&
        (!colorBlue || country.blue === 'true') &&
        (!colorGreen || country.green === 'true') &&
        (!colorYellow || country.yellow === 'true') &&
        (!colorBlack || country.black === 'true') &&
        (!colorWhite || country.white === 'true') &&
        (!colorPaleBlue || country.paleBlue === 'true') &&
        (!colorOther || country.otherColor === 'true') &&
        (!canton || country.canton === 'true') &&
        (!star || country.star === 'true') &&
        (!sun || country.sun === 'true') &&
        (!moon || country.moon === 'true') &&
        (!circle || country.circle === 'true') &&
        (!triangle || country.triangle === 'true') &&
        (!cross || country.cross === 'true') &&
        (!wave || country.wave === 'true')
      )
    }
  )
  const handlePress = (capital: string) => {
    Alert.alert('The capital is...', `${capital}`)
  }
  const renderItem = ({
    item,
  }: {
    item: {
      title: string
      abbreviation: string
      capital: string
      red: string
      blue: string
      green: string
      yellow: string
      black: string
      white: string
      paleBlue: string
      otherColor: string
      canton: string
      star: string
      sun: string
      moon: string
      circle: string
      triangle: string
      cross: string
      wave: string
    }
  }) => (
    <View>
      {colorRed && item.red == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : colorBlack && item.black == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : colorYellow && item.yellow == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : colorBlue && item.blue == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : colorGreen && item.green == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : colorPaleBlue && item.paleBlue == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : colorWhite && item.white == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : colorOther && item.otherColor == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : canton && item.canton == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : canton && item.canton == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : star && item.star == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : sun && item.sun == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : moon && item.moon == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : circle && item.circle == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : triangle && item.triangle == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : cross && item.cross == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : wave && item.wave == 'true' ? (
        <View className="flex-row width-screen">
          <View className="w-3/4 width-screen px-2 items-start justify-center">
            <Text selectable={true} className="text-2xl">
              {item.title}
            </Text>
          </View>
          <View className="w-1/4 h-24 items-start justify-center mr-2">
            <TouchableOpacity onPress={() => handlePress(item.capital)}>
              <CountryFlag isoCode={item.abbreviation} size={60} />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  )
  return (
    <WrapScreen>
      <View className="flex-row w-screen h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40">
        <TouchableOpacity
          className={
            colorRed
              ? 'flex-1  bg-r rounded-3xl mx-2 my-2 border-4'
              : 'flex-1  bg-r rounded-3xl mx-2 my-2 border-4 border-r'
          }
          onPress={() => dispatch(setColorRed())}
          ref={buttonRef}
        />
        <TouchableOpacity
          className={
            colorYellow
              ? 'flex-1  bg-y rounded-3xl mx-2 my-2 border-4'
              : 'flex-1  bg-y rounded-3xl mx-2 my-2 border-4 border-y'
          }
          onPress={() => dispatch(setColorYellow())}
          ref={buttonRef}
        />
        <TouchableOpacity
          className={
            colorBlue
              ? 'flex-1  bg-b rounded-3xl mx-2 my-2 border-4'
              : 'flex-1  bg-b rounded-3xl mx-2 my-2 border-4 border-b'
          }
          onPress={() => dispatch(setColorBlue())}
          ref={buttonRef}
        />
        <TouchableOpacity
          className={
            colorGreen
              ? 'flex-1  bg-g rounded-3xl mx-2 my-2 border-4'
              : 'flex-1  bg-g rounded-3xl mx-2 my-2 border-4 border-g'
          }
          onPress={() => dispatch(setColorGreen())}
          ref={buttonRef}
        />
      </View>
      <View className="flex-row w-screen h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40">
        <TouchableOpacity
          className={
            colorBlack
              ? 'flex-1  bg-B rounded-3xl mx-2 my-2 border-4 border-W'
              : 'flex-1  bg-B rounded-3xl mx-2 my-2 border-4 border-B'
          }
          onPress={() => dispatch(setColorBlack())}
          ref={buttonRef}
        />
        <TouchableOpacity
          className={
            colorPaleBlue
              ? 'flex-1  bg-pb rounded-3xl mx-2 my-2 border-4'
              : 'flex-1  bg-pb rounded-3xl mx-2 my-2 border-4 border-pb'
          }
          onPress={() => dispatch(setColorPaleBlue())}
          ref={buttonRef}
        />
        <TouchableOpacity
          className={
            colorWhite
              ? 'flex-1  bg-W rounded-3xl mx-2 my-2 border-4'
              : 'flex-1  bg-W rounded-3xl mx-2 my-2 border-4 border-W'
          }
          onPress={() => dispatch(setColorWhite())}
          ref={buttonRef}
        />
        <TouchableOpacity
          className={
            colorOther
              ? 'flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl mx-2 my-2 border-4 border-W'
              : 'flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl mx-2 my-2 border-4 border-o'
          }
          onPress={() => dispatch(setColorOther())}
          ref={buttonRef}
        />
      </View>
      <View className="flex-row w-screen h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40">
        <TouchableOpacity
          className={
            canton
              ? 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 justify-center items-center'
              : 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 border-or justify-center items-center'
          }
          onPress={() => dispatch(setCanton())}
          ref={buttonRef}
        >
          <Text className="text-xl">Canton</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={
            star
              ? 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 justify-center items-center'
              : 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 border-or justify-center items-center'
          }
          onPress={() => dispatch(setStar())}
          ref={buttonRef}
        >
          <Text className="text-xl">Star</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={
            sun
              ? 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 justify-center items-center'
              : 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 border-or justify-center items-center'
          }
          onPress={() => dispatch(setSun())}
          ref={buttonRef}
        >
          <Text className="text-xl">Sun</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={
            moon
              ? 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 justify-center items-center'
              : 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 border-or justify-center items-center'
          }
          onPress={() => dispatch(setMoon())}
          ref={buttonRef}
        >
          <Text className="text-xl">Moon</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row w-screen h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40">
        <TouchableOpacity
          className={
            circle
              ? 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 justify-center items-center'
              : 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 border-or justify-center items-center'
          }
          onPress={() => dispatch(setCircle())}
          ref={buttonRef}
        >
          <Text className="text-xl">Circle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={
            triangle
              ? 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 justify-center items-center'
              : 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 border-or justify-center items-center'
          }
          onPress={() => dispatch(setTriangle())}
          ref={buttonRef}
        >
          <Text className="text-xl">Triangle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={
            cross
              ? 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 justify-center items-center'
              : 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 border-or justify-center items-center'
          }
          onPress={() => dispatch(setCross())}
          ref={buttonRef}
        >
          <Text className="text-xl">Cross</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={
            wave
              ? 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 justify-center items-center'
              : 'flex-1  bg-or rounded-3xl mx-2 my-2 border-4 border-or justify-center items-center'
          }
          onPress={() => dispatch(setWave())}
          ref={buttonRef}
        >
          <Text className="text-xl">Wave</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        decelerationRate="fast"
        maxToRenderPerBatch={20}
        removeClippedSubviews={true}
        updateCellsBatchingPeriod={100}
        initialNumToRender={80}
      />
    </WrapScreen>
  )
}
export default FlagScreen
