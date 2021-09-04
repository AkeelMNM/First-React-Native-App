import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList,TouchableHighlight,ImageBackground} from 'react-native';
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


const ListView = ({ route, navigation }) =>{
    const [resource, setResource] = useState([]);
    const [resourceName, setResourceName] = useState(route.params.resourceName);
    const [title, setTitle] = useState('');

    /**
    * This method is to call the getResourcesFromApi method in ApiService class
    * to fetch information according to the relevant resource
    */
    const getResources = () =>{
        ApiService.getResourcesFromApi(resourceName)
            .then(response =>{
                 resourceName === 'civilizations'?(
                     setResource(response.civilizations)
                 ):resourceName === 'units'?(
                     setResource(response.units)
                 ):resourceName === 'structures'?(
                     setResource(response.structures)
                 ):null
            })
            .catch((error) =>{
                console.log(error);
            })
    }

    /**
    * This method is to set the title in the screen according to the relevant resource
    */
    const setTitleName = () =>{
        resourceName === 'civilizations'?(
             setTitle('Civilizations')
        ):resourceName === 'units'?(
             setTitle('Units')
        ):resourceName === 'structures'?(
             setTitle('Structures')
        ):null
    }

    useEffect(() =>{
         setTitleName();
         getResources();
    },[])

    /**
    * This method is to navigate to the DetailView screen
    */
    const clickResource = (id) => {
        let changedResourceName = '';

        resourceName === 'civilizations'?(
             changedResourceName ='civilization'
        ):resourceName === 'units'?(
             changedResourceName = 'unit'
        ):resourceName === 'structures'?(
             changedResourceName = 'structure'
        ):null

        navigation.navigate('DetailView', { id: id , resource: changedResourceName})
    }

    return(
          <View>
              <Text style={styles.heading}>{title}</Text>
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
    )
}

export default ListView;