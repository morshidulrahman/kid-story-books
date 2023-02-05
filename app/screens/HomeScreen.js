import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {theme} from '../config/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HomeScreen = () => {
  return (
    <View style={tw`bg-[${theme.Light.colors.bgcolor}] h-full `}>
      <View style={tw`h-[230px] bg-[${theme.Light.colors.primary}]`}>
        <View style={tw`flex-row w-full justify-between px-6`}>
          <Text style={tw`text-white w-2/4 font-bold text-3xl mt-9`}>
            We have collection of all books
          </Text>
          <Text>
            <Image source={require('../assets/book.png')} />
          </Text>
        </View>
        <View style={tw`flex-row justify-between px-6 py-5 relative`}>
          <TextInput
            placeholder="search for your book..."
            style={tw`bg-white rounded-md w-full px-2`}
          />
          <Text
            style={tw`absolute right-8 top-7  bg-[${theme.Light.colors.primary}] p-2 rounded-md`}>
            <Ionicons name="search" size={22} color="white" />
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
