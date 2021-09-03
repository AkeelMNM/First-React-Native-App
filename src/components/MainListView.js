import React from 'react';
import { Text, View , StyleSheet, FlatList, TouchableHighlight, ImageBackground} from 'react-native';
import ListItem from './ListItem';


const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    heading:{
        alignItems:'center',
        fontSize:28,
        color:'white',
        fontWeight:'800',
    },
    list:{
        paddingTop:20
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    }
});

const mainListData = [
    {id:'civilizations',name:'Civilization', description:'List of civilizations in the game'},
    {id:'units', name:'Units', description:'List of soldier units in the game'},
    {id:'structures', name:'Structures', description:'List of building structures in the game'},
]

const MainListView = ({navigation}) => {
   const clickResources = (id) => {
        navigation.navigate('List', { resourceName: id })
   }

  return (
          <View style={styles.sectionContainer}>
                <Text style={styles.heading}>Age Of Empires II</Text>
                <FlatList
                  style={styles.list}
                  data ={mainListData}
                  renderItem={({item, index}) =>
                      <TouchableHighlight onPress={() => clickResources(item.id)} key={index.toString()} underlayColor="none">
                          <ListItem key={index.toString()} id={item.id} name={item.name} description={item.description} />
                      </TouchableHighlight>
                  }
                />
          </View>
  )
}

export default MainListView;
