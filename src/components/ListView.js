import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ApiService from '../service/ApiService';

const styles = StyleSheet.create({
    heading:{
        alignItems:'center',
        fontSize:24
    },
    list:{
        paddingTop:20
    }
});


const ListView = ({ route, navigation }) =>{
    const [resource, setResource] = useState([]);

    const getResources = () =>{
        ApiService.getResourcesFromApi(route.params.id)
            .then(response =>{
                setResource(response);
            })
            .catch((error) =>{
                console.log(error);
            })
    }

    useEffect(() =>{
         getResources;
    },[])

    return(
        <View>
            <FlatList
                style={styles.list}
                data ={resource}
                renderItem={({item}) => <ListItem name={item.name} description={item.description} />}
            />
        </View>
    )
}

export default ListView;