import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
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

    return(
        <View>
            <Text style={styles.heading}>Structures</Text>
            <FlatList
                style={styles.list}
                data ={resource}
                renderItem={({item}) => <ListItem name={item.name} description={item.expansion} />}
            />
        </View>
    )
}

export default StructuresListView;