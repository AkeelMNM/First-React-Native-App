import React,{useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ApiService from '../service/ApiService';

const styles = StyleSheet.create({
    heading:{
        alignItems:'center',
        fontSize:24,
        paddingTop:20,
        paddingLeft:10,
        fontWeight:'800'
    },
    list:{
        paddingTop:10,
        paddingLeft:20,
        fontSize:18,
        fontWeight:'600'
    },
    nestedList:{
        paddingTop:10,
        paddingLeft:40,
        fontSize:16
    }
});

const CivilizationView = ({route, navigation}) => {
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
    <View>
      <Text style={styles.heading}>{resource.name}</Text>
      <Text style={styles.list}>Expansion:</Text><Text style={styles.nestedList}>{resource.expansion}</Text>
      <Text style={styles.list}>Army Type:</Text><Text style={styles.nestedList}>{resource.army_type}</Text>
      <Text style={styles.list}>Team Bonus:</Text><Text style={styles.nestedList}>{resource.team_bonus}</Text>
      <Text style={styles.list}>Civilization bonus:</Text>
      <View>
           {
                (resource && resource.civilization_bonus) && resource.civilization_bonus.map((item,index) =>{
                    return <Text key={index.toString()} style={styles.nestedList}>{item}</Text>
                })
           }
      </View>
    </View>
  )
}
export default CivilizationView;