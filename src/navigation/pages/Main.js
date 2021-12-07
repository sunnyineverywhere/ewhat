import React, { useState,useContext,createContext} from 'react';
import {TextInput, Text, SafeAreaView, useWindowDimensions, View,FlatList,TouchableOpacity, Alert} from 'react-native';
import { viewStyles,textStyles} from './styles';
import Input from './components/Input';
import Task from './components/Task';
import IconButton from './components/IconButton';
import { NavigationContainer } from '@react-navigation/native';
import { images } from './image';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';



const HomeScreen = ({navigation}) =>{
   
   const [isReady, setIsReady] = useState(false);
   const [newTask, setNewTask] = useState('');
   //object 로 task 생성
   const [tasks, setTasks] = useState({});
   const [working,  setWorking] = useState(true);

   const Completed = () => {
    setWorking(true);
    
  };
   const Uncompleted = () => { 
    setWorking(false);
  };


   const _saveTasks = async tasks => {
      try{
         await AsyncStorage.setItem('tasks',JSON.stringify(tasks));
         setTasks(tasks);
      }catch(e) {
         console.error(e);
      }
   };
   const _addTask = () =>{
     if(newTask === ""){
       return;
     }
      const ID = Date.now().toString();
      const newTaskObject = {
         [ID]: {id: ID, text: newTask, working},
      };
      
      setNewTask('');
      setTasks({...tasks,...newTaskObject});
      _saveTasks({...tasks,...newTaskObject });
   };
   const _deleteTask = id => {
      const currentTasks = Object.assign({}, tasks);
      delete currentTasks[id];
      setTasks(currentTasks);
      _saveTasks(currentTasks);
   };
   const _deletAllTask = () => {
     Alert.alert(
       'DELETE ALL',
       'Are You Sure?',
       [
         {text:'cancel', onPress:()=>{},styl:'cancel'},
         {text:'Sure', onPress:()=>{
           setTasks([]);
         },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    ); 
   };
  //  const _sortTask = () => {
  //     const sortTasks = Object.values({}, tasks);
  //     sortTasks.reverse();
  //     setTasks(sortTasks);  
  //     //_saveTasks(sortTasks);  
  //  };
   const _toggleTask = id => {
      const currentTasks = Object.assign({}, tasks);
      Completed(currentTasks);
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
         <IconButton type={images.deleteAll} onPressOut={_deletAllTask}/>
       </View>
       <Input 
       value={newTask} onChangeText={_handleTextChange}
         onSubmitEditing={_addTask} onBlur={_onBlur}/> 

          {/* <TouchableOpacity  onPress={_sortTask} >
            <Text >Sort</Text>
         </TouchableOpacity> 
         */}
        <FlatList
         data={Object.values(tasks)}
         keyExtractor={(item)=>item.id}
         renderItem={({item})=>
            <TouchableOpacity onPress={onPress}>
           <Task key = {item.id} item={item} deleteTask={_deleteTask} toggleTask={_toggleTask} updateTask={_updateTask}/>
           </TouchableOpacity>
           }
         />  
         

       <View style={viewStyles.complete} >    
      <TouchableOpacity onPress={() => {
        navigation.navigate('Review',{
          itemId: tasks,
        });
      }}>
        <Icon name="rate-review" size={30} color="black" />
      </TouchableOpacity>
       </View>       
    </SafeAreaView>
   
    
   ) : (
      <AppLoading 
         startAsync = {_loadTasks}
         onFinish = {() => setIsReady(true)}
         onError={console.error}/>
   );
}
const Tab = createBottomTabNavigator();

let today = new Date().toString().slice(0,10);

const AddSubjectPage = () =>{
  const [count, setcount] = useState(0);
  const Subject = () => {
  const {subject} = useContext(SubjectContext);
  return <Text>Number: {subject.number}</Text>;
}
  const SubjectContext = createContext({
    subject: {number: 6},
    dispatch: () => {},
});
  const SubjectProvider = ({children}) => {
  const [count, setcount] = useState(0);

  const value = {subject: {count}, dispatch: setcount};
  return <SubjectContext.Provider value = {value}>{children}</SubjectContext.Provider>
};
  const SubjectConsumer = SubjectContext.Consumer;
  const {dispatch} = useContext(SubjectContext);
  return (
    <TextInput 
          value = {count}
          onChangeText = {text => setcount(text)}
          onSubmitEditing = {() => {
              dispatch(count);
              setcount();
          }}
          placeholder = "How many lectures do you take?"
          autoCapitalize = "none"
          autoCorrect = {false}
          returnKeyType = "done"
          keyboardType = "number-pad"
      />
  );

//   //


// const Inputnames = () => {
//     const width = useWindowDimensions.width;
//     return <StyledInput width = {width} placeholder = {placeholder} maxLength = {50}/>;
// }

}

const ReviewPage = ({route, navigation}) => {
  const {itemId} = route.params;
  
   return (
      <View style={{ flex: 1, alignItems:'center',justifyContent:'center'}}>
       <FlatList
         data={Object.values(itemId)}
         keyExtractor={(item)=>item.id}
         renderItem={({item})=>(
           item.completed ? (
           <Text style={viewStyles.doneListText}>
             {item.text}
           </Text>
           ):(
           null
         ))
           }
         />         
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
                name="AddSub"
                component={AddSubjectPage}
                options={{
                  title: 'Add Subject',
                  tabBarIcon: ({color, size}) => (
                    <Icon name="subject" color={color} size={size} />
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
