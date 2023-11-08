import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';

const Department = ({data}) => {
 
  return (
    <View style={{width: '100%', alignItems: 'center',paddingHorizontal:100,paddingBottom:20}}>
      <View  style={{flexDirection: 'row',width:"100%"}}>
        <View className="w-1/3 items-center border-2 p-2">
          <Text className="text-3xl text-black" style={{}}>
            Department
          </Text>
        </View>
        <View className="w-1/3 items-center border-2 p-2">
          <Text className="text-3xl text-black" style={{}}>
            Designation
          </Text>
        </View>
        <View className="w-1/3 items-center border-2 p-2">
          <Text className="text-3xl text-black" style={{}}>
            Level
          </Text>
        </View>
      </View>

      <View className="items-center ">
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          scrollEnabled={false}
          renderItem={({item}) => (
            <View className="" style={{flexDirection: 'row', width: '100%'}}>
              <View className="w-1/3 items-center border p-2">
              <Text className="text-xl text-black">{item.department}</Text>
              </View>
              <View className="w-1/3 items-center border p-2">
              <Text className="text-xl text-black">{item.Designation}</Text>
              </View>
              <View className="w-1/3 items-center border p-2">
              <Text className="text-xl text-black">{item.Level}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Department;

const styles = StyleSheet.create({});
