import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View className="py-3 -z-50 items-center  px-4">
      <Text className="text-black">
        Powered by <Text className="text-[#006666]">
          Secqur<Text className="text-[#E05905]">AI</Text>
          <Text className="text-[#006666]">se</Text>
        </Text>
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
