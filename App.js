import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth:1}} onChangeText={onChangeText}/>
        </View>
    );
};
const MyApp = ()=> {
    // let username = "" ;
    // let pw = "" ;
    const [userType, setuserType] =useState('');
    const [username, setUsername] =useState('');
    const [pw, setPw] =useState('');

  return (
      <View style={{padding:20, paddingTop: 50}}>
          {/*/!*EXERCISE 1B*!/*/}
          <Text>User Type:</Text>
          <RNPickerSelect
              onValueChange={(value) => setuserType(value)}
              items={[
                  { label: 'Admin', value: 'Admin' },
                  { label: 'Guest', value: 'Guest' },
              ]}
          />
          {/*State*/}
          {/*<Text>Password:</Text>*/}
          {/*<TextInput style={{borderWidth:1}}*/}
          {/*    onChangeText={(text) => setPw(text)}*/}
          {/*/>*/}
          {/*<TouchableOpacity onPress={() =>ToastAndroid.show(pw, ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}
          {/*<Text>{pw}</Text>*/}

          {/*Getting Text input values*/}
          {/*<Text>Username:</Text>*/}
          {/*<TextInput style={{borderWidth: 1}}*/}
          {/*           onChangeText={(text)=> username = text}/>*/}
          {/*<Text>Password:</Text>*/}
          {/*<TextInput style={{borderWidth: 1}}*/}
          {/*          onChangeText={(text)=> pw = text}/>*/}
          {/*<TouchableOpacity onPress={() =>ToastAndroid.show("HELLO" + username + pw, ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}


        {/*EXERCISE 1A*/}
        {/*<Text>Password:</Text>*/}
        {/*<TextInput style={{borderWidth: 1}}/>*/}
          {/*EXERCISE 1C and 1D*/}
          {/*<Button*/}
          {/*    title="LOG IN"*/}
          {/*    onPress={()  => Alert.alert("Welcome!")}/>*/}

          {/*EXERCISE 1E*/}
          {/*<TouchableOpacity*/}
          {/*    onPress={() => Alert.alert("2nd Welcome!")}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*EXERCISE 1F*/}
          {/*<TouchableOpacity*/}
          {/*    onPress={() => ToastAndroid.show("2nd Welcome!", ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*EXERCISE 1G*/}
          {/*<Text>User Name:</Text>*/}
          {/*<TextInput style={{borderWidth:1}}*/}
          {/*           onChangeText={(text) => setUsername(text)}*/}
          {/*/>*/}
          {/*<Text>{username}</Text>*/}
          {/*<Text>Password:</Text>*/}
          {/*<TextInput style={{borderWidth:1}}*/}
          {/*           onChangeText={(text) => setPw(text)}*/}
          {/*/>*/}
          {/*<Text>{pw}</Text>*/}

          {/*<InputBox label="User Name:" onChangeText={(text) => setUsername(text)}/>*/}
          {/*    <InputBox label="Password:" onChangeText={(text) => setPw(text)}/>*/}

          {/*<TouchableOpacity onPress={() =>ToastAndroid.show("Welcome" + " " + userType + " " + username , ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*Javascript with react native component*/}
          <InputBox label="User Name:" onChangeText={(text) => setUsername(text)}/>
              <InputBox label="Password:" onChangeText={(text) => setPw(text)}/>

          <TouchableOpacity onPress={() => {
              const correctPassword = "123";
              let mymessage = "Error! Wrong Password!";
              if (pw == correctPassword) {
                  mymessage = "Welcome" + userType + " " + username;
              }
              ToastAndroid.show(mymessage, ToastAndroid.SHORT)
            }
          }>
          </TouchableOpacity>

      </View>
  );
};

export default MyApp;
