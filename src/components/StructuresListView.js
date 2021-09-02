import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ApiService from '../service/ApiService';
import ListItem from './ListItem';

const styles = StyleSheet.create({
    heading:{
        alignItems:'center',
        fontSize:24,
        paddingTop:20,
        paddingLeft:20
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
        <View>
            <Text style={styles.heading}>Structures</Text>
            <FlatList
                style={styles.list}
                data ={resource}
                renderItem={({item,index}) =>
                    <TouchableOpacity onPress={() => clickResource(item.id)} key={index.toString()} >
                        <ListItem name={item.name} description={item.expansion} />
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

export default StructuresListView;