import React,{useState, useEffect} from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import ApiService from '../service/ApiService';

const styles = StyleSheet.create({
    heading:{
        alignItems:'center',
        fontSize:26,
        paddingTop:20,
        paddingLeft:10,
        fontWeight:'800',
        color:'white'
    },
    list:{
        paddingTop:10,
        paddingLeft:20,
        fontSize:20,
        fontWeight:'600',
        color:'white'
    },
    nestedList:{
        paddingTop:10,
        paddingLeft:40,
        fontSize:18,
        color:'white'
    }
});

const StructureView = ({route, navigation}) => {
    const [resource, setResource] = useState([]);

    const getResource = async () =>{
        await ApiService.getResourceFromApi(route.params.resource, route.params.id)
            .then(response =>{
                 setResource(response)
            })
            .catch((error) =>{
                console.log(error);
            })
    }

    useEffect(() =>{
         getResource();
    },[])

  return (
      <ImageBackground source={require('../image/BgImage.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
              <Text style={styles.heading}>{resource.name}</Text>
              <Text style={styles.list}>Expansion:</Text><Text style={styles.nestedList}>{resource.expansion}</Text>
              <Text style={styles.list}>Age:</Text><Text style={styles.nestedList}>{resource.age}</Text>
              <Text style={styles.list}>Cost:</Text>
                    <Text style={styles.nestedList}>Wood: {(resource && resource.cost) && resource.cost.Wood}</Text>
              <Text style={styles.list}>Build time:  {resource.build_time}</Text>
              <Text style={styles.list}>Hit Points: {resource.hit_points}</Text>
              <Text style={styles.list}>Line of sight: {resource.line_of_sight}</Text>
              <Text style={styles.list}>Armor: {resource.armor}</Text>
              <Text style={styles.list}>Special:</Text>
                <View>
                     {
                          (resource && resource.special) && resource.special.map((item,index) =>{
                              return <Text key={index.toString()} style={styles.nestedList}>{item}</Text>
                          })
                     }
                </View>
            </View>
      </ImageBackground>
  )
}
export default StructureView;