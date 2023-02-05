import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {theme} from '../config/color';
const DetailsScreen = () => {
  return (
    <View style={tw`bg-[${theme.Light.colors.cardcolor}] flex-1`}>
      <View style={tw`h-[30%] relative `}>
        <ImageBackground
          style={styles.overlay}
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/2081/8163/files/Hide-and-Seek.jpg?v=1613041069',
          }}
        />
        <View
          style={tw`z-10 items-center justify-center absolute left-[20%] top-[35%] text-center w-[60%] text-center`}>
          <Text style={tw`text-white text-3xl font-bold `}>
            Hide and seeks free childrend books
          </Text>
        </View>
      </View>

      <View
        style={tw`-mt-5 rounded-3xl p-5 bg-white h-[70%] bg-[${theme.Light.colors.cardcolor}]`}>
        <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
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
