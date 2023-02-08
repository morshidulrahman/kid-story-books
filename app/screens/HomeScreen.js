// eslint-disable-next-line prettier/prettier
import {View, Text, Image, TextInput, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {theme} from '../config/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BookList from '../components/BookList/Booklist';
import HomeHeader from '../components/Home/HomeHeader';
import {FlashList} from '@shopify/flash-list';
import {useSelector} from 'react-redux';
import {selectBasketBooksData} from '../Redux/Slices/basketSlice';
import Bookcard from '../components/BookList/Bookcard';
// import {FlashList} from '@shopify/flash-list';
// import {kidBookData} from '../data/kidBook';
import {useNavigation} from '@react-navigation/native';
const navigation = useNavigation();

const HomeScreen = () => {
  const reduxAllBooksData = useSelector(selectBasketBooksData);
  return (
    // <ScrollView
    //   style={tw`bg-[${theme.Light.colors.bgcolor}]`}
    //   showsVerticalScrollIndicator={false}>
    //   <HomeHeader />
    //   <BookList />
    // </ScrollView>
    <FlashList
      data={reduxAllBooksData}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailsScreen', {item})}
          style={tw`my-2 px-4`}>
          <Bookcard {...item} />
        </TouchableOpacity>
      )}
      estimatedItemSize={
        reduxAllBooksData.length ? reduxAllBooksData.length : 200
      }
      keyExtractor={item => item.id}
      ListHeaderComponent={<HomeHeader />}
    />
  );
};

export default HomeScreen;
