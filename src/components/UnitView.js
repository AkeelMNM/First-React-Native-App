import React,{useState, useEffect} from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import ApiService from '../service/ApiService';

const styles = StyleSheet.create({
    heading:{
        alignItems:'center',
        fontSize:24,
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

const UnitView = ({route, navigation}) => {
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
        <View>
          <Text style={styles.heading}>{resource.name}</Text>
          <Text style={styles.list}>Expansion:</Text><Text style={styles.nestedList}>{resource.expansion}</Text>
          <Text style={styles.list}>Age:</Text><Text style={styles.nestedList}>{resource.age}</Text>
          <Text style={styles.list}>Cost:</Text>
                <Text style={styles.nestedList}>Wood: {(resource && resource.cost) && resource.cost.Wood}</Text>
                <Text style={styles.nestedList}>Gold: {(resource && resource.cost) && resource.cost.Gold}</Text>
          <Text style={styles.list}>Build time:  {resource.build_time}</Text>
          <Text style={styles.list}>Reload time: {resource.reload_time}</Text>
          <Text style={styles.list}>Attack delay: {resource.attack_delay}</Text>
          <Text style={styles.list}>Movement rate: {resource.movement_rate}</Text>
          <Text style={styles.list}>Hit Points: {resource.hit_points}</Text>
          <Text style={styles.list}>Range: {resource.range}</Text>
          <Text style={styles.list}>Attack: {resource.attack}</Text>
          <Text style={styles.list}>Accuracy: {resource.accuracy}</Text>
        </View>
      </ImageBackground>
  )
}
export default UnitView;