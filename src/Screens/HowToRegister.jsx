import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Pause from '../assets/Pause.svg'
import Video, {VideoRef} from 'react-native-video';

const HowToRegister = () => {
  const ref = useRef();
  const [paused, setPaused] = useState(true);
  return (
    <View className="flex-1 justify-center items-center">
     <TouchableOpacity
     className="justify-center items-center relative"
        style={{width: '100%', height: '100%'}}
        onPress={() => {
          setPaused(e=>!e)
        }}
        >
  
      <Video
          paused={paused}
          source={require("../assets/testvideo.mp4")}
          ref={ref}
          style={{width: '100%', height: "100%"}}
          resizeMode="contain"
          repeat={true}
        />
         {paused &&  <TouchableOpacity
     className="justify-center items-center absolute"
        style={{width: '100%', height: '100%'}}
        onPress={() => {
          setPaused(e=>!e)
        }}
        >
          <Pause/>
        </TouchableOpacity>}
      </TouchableOpacity>
    </View>
  )
}

export default HowToRegister

const styles = StyleSheet.create({})