import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {theme} from '../config/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const DetailsScreen = ({route}) => {
  const navigation = useNavigation();

  // const {id, name, text, img} = route.params.item;
  console.log(route.params);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tw`bg-[${theme.Light.colors.cardcolor}] relative`}>
      <ImageBackground
        style={tw`w-full h-[225px] relative`}
        source={{
          uri: 'https://cdn.shopify.com/s/files/1/2081/8163/files/Hide-and-Seek.jpg?v=1613041069',
        }}>
        <View style={tw`flex-row items-center justify-between w-full p-4 z-20`}>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`bg-[${theme.Light.colors.cardcolor}] p-3 rounded-full items-center justify-center`}>
            <AntDesign name="left" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingScreen')}
            style={tw`bg-[${theme.Light.colors.cardcolor}] p-3 rounded-full items-center justify-center`}>
            <AntDesign name="setting" size={22} color="black" />
          </TouchableOpacity>
        </View>

        <View style={tw`z-20 justify-center`}>
          <Text style={tw`text-white text-3xl font-bold text-center mt-8`}>
            {'name'}
          </Text>
        </View>

        {/* this is a overlay */}
        <Image
          style={tw`w-full h-full absolute top-0 left-0`}
          source={require('../assets/overly.png')}
        />
      </ImageBackground>

      <View
        style={tw`-mt-5 rounded-3xl px-4 py-9 bg-[${theme.Light.colors.cardcolor}]`}>
        <View style={tw`mt-5`}>
          <Text
            style={tw`text-xl text-center font-semibold text-[${theme.Light.colors.text}]`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime in
            ad, nam placeat error nesciunt ipsa dolorem voluptatum! Odio beatae
            vel eveniet! Cumque dolor ab enim adipisci delectus incidunt qui.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime in
            ad, nam placeat error nesciunt ipsa dolorem voluptatum! Odio beatae
            vel eveniet! Cumque dolor ab enim adipisci delectus incidunt qui.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime in
            ad, nam placeat error nesciunt ipsa dolorem voluptatum! Odio beatae
            vel eveniet! Cumque dolor ab enim adipisci delectus incidunt qui.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime in
            ad, nam placeat error nesciunt ipsa dolorem voluptatum! Odio beatae
            vel eveniet! Cumque dolor ab enim adipisci delectus incidunt qui.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime in
            ad, nam placeat error nesciunt ipsa dolorem voluptatum! Odio beatae
            vel eveniet! Cumque dolor ab enim adipisci delectus incidunt qui.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime in
            ad, nam placeat error nesciunt ipsa dolorem voluptatum! Odio beatae
            vel eveniet! Cumque dolor ab enim adipisci delectus incidunt qui.
            beatae vel eveniet! Cumque dolor ab enim adipisci delectus incidunt
            qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            in ad, nam placeat error nesciunt ipsa dolorem voluptatum! Odio
            beatae vel eveniet! Cumque dolor ab enim adipisci delectus incidunt
            qui.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'black',
    opacity: 0.6,
    flex: 1,
  },
});
