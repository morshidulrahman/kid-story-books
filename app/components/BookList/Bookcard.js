import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {theme} from '../../config/color';
import {useNavigation} from '@react-navigation/native';
const navigation = useNavigation();
const Bookcard = () => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailsScreen')}
      style={tw`bg-[${theme.Light.colors.cardcolor}] w-[48%] px-3 py-4 rounded-md items-center justify-center mb-4`}>
      <Image
        source={{
          uri: 'https://cdn.shopify.com/s/files/1/2081/8163/files/Hide-and-Seek.jpg?v=1613041069',
        }}
        style={tw`w-32 h-36 rounded-md`}
        resizeMode={'cover'}
      />
      <Text style={tw`py-2 text-lg text-center text-black`}>
        Hide and seeks free childrend books
      </Text>
      <View style={tw`flex-row items-center justify-center`}>
        <Text style={tw`text-center pr-1`}>
          <AntDesign name="staro" size={24} color="red" />
        </Text>
        <Text style={tw`text-center font-semibold text-xl text-black`}>
          4.5
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Bookcard;
