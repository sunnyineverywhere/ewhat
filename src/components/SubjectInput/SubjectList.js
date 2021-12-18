// components/TodoList.js
import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import SubjectListItem from './SubjectListItem';

const SubjectList = () => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
        <SubjectListItem />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default SubjectList;