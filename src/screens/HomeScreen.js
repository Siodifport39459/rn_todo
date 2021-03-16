import React,{useState} from 'react';
import {View,StyleSheet,FlatList,Button,Text} from 'react-native';
import TaskInput from '../../components/TaskInput';
import TaskItem from '../../components/TaskItem'

export default function HomeScreen(){
   const [isAddTaskMode,setAddTaskMode]=useState(false);
   const [taskList,setTaskList]=useState([]);
   
   const taskAddHandler= taskTitle =>{
    setTaskList(currentTasks=>
      [...currentTasks,{id: Math.random().toString(),value:taskTitle}]
    );
    setAddTaskMode(false);
  };
  const taskCancelHandler= ()=>{
    setAddTaskMode(false);

  };
  const removeTask= TaskId => {
    setTaskList(currentTasks => {
      return currentTasks.filter(task =>task.id !== TaskId);
    });
  };

   return(
     <View style={styles.container}>
       <Text style={styles.text}>Today's Tasks</Text>
       <View style={styles.rowitem}>
       <Button
       style={styles.button}
       onPress={() =>setAddTaskMode(true)}
       title="ADD"
       color="#841584"
       />
       </View>
       <TaskInput
       visible={isAddTaskMode}
       onAddTask={taskAddHandler}
       onCancel={taskCancelHandler}
       />
       <FlatList
       data={taskList}
       keyExtractor={({item,index}) => item.id}
       renderItem={itemData =>(
        <TaskItem
        id={itemData.item.id}
        title={itemData.item.value}
        onDelete={removeTask}
        />
       )}
       />
      
     </View>

   );

}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundcolor:'#D3D3D3'
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    paddingTop:20,
    paddingBottom:10
  },
  rowitem:{
    flexDirection:'row',
   
  },
  input:{
    height:40,
    margin:12,
    borderRadius:5,
    borderWidth:1,
    padding:5,
    textAlign:'center'
  },
  button:{
    
    textAlign:'center',
    borderRadius:5,
    height:30,
    width:12

  },
})
 
    

