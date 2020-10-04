import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign } from "@expo/vector-icons";
import {TODOS} from './utils/data.js';
import {TodoItem} from './TodoItem.js';
//console.log(TODOS);
const Stack = createStackNavigator();


const Tab=createBottomTabNavigator();
function CompleteScreen(){
  return(
    <View style={{flex:1,alignItems:'center'}}>
      <View style={{width:'100%',borderBottomWidth:1,borderBottomColor:'black',borderStyle:'solid',marginTop:45}}>
       <Text style={{fontWeight:'bold',fontSize:23,marginBottom:20,textAlign:'center'}}>Complete</Text>
      </View >
      
      <Text style={{marginVertical:'85%',fontSize:17}}>Mission Complete</Text>
    </View>
  )
}
function AllScreen(){
  return(
    <View style={styles.container}>
      {TODOS.map((todo, idx) => {
        return <TodoItem key={todo.body} todo={todo} idx={idx} />;
      })}
    </View>
  )
}
function ActiveScreen(){
  return(
    <View style={{flex:1,alignItems:'center'}}>
      <View style={{width:'100%',borderBottomWidth:1,borderBottomColor:'black',borderStyle:'solid',marginTop:45}}>
       <Text style={{fontWeight:'bold',fontSize:23,marginBottom:20,textAlign:'center'}}>Active</Text>
      </View >
      
      <Text style={{marginVertical:'85%',fontSize:17}}>Act Native</Text>
    </View>
  ) 
}
const routeIcons = {
  Complete: "checkcircleo",
  All: "pluscircle",
  Active: "bars"
};
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={routeIcons[route.name]}
              size={24}
              color={focused ? "blue" : "grey"}
            />
          ),
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "grey",
        }} >
        <Tab.Screen name='Complete' component={CompleteScreen}/>
        <Tab.Screen name='All' component={AllScreen} />
        <Tab.Screen name='Active' component={ActiveScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

 export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: '95%',
    minHeight: 20,
    color: 'white',
    borderRadius: 5,
    flexWrap: 'wrap'
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
});

