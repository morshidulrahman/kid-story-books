// eslint-disable-next-line prettier/prettier
import {View, Text, Image, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {theme} from '../config/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BookList from '../components/BookList/Booklist';
import HomeHeader from '../components/Home/HomeHeader';
import Bookcard from '../components/BookList/Bookcard';
// import {FlashList} from '@shopify/flash-list';
// import kidBookData from '../data/kidBook';
const HomeScreen = () => {
  const {bookData, setBooksData} = useState([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  return (
    <View style={tw`bg-[${theme.Light.colors.bgcolor}]`}>
      <HomeHeader />
      <BookList />
    </View>
  );
};

export default HomeScreen;
