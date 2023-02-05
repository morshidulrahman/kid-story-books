import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {theme} from '../../config/color';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeHeader = () => {
  return (
    <View
      style={tw` bg-[${theme.Light.colors.primary}] rounded-b-2xl px-5 py-10`}>
      <View style={tw`flex-row w-full justify-between items-center`}>
        <Text style={tw`text-white w-3/5 font-bold text-3xl`}>
          Find Your Favourite Books
        </Text>
        <Image source={require('../../assets/book.png')} />
      </View>
      <View
        style={tw`flex-row justify-between items-center mt-5 bg-white rounded`}>
        <TextInput
          placeholder="Search for your book..."
          style={tw`px-2 flex-grow`}
        />
        <Text style={tw`bg-[${theme.Light.colors.primary}] p-2 rounded m-1`}>
          <Ionicons name="search" size={26} color="white" />
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;
