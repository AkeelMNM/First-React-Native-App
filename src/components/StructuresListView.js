import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableHighlight,ImageBackground} from 'react-native';
import ApiService from '../service/ApiService';
import ListItem from './ListItem';

const styles = StyleSheet.create({
    heading:{
        alignItems:'center',
        fontSize:24,
        paddingTop:20,
        paddingLeft:20,
        fontWeight:'600',
        color:'white'
    },
    list:{
        padding:20
    }
});


const StructuresListView = ({ route, navigation }) =>{
    const [resource, setResource] = useState([]);

    const getResources = () =>{
        ApiService.getResourcesFromApi(route.params.id)
            .then(response =>{
                 setResource(response.structures)
            })
            .catch((error) =>{
                console.log(error);
            })
    }

    useEffect(() =>{
         getResources();
    },[])

    const clickResource = (id) => {
            navigation.navigate('Structure', { id: id, resource:'structure' })
    }

    return(
        <ImageBackground source={require('../image/BgImage.jpg')} style={{width: '100%', height: '100%'}}>
            <View>
                <Text style={styles.heading}>Structures</Text>
                <FlatList
                    style={styles.list}
                    data ={resource}
                    renderItem={({item,index}) =>
                        <TouchableHighlight onPress={() => clickResource(item.id)} key={index.toString()} underlayColor="none" >
                            <ListItem name={item.name} description={item.expansion} />
                        </TouchableHighlight>
                    }
                />
            </View>
        </ImageBackground>
    )
}

export default StructuresListView;