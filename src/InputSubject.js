import React from "react";
import styled, {ThemeProvider} from 'styled-components/native'
import 'react-native-gesture-handler';
import { Dimensions, StatusBar } from "react-native";
import { theme } from "../../components/theme";
import { useState } from "react";
import Inputs from "../../components/SubjectInput/Inputnames";
import SubjectTask from "../../components/SubjectInput/Task";
import { AsyncStorage } from "react-native";

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
        <ThemeProvider theme = {theme}>
            <Container>
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
            </Container>
        </ThemeProvider>
    ) : (
        <AppLoading 
        startAsync={_loadTasks}
        onFinish={() => setIsReady(true)}
        onError={console.error} />
    );
};

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: #63855d;
    align-self: flex-start;
    margin: 20px;`



export default InputSubject;

/*
           <Button 
            title = "move to calandar"
            onPress = {() => navigation.navigate('FirstSetting')} />
            */
