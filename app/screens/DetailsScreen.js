import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {theme} from '../config/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const DetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`bg-[${theme.Light.colors.cardcolor}] flex-1 relative`}>
      <View style={tw`h-[35%] relative `}>
        <ImageBackground
          style={styles.overlay}
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/2081/8163/files/Hide-and-Seek.jpg?v=1613041069',
          }}
        />
        <View
          style={tw`flex-row items-center justify-between z-10 absolute w-full px-5 py-4`}>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`bg-[${theme.Light.colors.cardcolor}] p-3 rounded-full flex items-center justify-center`}>
            <AntDesign name="left" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingScreen')}
            style={tw`bg-[${theme.Light.colors.cardcolor}] p-3 rounded-full flex items-center justify-center`}>
            <AntDesign name="setting" size={22} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={tw`z-10 items-center justify-center absolute left-[20%] top-[35%] text-center w-[60%] text-center`}>
          <Text style={tw`text-white text-3xl font-bold `}>
            Hide and seeks free childrend books
          </Text>
        </View>
      </View>
      <View
        style={tw`-mt-5 rounded-3xl px-5 pt-7 bg-white h-[70%] bg-[${theme.Light.colors.cardcolor}]`}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text
              style={tw`text-xl font-semibold text-[${theme.Light.colors.text}]`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime in
              ad, nam placeat error nesciunt ipsa dolorem voluptatum! Odio
              beatae vel eveniet! Cumque dolor ab enim adipisci delectus
              incidunt qui. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Maxime in ad, nam placeat error nesciunt ipsa dolorem
              voluptatum! Odio beatae vel eveniet! Cumque dolor ab enim adipisci
              delectus incidunt qui. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maxime in ad, nam placeat error nesciunt ipsa
              dolorem voluptatum! Odio beatae vel eveniet! Cumque dolor ab enim
              adipisci delectus incidunt qui. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maxime in ad, nam placeat error
              nesciunt ipsa dolorem voluptatum! Odio beatae vel eveniet! Cumque
              dolor ab enim adipisci delectus incidunt qui. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Maxime in ad, nam placeat
              error nesciunt ipsa dolorem voluptatum! Odio beatae vel eveniet!
              Cumque dolor ab enim adipisci delectus incidunt qui. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Maxime in ad, nam
              placeat error nesciunt ipsa dolorem voluptatum! Odio beatae vel
              eveniet! Cumque dolor ab enim adipisci delectus incidunt qui.
              beatae vel eveniet! Cumque dolor ab enim adipisci delectus
              incidunt qui. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Maxime in ad, nam placeat error nesciunt ipsa dolorem
              voluptatum! Odio beatae vel eveniet! Cumque dolor ab enim adipisci
              delectus incidunt qui.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
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
