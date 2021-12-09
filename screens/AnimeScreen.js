import React, { useState } from 'react'
import axios from 'axios';
import { View, Text, Button, TextInput, FlatList, Dimensions } from 'react-native';

const Item = ({ title }) => (
    <View>
        <Text>{title}</Text>
    </View>
);

export const AnimeScreen = () => {

    const [ animeInfo, setAnimeInfo ] = useState([]);

    const [ input, setInput ] = useState([]);

    const ANIME_URL = 'https://anime-facts-rest-api.herokuapp.com/api/v1/';


    const getAnimeInfo = async (anime) => {

        anime = anime.toLowerCase().replace(/ /g,"_");

        axios.get(ANIME_URL+anime).then(resp=>{

            if(!resp.data.data)
                throw new Error('No se encontro el anime');

            setAnimeInfo(resp.data.data);

        }).catch(error => {
            setAnimeInfo(false);
            console.log('No se encontro el anime');
        })
    }

    const renderItem = ({ anime }) => (
        <Item title={anime.fact} />
      );
    
    return (
        <View style={{
            flex:1 
        }}>
            <View style={{marginTop: 10}}>   
                <View style={{marginLeft:15}}>
                    <Text  
                        style={{ 
                            justifyContent: 'center', 
                            alignContent:'center', 
                            fontSize:40,
                            fontWeight:'bold', 
                            marginBottom: 50
                        }}>
                        Hechos del anime:
                    </Text>
                </View>
                <View
                    style={{
                        height:380,
                        marginLeft:10,
                        marginRight: 10
                    }}
                >  
                    <TextInput
                        onChange={(e) => setInput(e.nativeEvent.text)}
                        placeholder="Ingrese un anime, ej: 'Naruto'"
                        keyboardType="default"
                        style={{marginBottom:20}}
                    >
                    </TextInput>
                    <Button  
                        
                        title="Buscar"
                        onPress={() => getAnimeInfo(input)}
                    />
                    <View>
                        <Text style={{fontSize:20, marginTop:20}}>
                            Hechos de: {input}
                        </Text>
                    </View>  
                    <View>
                        {   
                            animeInfo ? 
                            <FlatList
                                style={{marginTop:40}}
                                data={animeInfo}
                                keyExtractor={(item) => item.fact_id.toString()}
                                renderItem={({item})=>(
                                <View style={{justifyContent:'center',marginBottom:10}}>
                                    <Text style={{backgroundColor:'grey',color:'white',padding:10,width:Dimensions.get('window').width}}>
                                     {item.fact}
                                    </Text>
                                </View>
                                )}
                            />
                            : <Text  style={{marginTop:20}}>No se encontro ningun resultado para esta busqueda</Text>
                        }
                    </View>        
                </View>
            </View>    
        </View>
    )
}

