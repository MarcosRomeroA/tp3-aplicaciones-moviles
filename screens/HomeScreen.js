import axios from 'axios';
import React from 'react'
import { View, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const GOOGLE_INFO_URL = "https:/www.googleapis.com/oauth2/v3/userinfo?access_token=";

export const HomeScreen = () => {

    const { user, setUser, auth } = React.useContext(AuthContext);

    let token = auth;

    React.useEffect(() => {        
        getUser(token);
    }, [])

 
    const getUser = token => {

        axios.get(GOOGLE_INFO_URL+token.accessToken).then(resp=>{
            setUser(resp.data)            
        }).catch(error=>{
            console.log(error.message)
        })

    }

    return (
        <View>
            <Text>
                Bienvenido {user.given_name}
            </Text>
        </View>
    )
}
