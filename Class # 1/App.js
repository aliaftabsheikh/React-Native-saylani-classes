import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default function App() {

  const [inputData, setInputData] = useState('')
  const [todolist, setTodoList] = useState([])

  const AddTodo = ()=>{
    setTodoList(prevValue => [...prevValue, inputData])
    console.log(inputData);
  }
  return (
    <View style={styles.container}>
      <View>
      <TextInput style={styles.input} value={inputData} onChange={(e)=> setInputData(e.target.value)}/>
      <Button title='ADD' onPress={AddTodo}/>
      </View>
      <View>
        {todolist.map((item, index)=>(
          <Text key={item + index}>{item}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input :{
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: '1px',
    marginBottom: 10
   }
});
