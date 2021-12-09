import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useNavigation } from '@react-navigation/native'
import { Button, View } from 'react-native';
import { AuthContext } from '../context/AuthContext'

WebBrowser.maybeCompleteAuthSession();

export const LoginScreen = () => {

  const navigation = useNavigation();

  const { setAuth } = React.useContext(AuthContext);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '183829205137-8eu9h56op0bqib757ed51rrc2r1f39dn.apps.googleusercontent.com',
  }); 

  React.useEffect(() => {
    if (response?.type === 'success') {
        navigation.navigate("DrawerNavigator");
        setAuth(response.authentication);
    }
  }, [response]);

  return (
    <View
      style={{flex:1, justifyContent: 'center', alignItems: 'center'}}
    >  
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
}