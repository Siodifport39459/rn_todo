{/*import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet} from 'react-native'
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';*/}
import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet} from 'react-native'
import styles from './styleslocation';

class SwichExample extends Component {
   state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
   }
   watchID: ?number = null;
   componentDidMount = () => {
      navigator.geolocation.getCurrentPosition(
         (position) => {
            const initialPosition = JSON.stringify(position);
            this.setState({ initialPosition });
         },
         (error) => alert(error.message),
         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
      this.watchID = navigator.geolocation.watchPosition((position) => {
         const lastPosition = JSON.stringify(position);
         this.setState({ lastPosition });
      });
   }
   componentWillUnmount = () => {
      navigator.geolocation.clearWatch(this.watchID);
   }
   render() {
      return (
         <View style = {styles.container}>
            <Text style = {styles.boldText}>
               Initial position:
            </Text>
            
            <Text>
               {this.state.initialPosition}
            </Text>
            
            <Text style = {styles.boldText}>
               Current position:
            </Text>
            
            <Text>
               {this.state.lastPosition}
            </Text>
         </View>
      )
   }
}
export default SwichExample



{/*export default class LocationScree extends React.Component{
    state={
        location:{},
            errorMessage:''
    }

    componentWillUnmount (){
        this. _getLocation();

    }

    _getLocation = async () => {
        const {status} = await permissions.AskAsync(Permissions.Location)
        if(status !== 'granted'){
            console.log('permission not granted');

            this.setState({
                errorMessage:'permission not granted'
            })
        }

        const location= await Location.getCurrentPositionAsync();

        this.setState({
            location
        })

    }


render(){

    return(
        <View>
            <Text>{JSON.stringify(this.state.location)}</Text>

        </View>
        

        );

}
  
}*/}
