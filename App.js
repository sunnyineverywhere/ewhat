import React, { useState, } from 'react';
import { Text, SafeAreaView,View,FlatList, Dimensions,ScrollView, TouchableOpacity, Pressable} from 'react-native';
import { viewStyles,textStyles} from './styles';
import Input from './components/Input';
import Task from './components/Task';
import IconButton from './components/IconButton';
import MenuButton from './components/MenuButton';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { images } from './image';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';




const HomeScreen = ({navigation}) =>{
   const width = Dimensions.get('window').width;
   const [isReady, setIsReady] = useState(false);
   const [newTask, setNewTask] = useState('');
   const [tasks, setTasks] = useState({});


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
      //setTasks({...tasks,...newTaskObject});
      _saveTasks({...tasks,...newTaskObject });
   }
   const _deleteTask = id => {
      const currentTasks = Object.assign({}, tasks);
      delete currentTasks[id];
      //setTasks(currentTasks);
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
     // setNewTask(currentTasks);
      _saveTasks(currentTasks);
   };
   const _handleTextChange = text => {
      setNewTask(text);
   };
   const _updateTask = item => {
      const currentTasks = Object.assign({},tasks);
      currentTasks[item.id] = item;
      //setTasks(currentTasks);
      _saveTasks(currentTasks);
   };
   const _onBlur = () => {
      setNewTask('');
   };
   const _loadTasks = async () => {
      const loadedTasks = await AsyncStorage.getItem('tasks');
      setTasks(JSON.parse(loadedTasks || '{}'));
   };
  
    return isReady ? (
        
    <SafeAreaView style={viewStyles.container}>
       <View style={viewStyles.header}>
         <Text style ={textStyles.title}>Date: {today}</Text>
         <View style={viewStyles.btnContainer}>
         <TouchableOpacity onPress={()=> navigation.navigate('Menu') }>
         <IconButton type={images.menu} onPressOut= {()=> navigation.navigate('Menu')}/>
         </TouchableOpacity>
         <IconButton type={images.add} onPressOut= {()=> navigation.navigate('AddSubject')}/>
         </View>
       </View>
       <Input value={newTask} onChangeText={_handleTextChange}
         onSubmitEditing={_addTask} onBlur={_onBlur}/> 

      
         <TouchableOpacity  onPress={_deletAllTask} style={viewStyles.btnContainer}>
            <Text style={viewStyles.buttonText}>Delete All</Text>
         </TouchableOpacity>
         <TouchableOpacity  onPress={_sortTask} style={viewStyles.btnContainer}>
            <Text style={viewStyles.buttonText}>Sort</Text>
         </TouchableOpacity>
         {/*<ScrollView width = {width-20}> */}
      
           <FlatList
           data={Object.values(tasks).map(item => (
            <Task key = {item.id} item={item} deleteTask={_deleteTask} 
            toggleTask={_toggleTask} updateTask={_updateTask}/>
            ))}
           ItemSeparatorComponent=
           renderItem={item => this.renderItem(item)}
           keyExtractor={item => item.id.toString()}  
         />
           
           
      {/*} </ScrollView> */}
    </SafeAreaView>
   
    
   ) : (
      <AppLoading 
         startAsync = {_loadTasks}
         onFinish = {() => setIsReady(true)}
         onError={console.error}/>
   );
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
// const selectionDelete = ({navigation, route})=>{
//    const [load, setLoad] = useState();
//    const [data, setData] = useState({});
//    //data에는 우리가 입력한 Task를 넣어야 한다 => 페이지 넘어갈 때 data로 받음
//    //이 페이지에선 Tasks가 곧 data라는 뜻이다
//    const deleteTask = id => {
//       const currentTasks = Object.assign({}, data);
//       delete currentTasks[id];
//       //setTasks(currentTasks);
//    };
//    const itemSeperator = () => {
//       //FlatList의 아이템들의 간격을 설정하는 함수입니다.
//       return <View style={[viewStyles.btnContainer]}/>
//    }
//    const renderItem = (data) =>{
//       return(
//          <TouchableOpacity
//             style={[styles.btnContainer, styles.buttonText]}      
//             onPress={() => this.selectItem(data)}>
//             <Text style={styles.lightText}>{data.text} </Text>
//          </TouchableOpacity>
//       )
//    }
   // const isSelected = (data) => {
   //    return load? 
   // }
   // const selectItem = (data) => {
   //    setLoad(data);
   //    setData = data.load ? styles.buttonText : styles.btnContainer;

   // }
   // return (
   //    <View>
   //       <Text>SELECT THE ITEM YOU WANT TO DELETE</Text>
   //          <FlatList 
   //          data={Task}
   //          ItemSeparatorComponent={itemSeperator}
   //          renderItem={renderItem}
   //          keyExtractor={(data) => data.id}
   //          extraData={data}
   //          />

   //       <IconButton type={images.choose} onPressOut= {() => deleteTask()}/>
   //    </View>
   // )




//}
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
