import AsyncStorage  from "@react-native-async-storage";
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import COLORS from "../../conts/Color";
import Button from '../components/Button';
import Input from '../components/Input';

const RegistrationScreen = ({navigation}) => {
    const [inputs, setInputs]= React.useState({
        email:'',
        fullname:'',
        phone:'',
        password:'',
    });

    const[errors,setErrors]=React.useState({});
    const validate = () => {
    Keyboard.dismiss();
     if(!inputs.email){
        handleError('Please input email','email');
        valid=false;
    } else if(!inputs.email.match(/\S+@\S+\.\S+/)){
    handleError('Please input valid email','email');
    }
    
    if (!inputs.fullname){
    handleError('Please input fullname', 'fullname');
    }
    if(!inputs.phone){
     handleError('Please input phone number', 'phone');
    }
    if(!inputs.password){
     handleError('Please input password', 'password');
    } else if (inputs.password.length < 5 ) {
        handleError ('Min password length of 5','password');
    }
    if(valid){
        register();

    };

    }
    const register = () => {
        

    }
  };
  
    const handleOnChange=(text,input)=>{
        setInputs(prevState=>({... prevState,[input]:text}));
    };
    const handleError=(errorMessage,input)=>{
        setErrors(prevState=>({... prevState,[input]:errorMessage}));
    };

    
    return( 
    <SafeAreaView style={{backgroundColor:COLORS.white, flex:1}} >
        <ScrollView 
        contentContainerStyle={{
            paddingTop: 50,
            paddingHorizontal:20,
        }}>
            <Text style={{color: COLORS.black, fontSize:40, fontWeight:'bold'}}>
                Register
            </Text>
            <Text style={{color: COLORS.grey, fontSize:18, marginVertical: 10}}>
                Enter Your Details to Register
            </Text>
            <View style={{marginVertical:20}} >
                <Input
                    placeholder="Enter your email address"
                    iconName="email-outline"
                    label="Email"
                    error={errors.email}
                    onFocus={()=>{
                      handleError(null,'email');
                    }}
                    onChangeText={text => handleOnChange(text, 'email')}
                // error='Input email'
                />
                <Input
                    placeholder="Enter your Fullname"
                    iconName="account-outline"
                    label="Fullname"
                    error={errors.fullname}
                    onFocus={()=>{
                      handleError(null,'fullname');
                    }}
                    onChangeText={text => handleOnChange(text, 'fullname')}
                
                />
                <Input
                    keyboardType='numeric'
                    placeholder="Enter your Phone number"
                    iconName="phone-outline"
                    label="phone"
                    error={errors.phone}
                    onFocus={()=>{
                      handleError(null,'phone');
                    }}
                    onChangeText={text => handleOnChange(text, 'phone')}
                
                />
                <Input
                    placeholder="Enter your Password"
                    iconName="lock-outline"
                    label="Password"
                    password
                    error={errors.password}
                    onFocus={()=>{
                      handleError(null,'password');
                    }}
                    onChangeText={text => handleOnChange(text, 'password')}
                
                />
                <Button title='Register' onPress={validate} />
                <Text
                onPress={()=>navigation.navigate('LoginScreen')}
                style={{
                    color:COLORS.black,
                    textAlign:'center',
                    fontSize:16,
                    fontWeight:'bold',
                }}>
                Already have account?Login
                </Text>
            </View>

        </ScrollView>
    </SafeAreaView> 
    );


export default RegistrationScreen;