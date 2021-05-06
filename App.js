import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import dictionary from './localdb';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
      definition:[],
      type: [],
    };
    console.log(dictionary['externally'].definition);
  }

  render() {
    return (
      <View style={styles.view}>
      <Text style={styles.low}> Enter a word here to find its meaning</Text>
        <TextInput
          style={styles.input}
          value={this.state.text}
          onChangeText={(text) => {
            this.setState({
              text: text,
            });
          }}
        />
        <TouchableOpacity style={styles.btn}><Text style={styles.low}   onPress={()=>{
        
          var newText=this.state.text.toLowerCase().trim();  
console.log(newText);

dictionary[newText] ? (this.setState({
  definition:dictionary[newText].definition,
  type:dictionary[newText].lexicalCategory
 
}) )  
  : 
alert('Word Not Found !!')
        }}> Search Definition </Text> </TouchableOpacity>

  <Text style={styles.low2}> Type : 
          {this.state.type} </Text>

          <Text style={styles.low2}> Definition : 
          {this.state.definition} </Text>

        
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view:{
    backgroundColor:'#FFBBFF'
  }
  ,
  input:{
    marginTop:7,
    margin:30,
    align:'center',
    borderWidth:2,
    borderColor:'white',
    borderRadius:20,
 padding:3,
 color:'white',
 textAlign:'center',
  
 fontSize:22
  },
  low:{
    marginBottom:0,
    textAlign:'center',
     color:'white',
  },
  btn:{
    color:'white',
    backgroundColor:'#BF5FFF',
    textAlign:'center',
    padding:10,
    marginRight:50,
    marginLeft:50
    
  },
    low2:{
    marginBottom:20,
    marginTop:20,
    fontSize:22,
    textAlign:'center',
     color:'white',
  },
})
