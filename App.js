import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import { CheckBox } from 'react-native-web';
export default function App() {
//   const navigation = useNavigation();

    const [value, setValue] = useState('');
    const [length, setLength] = useState(0);    
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);

    function generateRandomPassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialChars) {
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
        let allChars = '';
    
        if (includeLowerCase) {
            allChars += lowerCaseChars;
        }
        if (includeUpperCase) {
            allChars += upperCaseChars;
        }
        if (includeNumbers) {
            allChars += numberChars;
        }
        if (includeSpecialChars) {
            allChars += specialChars;
        }
    
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }
    
        return password;
    }


    return (
       
    <View style={styles.container}>        
        <View style={{flex:1, borderRadius:'15px', backgroundColor:'#23235B', padding:'20px'}}> 
            <View style={{flex:2, alignItems:'center'}}>
                <Text style={{color:'white', fontSize:'25px'}}>PASSWORD</Text>
                <Text style={{color:'white', fontSize:'25px'}}>GENERATOR</Text>
            </View>
            <View style={{flex:2, alignItems:'center'}}>
                <TextInput value={value} style={{backgroundColor:'#151537', width:'297px', height:'55px', color:'white'}}></TextInput>
            </View>
            <View style={{flex:5}}>
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}> 
                    <Text style={{color:'white', fontSize:'20px'}}>Include length</Text>
                    <TextInput onChangeText={(text) => {
                        // const numericValue = text.replace(/[^0-9]/g, '');
                        setLength(Number(text));
                        }} style={{backgroundColor:'white', width:'118px', height:'33px'}}></TextInput>
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}> 
                    <Text style={{color:'white', fontSize:'20px'}}>Include lower case letters</Text>
                    <CheckBox value={isChecked1} onValueChange={()=>setIsChecked1(!isChecked1)}></CheckBox>
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}> 
                    <Text style={{color:'white', fontSize:'20px'}}>Include upcase letters</Text>
                    <CheckBox value={isChecked2} onValueChange={()=>setIsChecked2(!isChecked2)}></CheckBox>
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}> 
                    <Text style={{color:'white', fontSize:'20px'}}>Include number </Text>
                    <CheckBox value={isChecked3} onValueChange={()=>setIsChecked3(!isChecked3)}></CheckBox>   
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}> 
                    <Text style={{color:'white', fontSize:'20px'}}>Include special symbol</Text>
                    <CheckBox value={isChecked4} onValueChange={()=>setIsChecked4(!isChecked4)}></CheckBox>
                </View>

            </View>
            <View style={{flex:2}}>
                <Button title='GENERATE PASWORD' onPress={() => {
                    const password = generateRandomPassword(length, isChecked1, isChecked2, isChecked3, isChecked4);
                    setValue(password);
                }}></Button>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B3B98',
        width: '360px',
        height: '640px',
        padding: '20px',
    },
});

