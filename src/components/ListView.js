import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import ListItem from './ListItem';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionCreator from '../state/ActionCreators/index';

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    paddingTop: 280,
  },
  heading: {
    alignItems: 'center',
    fontSize: 24,
    paddingTop: 20,
    paddingLeft: 20,
    fontWeight: '600',
    color: 'white',
  },
  list: {
    padding: 20,
  },
});

const ListView = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [resourceName] = useState(route.params.resourceName);
  const [title, setTitle] = useState('');

  const state = useSelector(state => state.category);

  const dispatch = useDispatch();

  const {getApiResources} = bindActionCreators(ActionCreator, dispatch);

  /**
   * This method is to call the getResourcesFromApi method in ApiService class
   * to fetch information according to the relevant resource
   */
  /*const getResources = () => {
    ApiService.getResourcesFromApi(resourceName)
      .then(response => {
        resourceName === 'civilizations'
          ? setResource(response.civilizations)
          : resourceName === 'units'
          ? setResource(response.units)
          : resourceName === 'structures'
          ? setResource(response.structures)
          : null;
      })
      .catch(error => {
        console.log(error);
      });
  };*/

  const getCategoryResource = () => {
    if (resourceName === 'civilizations') {
      return state.civilizations;
    } else if (resourceName === 'units') {
      return state.units;
    } else if (resourceName === 'structures') {
      return state.structures;
    }
  };

  getResources = () => {
    getApiResources(resourceName);
  };

  /**
   * This method is to set the title in the screen according to the relevant resource
   */
  const setTitleName = () => {
    resourceName === 'civilizations'
      ? setTitle('Civilizations')
      : resourceName === 'units'
      ? setTitle('Units')
      : resourceName === 'structures'
      ? setTitle('Structures')
      : null;
  };

  useEffect(() => {
    setTitleName();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    getResources();
  }, []);

  /**
   * This method is to navigate to the DetailView screen
   */
  const clickResource = id => {
    let changedResourceName = '';

    resourceName === 'civilizations'
      ? (changedResourceName = 'civilization')
      : resourceName === 'units'
      ? (changedResourceName = 'unit')
      : resourceName === 'structures'
      ? (changedResourceName = 'structure')
      : null;

    navigation.navigate('DetailView', {id: id, resource: changedResourceName});
  };

  return (
    <View>
      {isLoading ? (
        <View style={[styles.loadingContainer]}>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : (
        <View>
          <Text style={styles.heading}>{title}</Text>
          <FlatList
            style={styles.list}
            data={getCategoryResource()}
            renderItem={({item, index}) => (
              <TouchableHighlight
                onPress={() => clickResource(item.id)}
                key={index.toString()}
                underlayColor="none">
                <ListItem name={item.name} description={item.expansion} />
              </TouchableHighlight>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default ListView;
