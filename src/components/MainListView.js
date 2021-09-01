import React from 'react';
import { Text, View , StyleSheet, FlatList} from 'react-native';
import ListItem from './ListItem';

const styles = StyleSheet.create({
    heading:{
        alignItems:'center',
        fontSize:24
    },
    list:{
        paddingTop:20
    }
});

const MainListView = () => {
  return (
    <View>
      <Text style={styles.heading}>Age Of Empires II</Text>
      <FlatList
        style={styles.list}
        data ={[
            {name:'Civilization', description:'List of civilizations in the game'},
            {name:'Units', description:'List of soldier units in the game'},
            {name:'Structures', description:'List of building structures in the game'},
            {name:'Technologies', description:'List of technologies in the game'},
        ]}
        renderItem={({item}) => <ListItem name={item.name} description={item.description} />}
      />
    </View>
  )
}
export default MainListView;
