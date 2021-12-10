import React, { useState, } from 'react';
import { Text, SafeAreaView,View, Button, FlatList, TouchableOpacity} from 'react-native';
import { viewStyles,textStyles} from '../../components/styles';
import InputTask from '../../components/Main/Input';
import Task from '../../components/Main/Task';
import IconButton from '../../components/Main/IconButton';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { images } from '../../components/Main/image';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';



const HomeScreen = ({navigation}) =>{
   
   const [newTask, setNewTask] = useState('');
   const [tasks, setTasks] = useState({});
   const _addTask = () =>{
      const ID = Date.now().toString();
      const newTaskObject = {
         [ID]: {id: ID, text: newTask, completed: false},
      };
      setNewTask('');
      setTasks({...tasks,...newTaskObject});
   }
   const _deleteTask = id => {
      const currentTasks = Object.assign({}, tasks);
      delete currentTasks[id];
      setTasks(currentTasks);
   };
   const _deletAllTask = () => {
      setTasks([]);
   };
   const _sortTasks = () => {
       const sortTask = [...tasks];
       sortTask.sort((a,b) => (a.id-b.id)? 1: -1);
   };
   const _toggleTask = id => {
      const currentTasks = Object.assign({}, tasks);
      currentTasks[id]['completed'] = !currentTasks[id]['completed'];
      setNewTask(currentTasks);
   };
   const _handleTextChange = text => {
      setNewTask(text);
   };
   const _updateTask = item => {
      const currentTasks = Object.assign({},tasks);
      currentTasks[item.id] = item;
      setTasks(currentTasks);
   };
   const _onBlur = () => {
      setNewTask('');
   };
   
   const Stack = createStackNavigator();
   let today = new Date().toString().slice(0,10); //show date on header
 
    return (
    <SafeAreaView style={viewStyles.container}>
       {/* header == Date and Delete All button */}
       <View style={viewStyles.header}>
         <Text style ={textStyles.title}>Date: {today}</Text>
         <IconButton type={images.deleteAll} onPressOut={_deletAllTask}/>
       </View>
{ /* Input Tasks here */ }
       <Input value={newTask} onChangeText={_handleTextChange}
         onSubmitEditing={_addTask} onBlur={_onBlur}/>
            { /* FlatList == List all Tasks */}
         <FlatList
            data={Object.values(tasks)}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
            <TouchableOpacity onPress={onPress}>
            <Task key = {item.id} item={item} deleteTask={_deleteTask} toggleTask={_toggleTask} updateTask={_updateTask}/>
            </TouchableOpacity>
            )}

          />

    </SafeAreaView>
   
    
   )
}

const Tab = createBottomTabNavigator();

const ReviewPage = () => {
   return (
      <View>
      <Text>Review</Text>
      </View>
  );
}
const SearchPage = () =>{
   return(
      <View>
      <Text>Search</Text>
      </View>
   );
}

const AddSubjectPage = () =>{
   return(
      <View>
      <Text>AddSubject</Text>
      </View>
   )
}

const CalendarPage = () =>{
   return(
      <View>
      <Text>Calendar</Text>
      </View>
   )
}



const Main = () => {
 return(
<NavigationContainer>
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={{
                tabBarActiveTintColor: '#224E41',
                tabBarShowLabel: false,
              }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  title: 'Home',
                  tabBarIcon: ({color, size}) => (
                    <Icon name="home" color={color} size={size} />
                  ),
                }}
              />
            <Tab.Screen
                name="Clandar"
                component={CalanderPage}
                options={{
                  title: 'Calendar',
                  tabBarIcon: ({color, size}) => (
                    <Icon name="calendar-today" color={color} size={size} />
                  ),
                }}
              />
              
            <Tab.Screen
                name="Search"
                component={SearchPage}
                options={{
                  title: 'Search',
                  tabBarIcon: ({color, size}) => (
                    <Icon name="search" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Review"
                component={ReviewPage}
                options={{
                  title: 'Review',
                  tabBarIcon: ({color, size}) => (
                    <Icon name="message" color={color} size={size} />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>

 )
};

export default Main;
