import React from 'react';
// import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, Texa} from 'react-native';
export default function App() {
  // const navigation = useNavigation();
  return (
    <View style={styles.container} >

      <View style={{ flex: 1.5, flexDirection:'row'}}>
        <Image style={{ flex: 1, width: 60, height: 60, alignItems:'center' }} source={{ uri:'https://www.freepnglogos.com/uploads/usb-png/png-usb-stick-transparent-usb-stick-images-pluspng-22.png'}}></Image>
        <View style={{ flex: 0.3 }}></View>
        <Text style={{ flex: 4, fontWeight:'bold', fontSize:16}}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
      </View>

      <View style={{ flex: 1.5 }}></View>
      <Text style={{ flex: 0.8, fontWeight: 'bold', fontSize: 18, textAlign:'center'}}>Cực kì hài lòng</Text>

      <Image style={{ flex: 1}} source={{ uri:'https://www.pngmart.com/files/23/Stars-PNG.png'}}></Image>

      <View style={{ flex: 0.6 }}></View>
      <TouchableOpacity style={{ flex: 1.5, flexDirection:'row', borderWidth:2, borderRadius:5, alignItems:'center'}}>
        <View style={{ flex: 0.5 }}></View>
        <Image style={{ flex: 0.4, height:40, width:50 }} source={{ uri: 'https://www.pngmart.com/files/1/Photo-Camera-PNG-Transparent-Image.png' }}></Image>
        <View style={{ flex: 0.1 }}></View>
        <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>Thêm hình ảnh</Text>
        <View style={{ flex: 0.5 }}></View>
      </TouchableOpacity>
      <View style={{ flex: 0.3 }}></View>
      <TextInput style={{ flex: 4, borderWidth:1, borderRadius:5, padding: 10, fontSize:18}} placeholder='Hãy chia sẽ những điều bạn thích về sản phẩm' multiline>

      </TextInput>
      <View style={{ flex: 0.6 }}></View>
      <TouchableOpacity style={{ flex: 1, backgroundColor:'blue', borderRadius:5, alignItems:'center', justifyContent:'center'}}>
        <Text style={{ color: 'white', fontWeight :'bold', fontSize:20}}>
          Gửi
        </Text>
      </TouchableOpacity>
      <View style={{ flex: 0.6 }}></View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    paddingLeft: '5%',
    paddingRight: '5%',
  }
  

});