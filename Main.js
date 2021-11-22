
import React, { useState, } from 'react';
import {Text, SafeAreaView,View, Dimensions, Button, ScrollView, TouchableOpacity} from 'react-native';
import { viewStyles,textStyles,Buttonstyles } from './styles';
import Input from './components/Input';
import Task from './components/Task';
import IconButton from './components/IconButton';
import MenuButton from './components/MenuButton';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { images } from './image';

const HomeScreen = ({navigation}) =>{
   const width = Dimensions.get('window').width;
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
   }
    return (
    <SafeAreaView style={viewStyles.container}>
       <View style={viewStyles.header}>
         <Text style ={textStyles.title}>Date: {today}</Text>
         <TouchableOpacity onPress={()=> navigation.navigate('Menu') }>
            <Text style={textStyles.menu}>
               menu
            </Text>
         </TouchableOpacity>


                  <IconButton type={images.add} onPressOut= {()=> navigation.navigate('AddSubject')}/>


       </View>
         <Input value={newTask} onChangeText={_handleTextChange}
         onSubmitEditing={_addTask} onBlur={_onBlur}/>
         <TouchableOpacity style={Buttonstyles.button} onPress={_deletAllTask}>
            <Text>Delete All</Text>
         </TouchableOpacity>

         <TouchableOpacity style={Buttonstyles.button} onPress={_sortTasks}>
            <Text>Sort Items</Text>
         </TouchableOpacity>
         <ScrollView width = {width-20}>
            {Object.values(tasks).reverse().map(item => (
               <Task key = {item.id} item={item} deleteTask={_deleteTask}
               toggleTask={_toggleTask} updateTask={_updateTask}/>
           ))}
         </ScrollView>
    </SafeAreaView>


   )
}

const MenuScreen = ({navigation}) => {

   return(
      <View style={textStyles.menuText}>
            <MenuButton type={images.setting}
                              onPressOut={()=> navigation.navigate('Setting') }/>
            <MenuButton type={images.review}
                        onPressOut={()=> navigation.navigate('Review') }/>
            <MenuButton type={images.search}
                        onPressOut={()=> navigation.navigate('Search') }/>

      </View>
   )
}

const ReviewPage = () => {
   return (
      <View>
      <Text>Review</Text>
      </View>
  )
}
const SearchPage = () =>{
   return(
      <View>
      <Text>Search</Text>
      </View>
   )
}

const AddSubjectPage = () =>{
   return(
      <View>
      <Text>AddSubject</Text>
      </View>
   )
}

const Stack = createStackNavigator();
let today = new Date().toString().slice(0,10);

const App = () => {
 return(
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Menu" component={MenuScreen}/>
          <Stack.Screen name="Review" component={ReviewPage}/>
          <Stack.Screen name="Setting" component={ReviewPage}/>
          <Stack.Screen name="Search" component={SearchPage}/>
          <Stack.Screen name="AddSubject" component={AddSubjectPage}/>
       </Stack.Navigator>
    </NavigationContainer>
 )
};

export default App;
