import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Bookcard from './Bookcard';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {selectBasketBooksData} from '../../Redux/Slices/basketSlice';

const BookList = () => {
  const reduxAllBooksData = useSelector(selectBasketBooksData);
  console.log(reduxAllBooksData.length);
  return (
    <View style={tw`px-3 py-2`}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={tw`py-6`}>
        <View style={tw`flex-row justify-between flex-wrap`}>
          {reduxAllBooksData?.map((item, key) => (
            <Bookcard key={key} {...item} />
          ))}
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default BookList;
