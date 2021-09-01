import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    maniContainer:{
        padding:15,
        borderRadius:5,
        elevation:2,
        marginTop:5,
        marginBottom:5
    },
    title:{
        fontSize:20
    },
    description:{
        fontSize:14,
        marginTop:3
    }
})

const ListItem = (props) => {
  return (
        <View style={styles.maniContainer}>
             <Text style={styles.title}>
                 {props.name}
             </Text>
             <Text style={styles.description}>
                 {props.description}
             </Text>
        </View>
  )
}
export default ListItem;