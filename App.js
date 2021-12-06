import React, { useState, } from 'react';
import { Text, SafeAreaView,View, Dimensions, Button, FlatList,ScrollView, TouchableOpacity} from 'react-native';
import { viewStyles,textStyles} from './styles';
import Input from './components/Input';
import Task from './components/Task';
import IconButton from './components/IconButton';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { images } from './image';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import TabBar from './components/TabBar';

//import TabBarItem from './components/TapBarItem';

const HomeScreen = () =>{
   
   const [isReady, setIsReady] = useState(false);
   const [newTask, setNewTask] = useState('');
   const [tasks, setTasks] = useState({});
   const [isSelected, setSelected] = useState(false);

   const _saveTasks = async tasks => {
      try{
         await AsyncStorage.setItem('tasks',JSON.stringify(tasks));
         setTasks(tasks);
      }catch(e) {
         console.error(e);
      }
   }
   const _addTask = () =>{
      const ID = Date.now().toString();
      const newTaskObject = {
         [ID]: {id: ID, text: newTask, completed: false, selected: false},
      };
      setNewTask('');
      setTasks({...tasks,...newTaskObject});
      _saveTasks({...tasks,...newTaskObject });
   }
   const _deleteTask = id => {
      const currentTasks = Object.assign({}, tasks);
      delete currentTasks[id];
      setTasks(currentTasks);
      _saveTasks(currentTasks);
   };
   const _deletAllTask = () => {
      setTasks([]);
  
   };
   const _sortTask = () => {
      let sortTasks = Object.values(tasks);
      sortTasks.reverse();
      setTasks(sortTasks);    
   };
   const _toggleTask = id => {
      const currentTasks = Object.assign({}, tasks);
      currentTasks[id]['completed'] = !currentTasks[id]['completed'];
     setNewTask(currentTasks);
      _saveTasks(currentTasks);
   };
   const _handleTextChange = text => {
      setNewTask(text);
   };
   const _updateTask = item => {
      const currentTasks = Object.assign({},tasks);
      currentTasks[item.id] = item;
      setTasks(currentTasks);
      _saveTasks(currentTasks);
   };
   const _onBlur = () => {
      setNewTask('');
   };
   const _loadTasks = async () => {
      const loadedTasks = await AsyncStorage.getItem('tasks');
      setTasks(JSON.parse(loadedTasks || '{}'));
   };
   const onPress = () => {
         alert("deselected")
      
   }

    return isReady ? (
        
    <SafeAreaView style={viewStyles.container}>
       <View style={viewStyles.header}>
         <Text style ={textStyles.title}>Date: {today}</Text>
         <TouchableOpacity  style={viewStyles.buttonText}>
             <IconButton type={images.deleteAll} onPress={_deletAllTask}/>
         
         </TouchableOpacity>
         
         
       </View>
       <Input value={newTask} onChangeText={_handleTextChange}
         onSubmitEditing={_addTask} onBlur={_onBlur}/> 
<TabBar/>
         
         {/* <TouchableOpacity  onPress={_sortTask} style={viewStyles.btnContainer}>
            <Text style={viewStyles.buttonText}>Sort</Text>
         </TouchableOpacity> */}
         
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
   
    
   ) : (
      <AppLoading 
         startAsync = {_loadTasks}
         onFinish = {() => setIsReady(true)}
         onError={console.error}/>
   );
}
const Tab = createBottomTabNavigator();

//const Stack = createStackNavigator();
let today = new Date().toString().slice(0,10);

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

const CalanderPage = () =>{
   return(
      <View>
      <Text>CalanderPage</Text>
      </View>
   )
}
const App = () => {
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
                  title: '홈',
                  tabBarIcon: ({color, size}) => (
                    <Icon name="home" color={color} size={size} />
                  ),
                }}
              />
            <Tab.Screen
                name="Clandar"
                component={CalanderPage}
                options={{
                  title: '홈',
                  tabBarIcon: ({color, size}) => (
                    <Icon name="calendar-today" color={color} size={size} />
                  ),
                }}
              />
              
            <Tab.Screen
                name="Search"
                component={SearchPage}
                options={{
                  title: '검색',
                  tabBarIcon: ({color, size}) => (
                    <Icon name="search" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Review"
                component={ReviewPage}
                options={{
                  title: '리뷰',
                  tabBarIcon: ({color, size}) => (
                    <Icon name="message" color={color} size={size} />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
  
   )
  };

export default App;
