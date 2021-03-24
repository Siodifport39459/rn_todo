import React,{ useState } from 'react';
import {StyleSheet,View,Button,FlatList,Text} from 'react-native'
//import AboutScreen from './AboutScreen/AboutScreen'
import GoalItem from '../../components/GoalItem';
import GoalInput from '../../components/GoalInput';
import styles from './styleshome';



export default function HomeScreen({navigation}) {

    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    
    const onClickLogin= () =>{
      navigation.navigate('Login')
    }
    const onClickRegistration = () =>  {
      navigation.navigate('Registration')

    }
    const onClickLocation = () =>  {
      navigation.navigate('GeoLocation')

    }
    const onClickAddImage = () =>{
      navigation.navigate('ImagePicker')

    }

  
    const addGoalHandler = goalTitle => {
      setCourseGoals(currentGoals => [
        ...currentGoals,
        { id: Math.random().toString(), value: goalTitle }
      ]);
      setIsAddMode(false);
    };
  
    const removeGoalHandler = goalId => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter(goal => goal.id !== goalId);
      });
    };
  
    const cancelGoalAdditionHandler = () => {
      setIsAddMode(false);
    };
  
    return (
        
      <View>
        <Text style={styles.text} onPress={onClickLogin}>Login</Text>
        <Text style={styles.text} onPress={onClickRegistration}>SignUp</Text>
        <Text style={styles.text} onPress={onClickLocation}>Location</Text>
        <Text style={styles.text} onPress={onClickAddImage}>Add Image</Text>
        
     <View style={styles.container}>
       
       <Text style={styles.text}>Today's Tasks</Text>

        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <View style={styles.container}>
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
        </View>
          
       
       
       
      </View>
      </View>
    
    
        
    );
  }