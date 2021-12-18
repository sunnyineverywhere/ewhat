import React, { useState,useContext,createContext} from 'react';
import {Stylesheet, TextInput, Text, SafeAreaView, useWindowDimensions, View,FlatList,TouchableOpacity, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { images } from '../../components/Main/image';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import InputSubject from './InputSubject';
import Calendars from './Calendars';
import SearchScreen from './SearchScreen';
import moment from 'moment';
import { StyleSheet } from 'react-native';
import { AppState } from 'react-native';
import { StatusBar } from 'react-native';
import TodoList from '../../components/layout/todolist';
import TodoDetailView from '../../components/layout/TodoDetailView';
import CalendarScreens from './Calendar'

const Tab = createBottomTabNavigator();

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
      expiredTodos: [],
      todos: {},
    };
  }

  // when app component first loaded, load to saved todos and tracking app state
  componentDidMount = () => {
    AppState.addEventListener('change', this._handleAppStateChange);
    this._loadTodos();
  };

  // when app closed, remove app state changed event listener
  componentWillUnmount = () => {
    AppState.removeEventListener('change', this._handleAppStateChange);
  };

  // when app state is background, save current todos to asyncStorage (local storage)
  _handleAppStateChange = nextAppState => {
    if (nextAppState === 'background') {
      this._saveTodo(this.state.todos);
    }
    this.setState({appState: nextAppState});
  };

  // save current todos to asyncStorage
  _saveTodo = newTodos => {
    AsyncStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // load saved todos from asyncStorage
  _loadTodos = async () => {
    try {
      const getSavedTodos = await AsyncStorage.getItem('todos');
      let savedTodos = JSON.parse(getSavedTodos);
      savedTodos = savedTodos === null ? {} : savedTodos; // null check
      const expiredTodos = this._findExpiredTodo(savedTodos); // search expired todos
      this.setState({todos: savedTodos, expiredTodos: expiredTodos});
    } catch (err) {
      console.log(err);
    }
  };

  // callback function
  // if you want add new todo in todo list, call this function from child
  _addTodo = newTodoTitle => {
    const _id = Date.now(); // name(id) each todo element in todos
    const now = moment().format('YYYY[-]MM[-]DD');
    const newTodo = {
      [_id]: {
        id: _id,
        title: newTodoTitle !== '' ? newTodoTitle : 'New Todo Title',
        description: '',
        dueDate: '',
        createdAt: now,
        priority: '3',
        isCompleted: false,
      },
    };
    this.setState(prevState => {
      const newState = {
        ...prevState,
        todos: {
          ...prevState.todos,
          ...newTodo,
        },
      };
      newState.expiredTodos = this._findExpiredTodo(newState.todos);
      return {...newState};
    });
  };

  // callback function
  // if you want delete one todo, call this function from child
  _deleteTodo = id => {
    this.setState(prevState => {
      const todos = prevState.todos;
      delete todos[id];
      const newState = {
        ...prevState,
        ...todos,
      };
      newState.expiredTodos = this._findExpiredTodo(newState.todos);
      return {...newState};
    });
  };

  // callback function
  // if you want delete many todos, call this function from child
  _deleteManyTodo = todoList => {
    this.setState(prevState => {
      const todos = prevState.todos;
      todoList.map(todo => {
        delete todos[todo.id];
      });
      const newState = {
        ...prevState,
        ...todos,
      };
      newState.expiredTodos = this._findExpiredTodo(newState.todos);
      return {...newState};
    });
  };

  // callback function
  // if child component's complete state changed, call this function from child
  _completeToggle = (id, currentCompleteState) => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        todos: {
          ...prevState.todos,
          [id]: {
            ...prevState.todos[id],
            isCompleted: !currentCompleteState,
          },
        },
      };
      return {...newState};
    });
  };

  // callback function
  // if child component's title text changed, call this function from child
  _changeTitleText = (id, text) => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        todos: {
          ...prevState.todos,
          [id]: {
            ...prevState.todos[id],
            title: text,
          },
        },
      };
      return {...newState};
    });
  };

  // callback function
  // if child component's description changed, call this function from child
  _changeDescriptionText = (id, text) => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        todos: {
          ...prevState.todos,
          [id]: {
            ...prevState.todos[id],
            description: text,
          },
        },
      };
      return {...newState};
    });
  };

  // callback function
  // if child component's priority changed, call this function from child
  _changePriority = (id, prior) => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        todos: {
          ...prevState.todos,
          [id]: {
            ...prevState.todos[id],
            priority: prior,
          },
        },
      };
      return {...newState};
    });
  };

  // callback function
  // if child component's due date changed, call this function from child
  _changeDueDate = (id, date) => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        todos: {
          ...prevState.todos,
          [id]: {
            ...prevState.todos[id],
            dueDate: date,
          },
        },
      };
      newState.expiredTodos = this._findExpiredTodo(newState.todos);
      return {...newState};
    });
  };

  // find Expired Todos in new state of todos
  _findExpiredTodo = todos => {
    let now = new Date();
    let expired = [];
    Object.values(todos).map(todo => {
      if (todo.dueDate !== '') {
        // convert date string to date type object
        let splited = todo.dueDate.split('-');
        let dueDate = new Date(
          splited[0],
          splited[1] - 1,
          splited[2],
          23,
          59,
          59,
        );
        if (dueDate < now) {
          expired.push(todo);
        }
      }
    });
    return expired;
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#5c3735" />
        <TodoList
          todos={this.state.todos}
          addTodo={this._addTodo}
          deleteTodo={this._deleteTodo}
          completeStateToggle={this._completeToggle}
          changeTitleText={this._changeTitleText}
          changeDescriptionText={this._changeDescriptionText}
          changePriority={this._changePriority}
          changeDueDate={this._changeDueDate}
        />
        </View>
    );
  }
}


/*
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
*/

const SearchPage = () =>{
   return(
      <View>
      <Text>Search</Text>
      </View>
   );
}

const CalanderPage = () =>{
   return(
      <CalendarScreens />
   )
}

const Main = () => {
   return(
          <NavigationContainer independent = {true}>
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
                name="Calendar"
                component={CalendarScreens}
                options={{
                  title: 'Calendar',
                  tabBarIcon: ({color, size}) => (
                    <Icon name="calendar-today" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="AddSub"
                component={InputSubject}
                options={{
                  title: 'Add Subject',
                  tabBarIcon: ({color, size}) => (
                    <Icon name="subject" color={color} size={size} />
                  ),
                }}
              />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                  title: 'Search',
                  tabBarIcon: ({color, size}) => (
                    <Icon name="search" color={color} size={size} />
                  ),
                }}
              />

            </Tab.Navigator>
          </NavigationContainer>

  
   )
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#224E41',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Main;

/*
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
*/
