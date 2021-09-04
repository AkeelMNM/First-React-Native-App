import React,{useState, useEffect} from 'react';
import { Text, View, StyleSheet, ImageBackground} from 'react-native';
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

const DetailView = ({route, navigation}) => {
    const [resource, setResource] = useState([]);
    const [resourceName, setResourceName] = useState(route.params.resource);

    /**
    * This method is to call the getResourceFromApi method in ApiService class
    * to fetch information according to the relevant resource
    */
    const getResource = async () =>{
        await ApiService.getResourceFromApi(resourceName, route.params.id)
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

    /**
    * This method is to called is to view an civilization detail if the resource is civilization
    */
    const civilizationView = () =>{
        return (
            <View>
              <Text style={styles.heading}>{resource.name}</Text>
              <Text style={styles.list}>Expansion:</Text>
                     <Text style={styles.nestedList}>{resource.expansion}</Text>
              <Text style={styles.list}>Army Type:</Text>
                     <Text style={styles.nestedList}>{resource.army_type}</Text>
              <Text style={styles.list}>Team Bonus:</Text>
                     <Text style={styles.nestedList}>{resource.team_bonus}</Text>
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

    /**
    * This method is to called is to view an structure detail if the resource is structure
    */
    const structureView = () =>{
        return(
            <View>
              <Text style={styles.heading}>{resource.name}</Text>
              <Text style={styles.list}>Expansion:</Text>
                    <Text style={styles.nestedList}>{resource.expansion}</Text>
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
        )
    }

    /**
    * This method is to called is to view an unit detail if the resource is unit
    */
    const unitView = () =>{
        return (
            <View>
              <Text style={styles.heading}>{resource.name}</Text>
              <Text style={styles.list}>Expansion:</Text>
                    <Text style={styles.nestedList}>{resource.expansion}</Text>
              <Text style={styles.list}>Age:</Text>
                    <Text style={styles.nestedList}>{resource.age}</Text>
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
        )
    }


    return (
        <View>
            {
                resourceName === 'civilization'?(
                     civilizationView()
                ):resourceName === 'unit'?(
                     unitView()
                ):resourceName === 'structure'?(
                    structureView()
                ):null
            }
        </View>
    )
}
export default DetailView;