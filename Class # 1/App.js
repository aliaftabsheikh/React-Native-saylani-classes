import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button, ScrollView, FlatList} from 'react-native';

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
        <FlatList data={todolist} renderItem={(item)=> <Text style={styles.listItem}>{item.item}</Text>
        }/>
      </View>

      {/* <ScrollView style={styles.scrollView} contentContainerStyle={{alignItems: 'center'}}>
        {todolist.map((item, index)=>(
          <Text key={item + index} style={styles.listItem}>{item}</Text>
        ))}
      </ScrollView> */}
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
    borderWidth: 1,
    marginBottom: 10
   },
   listItem:{
     padding: 10,
     margin:10,
     backgroundColor: '#c42ea3',
     borderColor: '#000',
     borderStyle: 'solid',
     borderWidth: 1,
     width: '80%'
   },
   scrollView :{
    width: '100%',
    alignItems: 'center'
  }
});
