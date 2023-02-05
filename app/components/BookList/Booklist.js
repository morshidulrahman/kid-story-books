import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Bookcard from './Bookcard';
import {ScrollView} from 'react-native-gesture-handler';

const BookList = () => {
  return (
    <View style={tw`px-6 py-6`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`justify-between flex-wrap flex-row`}>
          <View style={tw`flex-row justify-between flex-wrap`}>
            <Bookcard />
            <Bookcard />
            <Bookcard />
            <Bookcard />
            <Bookcard />
            <Bookcard />
            <Bookcard />
            <Bookcard />
            <Bookcard />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookList;