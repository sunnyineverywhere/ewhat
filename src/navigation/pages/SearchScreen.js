import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchContext from '../components/contexts/SearchContext';
import EmptySearchResult from '../components/EmptySearchResult';

function SearchScreen({navigation}) {
  const {keyword} = useContext(SearchContext);

  if (keyword === ''){
    return <EmptySearchResult type="EMPTY_KEYWORD" />;
  }

  return (
    <View style={styles.block}>
        <Text>{keyword}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {},
});

export default  SearchScreen;
