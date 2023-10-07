import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
export default function App() {
//   const navigation = useNavigation();

    var [email, setEmail] = useState('')
    var [password, setPassword] = useState('')

    var array=[
        {email:'hieudong01', password:'1234'},
        {email:'hieudong02', password:'1234'},
        {email:'hieudong03', password:'1234'}
    ]

    return (
       
    <View style={styles.container} >
    
        <View style={{
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            fontFamily: 'sans-serif',
            fontWeight: 'bold' 
            }}>LOGIN</View>

        <View style={{ 
            flex: 1, 
            }}>
                <TextInput onChangeText={setEmail}
                style={{ flex: 1, backgroundColor:'#9ac2b9', padding:9, borderRadius:5}}
                placeholder='Email'></TextInput>
                <View style={{flex:1}}></View>
                <View style={{ flex: 1.5, flexDirection: 'row', backgroundColor: '#9ac2b9', borderRadius: 5 }}>
                <TextInput onChangeText={setPassword}
                    style={{ flex: 1, backgroundColor: '#9ac2b9', padding: 9 }}
                    placeholder='Password'></TextInput>
                <Image style={{ marginRight: 20, height: 40, width: 40, alignSelf: 'center', backgroundColor: '#9ac2b9' }} source={{ uri: 'https://static.thenounproject.com/png/4830332-200.png' }}></Image>
                </View>
                <View style={{flex:1}}></View>
        </View>

        <View style={{ flex: 2 }}>
            <Button title='LOGIN' color="red" style={{ flex: 1 }} onPress={()=> {
                if (check(array, email, password)) {
                    //chuyen trang
                    console.log("true");
                } else {
                    //thong bao
                    console.log("false");
                }
            }}></Button>
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontWeight:'bold'}}>When you agree to terms and condrons</Text>
            <Text style={{ color:'#1565f7' }}>For got your password</Text>
            <Text style={{ fontWeight: 'bold' }}>Or login with</Text>
            </View>
            <View style={{ flex: 1, flexDirection:'row'}}>
            <Image style={{ flex: 1, borderRadius:15 }} source={{ uri: "https://i.pinimg.com/564x/7c/e7/55/7ce755b70a47b7b73618d538b7fcb228.jpg" }}></Image>
            <Image style={{ flex: 1, borderRadius: 15 }} source={{ uri: "https://i.pinimg.com/564x/1c/e6/41/1ce64129a8c06a58fb2bbc79e70d5e0d.jpg" }}></Image>
            <Image style={{ flex: 1, borderRadius: 15 }} source={{ uri: "https://i.pinimg.com/564x/60/41/99/604199df880fb029291ddd7c382e828b.jpg" }}></Image>
            </View>
            <View style={{ flex: 1.5 }}></View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 20,
  },
  

});

var check = (array, email, password) => {
    array.forEach(element => {
        if (element.email==email && element.password==password) {
            return true;
        }
    });
}