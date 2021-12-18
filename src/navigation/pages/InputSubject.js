import React from "react";
import 'react-native-gesture-handler';
import { theme } from "../../components/theme";
import PropsTypes from 'prop-types'
import { useState } from "react";
import IconButton from "../../components/Main/IconButton";
import { Icon } from "react-native-elements";
import { images } from "../../components/Main/image";
import Inputs from "../../components/SubjectInput/Inputs";
import SubjectTask from "../../components/SubjectInput/Task";
import AppLoading from "expo-app-loading";
import { AsyncStorage } from "react-native";
import { View,  StyleSheet, Dimensions, StatusBar, Text, TextInput, ScrollView} from "react-native";
import SubjectInsert from '../../components/SubjectInput/SubjectInsert';
import SubjectList from '../../components/SubjectInput/SubjectList';
import SubjectListItem from "../../components/SubjectInput/SubjectListItem";

const InputSubject = () => {
  return(
    <View style = {styles.container}>
      <Text style = {styles.pageTitle}>Lecture List</Text>
      <View style = {styles.card}>
        <SubjectInsert />
        <SubjectList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color3,
  },
  pageTitle:{
    color: theme.color1,
    fontSize: 36,
    fontWeight: '800',
    marginTop: 30,
    marginBottom: 10,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: theme.color3,
  },
  card: {
    backgroundColor: theme.color5,
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});



/*
const List = styled.ScrollView`
    flex: 1;
    width: ${({width}) => width - 40}px;`


const InputSubject = ({navigation}) => {
    const [isReady, setIsReady] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState({});

    const width = Dimensions.get('window').width;

    const _saveTasks = async tasks => {
        try {
          await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
          setTasks(tasks);
        } catch (e) {
          console.error(e);
        }
      };
      const _loadTasks = async () => {
        const loadedTasks = await AsyncStorage.getItem('tasks');
        setTasks(JSON.parse(loadedTasks || '{}'));
      };
    
      const _addTask = () => {
        const ID = Date.now().toString();
        const newTaskObject = {
          [ID]: { id: ID, text: newTask, completed: false },
        };
        setNewTask('');
        _saveTasks({ ...tasks, ...newTaskObject });
      };
      const _deleteTask = id => {
        const currentTasks = Object.assign({}, tasks);
        delete currentTasks[id];
        _saveTasks(currentTasks);
      };
      const _toggleTask = id => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];
        _saveTasks(currentTasks);
      };
      const _updateTask = item => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[item.id] = item;
        _saveTasks(currentTasks);
      };
    
      const _handleTextChange = text => {
        setNewTask(text);
      };
      const _onBlur = () => {
        setNewTask('');
      };
    return isReady ? (
        <View>
                <StatusBar 
                    barStyle='light-content'     
                />
                <Title>Input lectures</Title>
                <Inputs 
                    placeholder = "+ Add subjects"
                    value = {newTask}
                    onChangeTest = {_handleTextChange}
                    onSubmitEditing = {_addTask}
                    onBlur = {_onBlur}/>
                <List width = {width}>
                    {Object.values(tasks).reverse().map(item => (
                        <SubjectTask 
                        key={item.id}
                        item={item}
                        deleteTask={_deleteTask}
                        toggleTask={_toggleTask}
                        updateTask={_updateTask} />
                    ))}
                </List>
            </View>
    ) : (
        <AppLoading 
        startAsync={_loadTasks}
        onFinish={() => setIsReady(true)}
        onError={console.error} />
    );
};




const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: #63855d;
    align-self: flex-start;
    margin: 20px;`


*/

export default InputSubject;

/*
           <Button 
            title = "move to calandar"
            onPress = {() => navigation.navigate('FirstSetting')} />

            */
